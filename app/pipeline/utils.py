# app/pipeline/utils.py

import re
from io import BytesIO
from datetime import date
from typing import List, Dict, Tuple, Optional
from sqlalchemy.orm import Session

from app.models.bank import BankBrand
from app.models.transaction import Transaction

# PDF processing imports (will be available after pip install)
try:
    import fitz  # PyMuPDF
    import pdfplumber
    import pytesseract
    from PIL import Image
    PDF_LIBS_AVAILABLE = True
except ImportError:
    PDF_LIBS_AVAILABLE = False
    print("PDF processing libraries not installed. Run: pip install -r requirements.txt")

# === Mexican Bank Detection Patterns ===
MEXICAN_BANK_PATTERNS = {
    # Main Mexican banks with multiple variations
    BankBrand.BBVA: [
        r'bbva\s*(?:bancomer|méxico|mexico)?',
        r'bancomer',
        r'banco\s+bilbao\s+vizcaya',
        r'012180002'  # CLABE code
    ],
    BankBrand.SANTANDER: [
        r'banco\s+santander',
        r'santander\s*(?:méxico|mexico)?',
        r'014180001'  # CLABE code``
    ],
    BankBrand.BANORTE: [
        r'banorte',
        r'banco\s+del\s+norte',
        r'072180004'  # CLABE code
    ],
    BankBrand.HSBC: [
        r'hsbc\s*(?:méxico|mexico)?',
        r'021180001'  # CLABE code
    ],
    BankBrand.CITIBANAMEX: [
        r'citibanamex',
        r'banamex',
        r'banco\s+nacional\s+de\s+méxico',
        r'002180002'  # CLABE code
    ],
    BankBrand.SCOTIABANK: [
        r'scotiabank',
        r'044180001'  # CLABE code
    ],
    BankBrand.INBURSA: [
        r'inbursa',
        r'036180001'  # CLABE code
    ],
    BankBrand.MULTIVA: [
        r'multiva',
        r'132180008'  # CLABE code
    ],
    BankBrand.BANREGIO: [
        r'banregio',
        r'058180002'  # CLABE code
    ],
    BankBrand.AZTECA: [
        r'banco\s+azteca',
        r'azteca',
        r'127180001'  # CLABE code
    ],
    BankBrand.AMERICAN_EXPRESS: [
        r'american\s+express',
        r'amex'
    ]
}

# === PDF Text Extraction Functions ===

def extract_text_pages(file_path: str) -> List[str]:
    """
    Extract text from PDF pages using multiple methods for reliability.
    Returns list of strings, one per page.
    """
    if not PDF_LIBS_AVAILABLE:
        raise ImportError("PDF processing libraries not available. Install with: pip install PyPDF2 pdfplumber pymupdf")
    
    pages_text = []
    
    try:
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text()
                pages_text.append(text or "")
        
       
        if any(len(text.strip()) > 50 for text in pages_text):
            return pages_text
            
    except Exception as e:
        print(f"pdfplumber failed: {e}")
    
    try:
        pages_text = []
        doc = fitz.open(file_path)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text = page.get_text()
            pages_text.append(text or "")
        doc.close()
        
    except Exception as e:
        print(f"PyMuPDF failed: {e}")
        pages_text = []
    
    return pages_text

def is_scanned_pdf(file_path: str) -> bool:
    """
    Detect if PDF is scanned (image-based) vs text-based.
    """
    if not PDF_LIBS_AVAILABLE:
        return False 
        
    try:
        doc = fitz.open(file_path)
        total_chars = 0
        total_images = 0
        
        for page_num in range(min(3, len(doc))): 
            page = doc.load_page(page_num)
            text = page.get_text()
            total_chars += len(text.strip())
            
            # Count images on page
            image_list = page.get_images()
            total_images += len(image_list)
        
        doc.close()
        
        if total_chars < 100 and total_images > 0:
            return True
        
        if total_images > 0 and total_chars < (total_images * 50):
            return True
            
        return False
        
    except Exception as e:
        print(f"Error detecting PDF type: {e}")
        return False

def maybe_ocr(file_path: str) -> List[str]:
    """
    Perform OCR on PDF pages when text extraction fails or PDF is scanned.
    Returns list of extracted text per page.
    """
    if not PDF_LIBS_AVAILABLE:
        print("OCR libraries not available")
        return []
        
    pages_text = []
    
    try:
        # Convert PDF pages to images and run OCR
        doc = fitz.open(file_path)
        
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            
            # Convert to image
            mat = fitz.Matrix(2.0, 2.0)  # 2x zoom for better OCR
            pix = page.get_pixmap(matrix=mat)
            img_data = pix.tobytes("png")
            
            # Convert to PIL Image
            img = Image.open(BytesIO(img_data))
            
            # Run OCR with Spanish language support
            text = pytesseract.image_to_string(
                img, 
                lang='spa+eng',  
                config='--psm 6' 
            )
            
            pages_text.append(text)
        
        doc.close()
        
    except Exception as e:
        print(f"OCR failed: {e}")
        pages_text = []
    
    return pages_text

# === Bank Detection ===

def detect_bank(file_path: str) -> Optional[BankBrand]:
    """
    Detect which Mexican bank issued the statement by analyzing PDF content.
    The detection is based on keyword and pattern matching.
    """
    # Extract text from first few pages
    pages_text = extract_text_pages(file_path)
    
    if not pages_text:
        return BankBrand.UNKNOWN
    
    # Combine first 2-3 pages for bank detection
    combined_text = " ".join(pages_text[:3]).lower()
    
    # Remove accents and normalize text for better matching
    import unicodedata
    normalized_text = unicodedata.normalize('NFD', combined_text)
    normalized_text = ''.join(c for c in normalized_text if unicodedata.category(c) != 'Mn')
    
    # Score each bank based on pattern matches
    bank_scores = {}
    
    for bank, patterns in MEXICAN_BANK_PATTERNS.items():
        score = 0
        for pattern in patterns:
            matches = re.findall(pattern, normalized_text, re.IGNORECASE)
            score += len(matches)
            
            # Give extra weight to CLABE codes (more specific)
            if re.match(r'\d{9}', pattern):
                score += len(matches) * 3
        
        if score > 0:
            bank_scores[bank] = score
    
    if not bank_scores:
        return BankBrand.UNKNOWN
    
    # Return bank with highest score
    return max(bank_scores.items(), key=lambda x: x[1])[0]

# === Period Detection ===

def detect_period(file_path: str) -> Tuple[Optional[date], Optional[date]]:
    """
    Extract statement period (start and end dates) from PDF.
    Returns tuple of (start_date, end_date).
    """
    pages_text = extract_text_pages(file_path)
    
    if not pages_text:
        return None, None
    
    # Common Spanish date patterns in Mexican bank statements
    date_patterns = [
        # "Del 01 de enero al 31 de enero de 2024"
        r'del\s+(\d{1,2})\s+de\s+(\w+)\s+al\s+(\d{1,2})\s+de\s+(\w+)\s+de\s+(\d{4})',
        
        # "Periodo: 01/01/2024 - 31/01/2024"
        r'periodo\s*:?\s*(\d{1,2})/(\d{1,2})/(\d{4})\s*-\s*(\d{1,2})/(\d{1,2})/(\d{4})',
        
        # "01-ene-2024 al 31-ene-2024"
        r'(\d{1,2})-(\w{3})-(\d{4})\s+al\s+(\d{1,2})-(\w{3})-(\d{4})',
        
        # ISO format: "2024-01-01 a 2024-01-31"
        r'(\d{4})-(\d{1,2})-(\d{1,2})\s+a\s+(\d{4})-(\d{1,2})-(\d{1,2})'
    ]
    
    # Spanish month names mapping
    spanish_months = {
        'enero': 1, 'ene': 1, 'febrero': 2, 'feb': 2, 'marzo': 3, 'mar': 3,
        'abril': 4, 'abr': 4, 'mayo': 5, 'may': 5, 'junio': 6, 'jun': 6,
        'julio': 7, 'jul': 7, 'agosto': 8, 'ago': 8, 'septiembre': 9, 'sep': 9,
        'octubre': 10, 'oct': 10, 'noviembre': 11, 'nov': 11, 'diciembre': 12, 'dic': 12
    }
    
    text = " ".join(pages_text[:2]).lower()
    
    for pattern in date_patterns:
        matches = re.search(pattern, text, re.IGNORECASE)
        if matches:
            try:
                groups = matches.groups()
                
                if len(groups) == 5:
                    start_day, start_month_name, end_day, end_month_name, year = groups
                    start_month = spanish_months.get(start_month_name.lower())
                    end_month = spanish_months.get(end_month_name.lower())
                    
                    if start_month and end_month:
                        start_date = date(int(year), start_month, int(start_day))
                        end_date = date(int(year), end_month, int(end_day))
                        return start_date, end_date
                
                elif len(groups) == 6: 
                    start_day, start_month, start_year, end_day, end_month, end_year = groups
                    start_date = date(int(start_year), int(start_month), int(start_day))
                    end_date = date(int(end_year), int(end_month), int(end_day))
                    return start_date, end_date
                    
            except (ValueError, TypeError) as e:
                print(f"Error parsing dates: {e}")
                continue
    
    return None, None

# === Placeholder functions (to be implemented based on your specific needs) ===

def parse_with_template(bank: BankBrand, pages_text: List[str], file_path: str) -> Tuple[List[Dict], Dict]:
    """
    Parse transactions using bank-specific templates.
    Returns (raw_transactions, metadata).
    """
    from .templates import parse_bank_statement
    return parse_bank_statement(bank, pages_text)

def normalize_transactions(raw_transactions: List[Dict]) -> List[Dict]:
    """
    Normalize transaction data to standard format matching Transaction model.
    """
    normalized = []
    
    for tx in raw_transactions:
        try:
            # Map transaction type to our enum
            tx_type = None
            if tx.get('type') == 'credit':
                tx_type = 'INCOME'
            elif tx.get('type') == 'debit':
                tx_type = 'EXPENSE'
            
            normalized_tx = {
                'date': tx.get('date'),
                'description': tx.get('description', ''),
                'amount': float(tx.get('amount', 0)),
                'currency': tx.get('currency', 'MXN'),
                'type': tx_type,
                'balance': tx.get('balance')
            }
            
            # Only add if we have essential data
            if normalized_tx['description'] and normalized_tx['amount'] != 0:
                normalized.append(normalized_tx)
                
        except Exception as e:
            print(f"Error normalizing transaction: {e}")
            continue
    
    return normalized

def validate_report(transactions: List[Dict], start_date: date, end_date: date) -> Tuple[bool, str]:
    """
    Validate the parsed transactions for consistency.
    """
    # Implement validation logic
    if not transactions:
        return False, "No transactions found"
    
    return True, "Validation passed"

def persist_transactions(db: Session, doc_id: str, transactions: List[Dict]):
    """
    Save normalized transactions to database.
    """
    for tx_data in transactions:
        transaction = Transaction(
            document_id=doc_id,
            **tx_data
        )
        db.add(transaction)
    db.commit()