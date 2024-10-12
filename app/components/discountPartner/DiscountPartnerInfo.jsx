import Image from "next/image";
import Link from "next/link";

const DiscountPartnerInfo = () => {
    return (
        <div className="row row-gap-4">
            <div className="col-lg-3 col-md-6">
                <div className="bg-light text-center p-4 rounded-4 shadow  ">
                    <div
                        className=" position-relative w-100 mb-3"
                        style={{ height: "160px" }}
                    >
                        <Link href={`/discount-partners-page/1`}>
                            <Image
                                fill
                                src={`/images/flash-img4.jpg`}
                                alt="image"
                                style={{ objectFit: "cover" }}
                            />
                        </Link>
                    </div>
                    <div className=" ">
                        <h4 className="mb-3">
                            <Link href={`/discount-partners-page/1`}>
                                Bangladesh Spine & Orthopaedic Hospital (BSOH)
                            </Link>
                        </h4>
                        <span>10 Mirpur Rd, Dhaka 1207</span>
                        <p>
                            Bangladesh Spine & Orthopaedics Hospital Is Located
                            at 10 Main Road, Kallyanpur Bus Stand, Dhaka.
                            Solving spinal and orthopedic problems is taken
                            seri...{" "}
                            <Link
                                href={`/discount-partners-page/1`}
                                className=" fw-semibold"
                            >
                                Reade More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="bg-light text-center p-4 rounded-4 shadow  ">
                    <div
                        className=" position-relative w-100 mb-3"
                        style={{ height: "160px" }}
                    >
                        <Link href={`/discount-partners-page/2`}>
                            <Image
                                fill
                                src={`/images/flash-img5.jpg`}
                                alt="image"
                                style={{ objectFit: "cover" }}
                            />
                        </Link>
                    </div>
                    <div className=" ">
                        <h4 className="mb-3">
                            <Link href={`/discount-partners-page/2`}>
                                Bangladesh Spine & Orthopaedic Hospital (BSOH)
                            </Link>
                        </h4>
                        <span>10 Mirpur Rd, Dhaka 1207</span>
                        <p>
                            Bangladesh Spine & Orthopaedics Hospital Is Located
                            at 10 Main Road, Kallyanpur Bus Stand, Dhaka.
                            Solving spinal and orthopedic problems is taken
                            seri...{" "}
                            <Link
                                href={`/discount-partners-page/2`}
                                className=" fw-semibold"
                            >
                                Reade More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="bg-light text-center p-4 rounded-4 shadow  ">
                    <div
                        className=" position-relative w-100 mb-3"
                        style={{ height: "160px" }}
                    >
                        <Link href={`/discount-partners-page/3`}>
                            <Image
                                fill
                                src={`/images/flash-img2.jpg`}
                                alt="image"
                                style={{ objectFit: "cover" }}
                            />
                        </Link>
                    </div>
                    <div className=" ">
                        <h4 className="mb-3">
                            <Link href={`/discount-partners-page/3`}>
                                Bangladesh Spine & Orthopaedic Hospital (BSOH)
                            </Link>
                        </h4>
                        <span>10 Mirpur Rd, Dhaka 1207</span>
                        <p>
                            Bangladesh Spine & Orthopaedics Hospital Is Located
                            at 10 Main Road, Kallyanpur Bus Stand, Dhaka.
                            Solving spinal and orthopedic problems is taken
                            seri...{" "}
                            <Link
                                href={`/discount-partners-page/3`}
                                className=" fw-semibold"
                            >
                                Reade More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="bg-light text-center p-4 rounded-4 shadow  ">
                    <div
                        className=" position-relative w-100 mb-3"
                        style={{ height: "160px" }}
                    >
                        <Link href={`/discount-partners-page/4`}>
                            <Image
                                fill
                                src={`/images/flash-img3.jpg`}
                                alt="image"
                                style={{ objectFit: "cover" }}
                            />
                        </Link>
                    </div>
                    <div className=" ">
                        <h4 className="mb-3">
                            <Link href={`/discount-partners-page/4`}>
                                Bangladesh Spine & Orthopaedic Hospital (BSOH)
                            </Link>
                        </h4>
                        <span>10 Mirpur Rd, Dhaka 1207</span>
                        <p>
                            Bangladesh Spine & Orthopaedics Hospital Is Located
                            at 10 Main Road, Kallyanpur Bus Stand, Dhaka.
                            Solving spinal and orthopedic problems is taken
                            seri...{" "}
                            <Link
                                href={`/discount-partners-page/4`}
                                className=" fw-semibold"
                            >
                                Reade More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountPartnerInfo;
