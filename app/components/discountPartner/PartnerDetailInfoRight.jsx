import Link from "next/link";
import { FaAt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const PartnerDetailInfoRight = () => {
    return (
        <>
            <div className="col-md-6 col-12">
                <div className="">
                    <h6 className="mb-2 fs-3 text-capitalize">Offer Details</h6>
                    <p className="pb-2 fs-6">
                        Bangladesh Spine & Orthopaedic Hospital is offering
                        up-to 30% discount on all Pathological Tests, up-to 20%
                        discount on all imaging tests, and 10% discount on bed
                        charge for all employees, family members of the
                        employees and privilege card holders of Nagadhat
                        Bangladesh Ltd. Persons availing health care services at
                        BSOH through contact or any specific package will not be
                        considered eligible for this discount facility.
                    </p>
                    <p className="pb-2 fs-5">
                        <strong style={{ color: "#44bc9d" }}>
                            Applicability:{" "}
                        </strong>{" "}
                        Applicable to all general customers of Nagadhat
                        Bangladesh Ltd.
                    </p>

                    <p className="pb-2 fs-5 text-wrap">
                        <strong style={{ color: "#44bc9d" }}>Facebook: </strong>
                        <Link
                            className="text-wrap text-break"
                            href={`https://www.facebook.com/platerestaurantbd/`}
                        >
                            https://www.facebook.com/platerestaurantbd/
                        </Link>
                    </p>

                    <p className="pb-2 fs-5 text-wrap">
                        <strong style={{ color: "#44bc9d" }}>
                            <FaGlobe /> Website:{" "}
                        </strong>
                        <Link
                            href={`https://bangladesh-spine-and-orthopaedic-general-hospital.business.site/`}
                        >
                            https://bangladesh-spine-and-orthopaedic-general-hospital.business.site/
                        </Link>
                    </p>

                    <p className="pb-2 fs-5 text-wrap">
                        <strong style={{ color: "#44bc9d" }}>
                            <FaAt /> E-mail:{" "}
                        </strong>
                        <Link href={`mailto:platerestaurantbd@gmail.com`}>
                            platerestaurantbd@gmail.com
                        </Link>
                    </p>
                    <p className="pb-2 fs-5">
                        <strong style={{ color: "#44bc9d" }}>
                            <FaPhoneVolume /> Hotline Line:{" "}
                        </strong>
                        <Link href={`tel:01778590590`}>01778590590</Link>
                    </p>
                    <p className="pb-2 fs-5 text-wrap">
                        <strong style={{ color: "#44bc9d" }}>
                            <FaMapMarked /> Location/Address:{" "}
                        </strong>
                        <span>
                            14/1 Progoti Soroni, Shahajadpur, Gulshan, Dhaka,
                            Bangladesh, Dhaka, Bangladesh
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default PartnerDetailInfoRight;
