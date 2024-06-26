import { NagadhatPublicUrl, shortenString } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
const SimilerProductItems = ({ productItem }) => {
    const { product_name, id, outlet_id } = productItem;

    return (
        <>
            <div className="similer-product-box-item d-flex ">
                <div className="similer-product-img">
                    <Image
                        src={`${NagadhatPublicUrl}/${productItem?.product_thumbnail}`}
                        fill={true}
                        className="img-fluid"
                        alt={"thumbnail image"}
                    />
                </div>
                <div className="similer-product-info">
                    <h4>
                        <Link
                            href={`/products/get-product-details?outlet_id=${outlet_id}&product_id=${id}`}
                        >
                            {shortenString(`${product_name}`, 36)}
                        </Link>{" "}
                    </h4>
                    <strong>
                        {" "}
                        <span>৳</span>500{" "}
                    </strong>
                </div>
            </div>
        </>
    );
};

export default SimilerProductItems;
