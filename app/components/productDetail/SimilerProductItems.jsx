import Image from "next/image";
import Link from "next/link";
const SimilerProductItems = ({ productItem }) => {
  const { product_name } = productItem;

  return (
    <>
      <div className="similer-product-box-item d-flex ">
        <div className="similer-product-img">
          {/* <Image src={} fill={true} className="img-fluid" alt={} /> */}
        </div>
        <div className="similer-product-info">
          <h4>
            <Link href={""}>{product_name}</Link>{" "}
          </h4>
          <strong> {/* <span>৳</span> {price}{" "} */}</strong>
        </div>
      </div>
    </>
  );
};

export default SimilerProductItems;
