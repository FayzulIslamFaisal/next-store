import FlipClock from "./FlipClock";
import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";
import AddToCartButton from "./AddToCartButton";
import Like from "./Like";

function Sales() {
    const flashSaleProductList = [
        {
            id: 1,
            image: "/images/flash-img1.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 2,
            image: "/images/flash-img2.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 3,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 4,
            image: "/images/flash-img4.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 5,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 6,
            image: "/images/flash-img5.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 7,
            image: "/images/flash-img6.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
        {
            id: 8,
            image: "/images/flash-img3.jpg",
            altText: "flash sale image",
            path: "#",
            title: "Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle)",
            price: 685.0,
            addToCart: <AddToCartButton />,
            like: <Like />,
        },
    ];
    return (
        <section className="flash-sale-area">
            <div className="container">
                <SectionTitle title="Flash Sale" path="#">
                    <FlipClock />
                </SectionTitle>
                <div className="row">
                    <div className="col-md-12">
                        <div className="flash-sale-content-area">
                            {flashSaleProductList.map((product) => (
                                <ProductCard key={product.id} item={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sales;
