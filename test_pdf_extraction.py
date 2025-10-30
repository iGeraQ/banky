# test_pdf_extraction.py
"""
Example script showing how to extract data from Mexican bank statement PDFs.
This demonstrates the complete pipeline for processing PDF statements.
"""

import os
import sys
from pathlib import Path

# Add the app directory to Python path
sys.path.append(str(Path(__file__).parent / "app"))

from app.models.bank import BankBrand
from app.pipeline.utils import (
    extract_text_pages, 
    detect_bank, 
    detect_period,
    is_scanned_pdf,
    maybe_ocr,
    parse_with_template,
    normalize_transactions
)

def process_pdf_example(pdf_path: str = "/app/s3/ecuenta.pdf"):
    
    """
    Example function showing complete PDF processing workflow.
    """
    print(f"Processing PDF: {pdf_path}")
    
    # Step 1: Detect if PDF is scanned or text-based
    scanned = is_scanned_pdf(pdf_path)
    print(f"Is scanned PDF: {scanned}")
    
    # Step 2: Extract text from pages
    print("Extracting text from PDF...")
    pages_text = extract_text_pages(pdf_path)
    
    if not pages_text or scanned:
        print("Running OCR on PDF...")
        pages_text = maybe_ocr(pdf_path)
    
    if not pages_text:
        print("Failed to extract text from PDF")
        return
    
    print(f"Extracted text from {len(pages_text)} pages")
    
    # Step 3: Detect which bank issued the statement
    bank = detect_bank(pdf_path)
    print(f"Detected bank: {bank}")
    
    # Step 4: Extract statement period
    start_date, end_date = detect_period(pdf_path)
    print(f"Statement period: {start_date} to {end_date}")
    
    # Step 5: Parse transactions using bank-specific template
    if bank != BankBrand.UNKNOWN:
        print(f"Parsing transactions for {bank.value}...")
        raw_transactions, metadata = parse_with_template(bank, pages_text, pdf_path)
        
        print(f"Found {len(raw_transactions)} raw transactions")
        print(f"Metadata: {metadata}")
        
        # Step 6: Normalize transactions
        normalized_transactions = normalize_transactions(raw_transactions)
        print(f"Normalized {len(normalized_transactions)} transactions")
        
        # Display first few transactions as example
        for i, tx in enumerate(normalized_transactions[:5]):
            print(f"  Transaction {i+1}: {tx}")
            
    else:
        print("Bank not recognized - cannot parse transactions")

# Example usage patterns for different Mexican banks:

def example_usage():
    """
    Show examples of what the system can extract from different bank PDFs.
    """
    
    print("=== Mexican Bank PDF Extraction Examples ===")
    print()
    
    print("🏦 Supported Banks:")
    for bank in BankBrand:
        if bank != BankBrand.UNKNOWN:
            print(f"  • {bank.value}")
    
    print()
    print("📄 What can be extracted:")
    print("  • Account holder information")
    print("  • Statement period (start/end dates)")
    print("  • Transaction details:")
    print("    - Date and time")
    print("    - Description/concept")
    print("    - Amount (debit/credit)")
    print("    - Running balance")
    print("    - Transaction type")
    print("  • Account numbers and routing info")
    print()
    
    print("🔧 Supported PDF types:")
    print("  • Text-based PDFs (preferred)")
    print("  • Scanned PDFs (using OCR)")
    print("  • Password-protected PDFs")
    print("  • Multi-page statements")
    print()
    
    print("💡 Usage tips:")
    print("  1. Ensure PDFs are readable (not corrupted)")
    print("  2. For scanned PDFs, higher resolution = better OCR")
    print("  3. Spanish language support included")
    print("  4. Date formats: DD/MM/YYYY, DD-MMM-YYYY, etc.")
    print("  5. Currency: Mexican Pesos (MXN) assumed")

if __name__ == "__main__":
    # Show examples
    example_usage()
    
    # If PDF path provided, process it
    if len(sys.argv) > 1:
        pdf_path = sys.argv[1]
        if os.path.exists(pdf_path):
            print("\n" + "="*50)
            process_pdf_example(pdf_path)
        else:
            print(f"Error: PDF file not found: {pdf_path}")
    else:
        process_pdf_example()