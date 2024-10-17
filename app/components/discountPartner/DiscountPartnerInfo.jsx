import Image from "next/image";
import Link from "next/link";
import NoDataFound from "../NoDataFound";
import { NagadhatPublicUrl, truncateTitle } from "@/app/utils";

const DiscountPartnerInfo = ({ partnerData }) => {
    return (
        <div className="row row-gap-4">
            {partnerData && partnerData?.length > 0 ? (
                partnerData?.map((item) => {
                    const imageUrl = item?.company_logo
                        ? `${NagadhatPublicUrl}/${item?.company_logo}`
                        : `/images/flash-img4.jpg`;
                    return (
                        <div key={item?.id} className="col-lg-3 col-md-6">
                            <div className="bg-light text-center p-4 rounded-4 shadow position-relative h-100">
                                <div
                                    className=" position-relative w-100 mb-3"
                                    style={{ height: "160px" }}
                                >
                                    <Link
                                        href={`/discount-partners-page/${item?.slug}`}
                                    >
                                        <Image
                                            fill
                                            src={imageUrl}
                                            alt="image"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Link>
                                </div>
                                <div className=" ">
                                    <h4 className="mb-3">
                                        <Link
                                            href={`/discount-partners-page/${item?.slug}`}
                                        >
                                            {item?.company_name}
                                        </Link>
                                    </h4>
                                    <span>{item?.location}</span>
                                    <p>
                                        <strong>
                                            Hotline: {item?.contact_number}
                                        </strong>
                                    </p>

                                    <p>
                                        {truncateTitle(
                                            item?.company_brief,
                                            100
                                        )}{" "}
                                        <Link
                                            href={`/discount-partners-page/${item?.slug}`}
                                            className=" fw-semibold"
                                        >
                                            Reade More
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <NoDataFound title={`Selected category is not available.`} />
            )}
        </div>
    );
};

export default DiscountPartnerInfo;
