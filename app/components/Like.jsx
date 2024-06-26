"use client";

import Image from "next/image";
import Link from "next/link";

function Like({ path = "#" }) {
    const onHandleLike = (e) => {
        e.preventDefault();
        console.log("Liked");
    };
    return (
        <div className="add-to-cart-icon">
            <Link href={path} onClick={(e) => onHandleLike(e)}>
                <Image width={28} height={28} src="/images/add-to-cart.svg" alt="add to cart icon" />
            </Link>
        </div>
    );
}

export default Like;
