"use client";
const DownloadInvoiceBtn = ({ onPrintInvoice }) => {
    return (
        <>
            <button
                onClick={onPrintInvoice}
                className="add-to-cart-link border-0"
            >
                Download Invoice
            </button>
        </>
    );
};

export default DownloadInvoiceBtn;
