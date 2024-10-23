import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";

const PrivilegeMainCard = ({ privilegeCardInfo }) => {
    const backImageUrl = privilegeCardInfo?.privilege_card?.back_image || "/images/priv-membership-back.png";
    const frontImageUrl = privilegeCardInfo?.privilege_card?.front_image || "/images/1665226202_1.png";

    return (
        <div className="customer-dashboard-order-history-title">
            <div className="flipper-container-wrapp">
                <div className="flipper-container">
                    <div className="flip">
                        <div className="front face">
                            <Image
                                src={`${NagadhatPublicUrl}/${frontImageUrl}`}
                                alt="Privilege card front"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="back face">
                            <Image
                                src={`${NagadhatPublicUrl}/${backImageUrl}`}
                                alt="Privilege card back"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-3 py-3">
                    <strong className="fs-5 pb-3">
                        ৳ {privilegeCardInfo?.purchases_price}
                    </strong>
                    <h6 className="fs-6">{privilegeCardInfo?.product_name}</h6>
                    <div className="pt-2 d-flex align-items-center gap-2">
                        <button
                            type="button"
                            className="add-to-cart-link border-0 rounded-3 text-capitalize"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                        >
                            Details
                        </button>
                        <button className="add-to-cart-link border-0 rounded-3 text-capitalize">
                            Active
                        </button>
                        <button className="add-to-cart-link border-0 rounded-3 text-capitalize">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivilegeMainCard;
