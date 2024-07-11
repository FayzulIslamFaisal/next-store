import { FaLocationDot } from "react-icons/fa6";
const InvoiceFooter = () => {
    return (
        <>
            <div className="invoice-footer">
                <div className="col-12 mt-3 border-top py-3 fw-semibold text-center">
                    <p>Thank you for being with Nagadhat</p>
                    <div className="d-flex align-items-start gap-2 font-xs fw-semibold justify-content-center">
                        <FaLocationDot className="bg-praymary-color text-white rounded-circle p-1" />
                        <p className="mb-2">
                            Khaja Super Market, 2nd to 7th Floor, Kallyanpur Bus
                            Stop, Mirpur Road, Dhaka-1207
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceFooter;
