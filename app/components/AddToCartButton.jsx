"use client";

function AddToCartButton({ title = "", path = "#" }) {
    return (
        <div className="add-to-cart-btn">
            <a
                href={path}
                className="add-to-cart-link"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("added to cart");
                }}
            >
                {!title ? "ADD TO CART" : title}
            </a>
        </div>
    );
}

export default AddToCartButton;
