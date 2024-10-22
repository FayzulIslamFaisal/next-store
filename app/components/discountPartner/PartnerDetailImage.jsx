import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";

const PartnerDetailImage = ({ partnerDetail }) => {
    const imageUrl = partnerDetail?.company_logo
        ? `${NagadhatPublicUrl}/${partnerDetail?.company_logo}`
        : `/images/placeholder--image.jpg`;

    const partnerGallery = partnerDetail?.gallery;
    return (
        <>
            <div className="col-md-6 col-12 ">
                <div
                    className="mb-4 position-relative w-100"
                    style={{ height: "320px" }}
                >
                    <Image
                        fill
                        src={imageUrl}
                        alt="image alt ss"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="row g-2 pb-4">
                    {partnerGallery && partnerGallery?.length > 0 ? (
                        partnerGallery?.map((gallery) => {
                            const { id, image } = gallery;
                            return (
                                <div key={id} className="col-md-3 col-sm-6">
                                    <div
                                        className="position-relative w-100"
                                        style={{ height: "110px" }}
                                    >
                                        <Image
                                            fill
                                            src={`${NagadhatPublicUrl}/${image}`}
                                            alt="image alt"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="col-md-3 col-sm-6">
                            <div
                                className="position-relative w-100"
                                style={{ height: "110px" }}
                            >
                                <Image
                                    fill
                                    src={`/images/placeholder--image.jpg`}
                                    alt="image alt"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PartnerDetailImage;
