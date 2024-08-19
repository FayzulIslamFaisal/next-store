import { NagadhatPublicUrl, shortenString } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
const SimilerProductItems = ({ item }) => {
    const productPrice = {
        prices: "",
        discountPrice: "",
    };

    if (item?.variations?.length > 0) {
        productPrice.prices =
            defaultVariant?.discount_amount > 0
                ? defaultVariant?.mrp_price - defaultVariant?.discount_amount
                : defaultVariant?.mrp_price;

        productPrice.discountPrice =
            defaultVariant?.discount_amount > 0
                ? defaultVariant?.mrp_price
                : "";
    } else {
        (productPrice.prices =
            item?.price?.discounted_price !== 0
                ? item?.price?.discounted_price
                : item?.price?.regular_price),
            (productPrice.discountPrice =
                item?.price?.discounted_price > 0 &&
                item?.price?.regular_price);
    }

    // console.log(productPrice);
    return (
        <>
            <div className="similer-product-box-item d-flex ">
                <div className="similer-product-img">
                    <Image
                        src={`${NagadhatPublicUrl}/${item?.product_thumbnail}`}
                        fill={true}
                        className="img-fluid"
                        alt={"thumbnail image"}
                    />
                </div>
                <div className="similer-product-info">
                    <h4>
                        <Link
                            href={`/products/get-product-details?outlet_id=${item?.outlet_id}&product_id=${item?.id}`}
                        >
                            {shortenString(`${item?.product_name}`, 36)}
                        </Link>{" "}
                    </h4>
                    <strong>
                        {" "}
                        <span>৳</span>
                        {productPrice.prices}
                    </strong>
                </div>
            </div>
        </>
    );
};

export default SimilerProductItems;
