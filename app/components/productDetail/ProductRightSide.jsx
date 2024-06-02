import ProductDeliveryDetail from "./ProductDeliveryDetail";
import SimilerProduct from "./SimilerProduct";

const ProductRightSide = ({ productInfo }) => {
  const similerProductData = [
    {
      id: 1,
      imageUrl: "/images/fashion.jpg",
      title: "2M LED Light String 60 Leds Computer Desk DIY Backlight.",
      path: "#",
      altText: "similer product image 1",
      price: 500,
    },
    {
      id: 2,
      imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
      title: "3M LED Light String 60 Leds Computer Desk DIY Backlight.",
      path: "#",
      altText: "similer product image 2",
      price: 700,
    },
    {
      id: 3,
      imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
      title: "4G LED Light String 60 Leds Computer Desk DIY Backlight.",
      path: "#",
      altText: "similer product image 3",
      price: 300,
    },
    {
      id: 4,
      imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
      title: "2K LED Light String 60 Leds Computer Desk DIY Backlight.",
      path: "#",
      altText: "similer product image 4",
      price: 900,
    },
    {
      id: 5,
      imageUrl: "/images/transtec-bright-cdl-led-bulb-pin-15-watt-1-pcs 1.jpg",
      title: "2M LED Light String 60 Leds Computer Desk DIY Backlight.",
      path: "#",
      altText: "similer product image 5",
      price: 400,
    },
  ];
  return (
    <div className="col-xl-3">
      <div className="product-sidebar">
        <ProductDeliveryDetail productInfo={productInfo} />
        <SimilerProduct productData={similerProductData} />
      </div>
    </div>
  );
};

export default ProductRightSide;
