"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const DownloadInvoiceBtn = () => {
    const router = useRouter();

    const handlePrintInvoice = (e) => {
        e.preventDefault();
        router.push("/orderinvoice");
    };
    return (
        <>
            <Link
                href="/orderinvoice"
                onClick={handlePrintInvoice}
                className="add-to-cart-link border-0"
            >
                Download Invoice
            </Link>
        </>
    );
};

export default DownloadInvoiceBtn;
