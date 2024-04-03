"use client";

function Like({ path = "#" }) {
    const onHandleLike = (e) => {
        e.preventDefault();
        console.log("Liked");
    };
    return (
        <div className="add-to-cart-icon">
            <a href={path} onClick={(e) => onHandleLike(e)}>
                <img src="/images/add-to-cart.svg" alt="add to cart icon" />
            </a>
        </div>
    );
}

export default Like;
