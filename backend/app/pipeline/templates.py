# app/pipeline/templates.py
"""
Bank-specific templates and parsing logic for Mexican banks.
Each bank has different PDF formats and requires custom parsing.
"""

import re
from datetime import datetime, date
from decimal import Decimal
from typing import List, Dict, Tuple, Optional
from app.models.bank import BankBrand

# === Mexican Bank Statement Parsing Templates ===

class BankTemplate:
    """Base class for bank-specific parsing templates"""
    
    def parse_transactions(self, pages_text: List[str]) -> List[Dict]:
        """Override this method in bank-specific subclasses"""
        raise NotImplementedError
    
    def extract_account_info(self, pages_text: List[str]) -> Dict:
        """Extract account information like account number, client name, etc."""
        return {}
    
    def _parse_date(self, date_str: str) -> Optional[date]:
        """Parse various date formats used by Mexican banks"""
        date_formats = [
            '%d/%m/%Y',
            '%d-%m-%Y', 
            '%d-%b-%Y',
            '%Y-%m-%d'
        ]
        
        # Handle Spanish month abbreviations
        spanish_months = {
            'ene': 'jan', 'feb': 'feb', 'mar': 'mar', 'abr': 'apr',
            'may': 'may', 'jun': 'jun', 'jul': 'jul', 'ago': 'aug',
            'sep': 'sep', 'oct': 'oct', 'nov': 'nov', 'dic': 'dec'
        }
        
        normalized_date = date_str.lower()
        for spanish, english in spanish_months.items():
            normalized_date = normalized_date.replace(spanish, english)
        
        for fmt in date_formats:
            try:
                return datetime.strptime(normalized_date, fmt).date()
            except ValueError:
                continue
        
        return None
    
    def _parse_amount(self, amount_str: str) -> Decimal:
        """Parse monetary amounts, handling Mexican formatting"""
        if not amount_str:
            return Decimal('0')
        
        # Remove currency symbols and whitespace
        cleaned = re.sub(r'[\$\s]', '', amount_str)
        
        # Handle thousands separators (commas)
        cleaned = cleaned.replace(',', '')
        
        try:
            return Decimal(cleaned)
        except (ValueError, TypeError, Exception):
            return Decimal('0')

class BBVATemplate(BankTemplate):
    """BBVA Bancomer statement parser"""
    
    def parse_transactions(self, pages_text: List[str]) -> List[Dict]:
        transactions = []
        
        # BBVA transaction patterns (common formats)
        patterns = [
            # Date | Description | Debit | Credit | Balance
            r'(\d{2}/\d{2}/\d{4})\s+(.+?)\s+(\$[\d,]+\.\d{2})?\s*(\$[\d,]+\.\d{2})?\s+\$[\d,]+\.\d{2}',
            
            # Alternative format with different spacing
            r'(\d{2}-\w{3}-\d{4})\s+(.+?)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})',
        ]
        
        for page_text in pages_text:
            lines = page_text.split('\n')
            
            for line in lines:
                for pattern in patterns:
                    match = re.search(pattern, line, re.IGNORECASE)
                    if match:
                        tx = self._parse_bbva_transaction(match, line)
                        if tx:
                            transactions.append(tx)
        
        return transactions
    
    def _parse_bbva_transaction(self, match, line: str) -> Optional[Dict]:
        """Parse individual BBVA transaction"""
        try:
            groups = match.groups()
            date_str = groups[0]
            description = groups[1].strip()
            
            # Parse date
            tx_date = self._parse_date(date_str)
            if not tx_date:
                return None
            
            # Determine amount and type
            debit = groups[2] if len(groups) > 2 and groups[2] else None
            credit = groups[3] if len(groups) > 3 and groups[3] else None
            
            amount = 0
            tx_type = 'unknown'
            
            if debit and debit.strip():
                amount = self._parse_amount(debit)
                tx_type = 'debit'
            elif credit and credit.strip():
                amount = self._parse_amount(credit)
                tx_type = 'credit'
            
            return {
                'date': tx_date,
                'description': description,
                'amount': amount,
                'type': tx_type,
                'currency': 'MXN',
                'raw_line': line
            }
            
        except Exception as e:
            print(f"Error parsing BBVA transaction: {e}")
            return None

class SantanderTemplate(BankTemplate):
    """Santander Mexico statement parser"""
    
    def parse_transactions(self, pages_text: List[str]) -> List[Dict]:
        transactions = []
        
        # Santander patterns
        patterns = [
            r'(\d{2}/\d{2}/\d{4})\s+(\d{2}/\d{2}/\d{4})\s+(.+?)\s+([\d,]+\.\d{2})\s*([CD])',
        ]
        
        for page_text in pages_text:
            for pattern in patterns:
                matches = re.findall(pattern, page_text, re.MULTILINE)
                for match in matches:
                    tx = self._parse_santander_transaction(match)
                    if tx:
                        transactions.append(tx)
        
        return transactions
    
    def _parse_santander_transaction(self, match) -> Optional[Dict]:
        """Parse individual Santander transaction"""
        try:
            date_str, value_date, description, amount_str, debit_credit = match
            
            tx_date = self._parse_date(date_str)
            amount = self._parse_amount(amount_str)
            
            tx_type = 'debit' if debit_credit == 'D' else 'credit'
            
            return {
                'date': tx_date,
                'description': description.strip(),
                'amount': amount,
                'type': tx_type,
                'currency': 'MXN'
            }
            
        except Exception as e:
            print(f"Error parsing Santander transaction: {e}")
            return None

class BanorteTemplate(BankTemplate):
    """Banorte statement parser"""
    
    def parse_transactions(self, pages_text: List[str]) -> List[Dict]:
        transactions = []
        
        # Look for transaction tables in Banorte format
        for page_text in pages_text:
            # Banorte often uses table formats
            table_pattern = r'(\d{2}/\d{2}/\d{4})\s+(.{1,50}?)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})'
            matches = re.findall(table_pattern, page_text)
            
            for match in matches:
                tx = self._parse_banorte_transaction(match)
                if tx:
                    transactions.append(tx)
        
        return transactions
    
    def _parse_banorte_transaction(self, match) -> Optional[Dict]:
        """Parse individual Banorte transaction"""
        try:
            date_str, description, amount_str, balance_str = match
            
            tx_date = self._parse_date(date_str)
            amount = self._parse_amount(amount_str)
            
            # Banorte logic for determining debit/credit
            # This would need to be refined based on actual format
            tx_type = 'debit'  # Default, should be determined by context
            
            return {
                'date': tx_date,
                'description': description.strip(),
                'amount': amount,
                'type': tx_type,
                'currency': 'MXN'
            }
            
        except Exception:
            return None

# === Helper functions are now part of BankTemplate base class ===

# === Template Factory ===

def get_bank_template(bank: BankBrand) -> BankTemplate:
    """Factory function to get appropriate template for bank"""
    
    template_map = {
        BankBrand.BBVA: BBVATemplate,
        BankBrand.SANTANDER: SantanderTemplate,
        BankBrand.BANORTE: BanorteTemplate,
        # Add more banks as needed
    }
    
    template_class = template_map.get(bank, BankTemplate)
    return template_class()

# === High-level parsing function ===

def parse_bank_statement(bank: BankBrand, pages_text: List[str]) -> Tuple[List[Dict], Dict]:
    """
    Parse bank statement using appropriate template.
    Returns (transactions, metadata).
    """
    template = get_bank_template(bank)
    
    try:
        transactions = template.parse_transactions(pages_text)
        account_info = template.extract_account_info(pages_text)
        
        metadata = {
            'bank': bank.value,
            'total_transactions': len(transactions),
            'account_info': account_info,
            'parsing_method': template.__class__.__name__
        }
        
        return transactions, metadata
        
    except Exception as e:
        print(f"Error parsing statement for {bank.value}: {e}")
        return [], {'error': str(e)}
