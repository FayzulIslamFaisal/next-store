"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NagadhatPublicUrl, addToCartProductList } from "../utils";
const userData = [
    {
        id: 1,
        product_thumbnail: "/images/primaSatgebabyFood.jpg",
        productName: "LED Monitor With High Quality In The World",
        productId: "SKU12314124127",
        price: 20000,
        quantity: 1,
        isLiked: false,
    },
    {
        id: 2,
        product_thumbnail: "/images/primaSatgebabyFood.jpg",
        productName: "LED Monitor With High Quality In The World",
        productId: "SKU12314124125",
        price: 20000,
        quantity: 1,
        isLiked: false,
    },
    {
        id: 3,
        product_thumbnail: "/images/primaSatgebabyFood.jpg",
        productName: "LED Monitor With High Quality In The World",
        productId: "SKU12314124126",
        price: 20000,
        quantity: 1,
        sLiked: false,
    },
    {
        id: 4,
        product_thumbnail: "/images/primaSatgebabyFood.jpg",
        productName: "LED Monitor With High Quality In The World",
        productId: "SKU12314124124",
        price: 20000,
        quantity: 1,
        isLiked: false,
    },
];
const CartPage = () => {
    const [checkedProductCard, setCheckedProductCard] = useState([]);
    const [selected, setSelected] = useState([]);
    const [promo, setPromo] = useState(false);
    const [total, setTotal] = useState("");
    const [cartProduct, setCartProduct] = useState([]);
    let price;
    let totalPrice = 0;
    let discountPrice;
    useEffect(() => {
        setCheckedProductCard(userData);
    }, []);
    const handleDelete = (index) => {
        const updatedItemsInCard = checkedProductCard.filter(
            (item, i) => i !== index
        );
        setCheckedProductCard(updatedItemsInCard);
    };
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempCard = checkedProductCard.map((checkCard) => {
                return { ...checkCard, isChecked: checked };
            });
            setCheckedProductCard(tempCard);
            setSelected(tempCard);
        } else {
            let tempCard = checkedProductCard.map((checkCard) =>
                checkCard.productId === name
                    ? { ...checkCard, isChecked: checked }
                    : checkCard
            );

            setCheckedProductCard(tempCard);
            setSelected(tempCard);
        }
    };
    const handleDecrement = (id) => {
        const updatedUsers = checkedProductCard.map((checkCard) => {
            if (checkCard.id === id) {
                if (checkCard.quantity > 1) {
                    return { ...checkCard, quantity: checkCard.quantity - 1 };
                }
            }
            return checkCard;
        });
        setCheckedProductCard(updatedUsers);
    };
    const handleIncrement = (id) => {
        const updatedUsers = checkedProductCard.map((checkCard) => {
            if (checkCard.id === id) {
                return { ...checkCard, quantity: checkCard.quantity + 1 };
            }
            return checkCard;
        });
        setCheckedProductCard(updatedUsers);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartProduct = addToCartProductList();
            console.log("cartProduct", cartProduct);
            setCheckedProductCard(cartProduct);
        }
    }, []);

    return (
        <section className="cart-section-area">
            <div className="container">
                <div className="row gx-4 gy-5">
                    <div className="col-lg-9">
                        <div className="row cart-top-area">
                            <div className="col-12">
                                <div className="cart-top-holder">
                                    <div className="d-flex gap-3 card-top-info">
                                        <input
                                            className="cart-checkbox"
                                            type="checkbox"
                                            id="select-all"
                                            name="allSelect"
                                            checked={
                                                checkedProductCard.length > 0 &&
                                                !checkedProductCard.some(
                                                    (item) =>
                                                        item?.isChecked !== true
                                                )
                                            }
                                            onClick={handleChange}
                                        />
                                        <label htmlFor="select-all">
                                            Select All
                                        </label>
                                    </div>
                                    <div className="cart-top-remove-btn">
                                        <button>REMOVE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row product-cart-details-area">
                            <div className="col-12">
                                <div className="product-cart-details-continer table-responsive">
                                    <table className="table align-middle">
                                        <tbody>
                                            {checkedProductCard?.map(
                                                (item, index) => {
                                                    price =
                                                        item.price *
                                                        item.quantity;
                                                    discountPrice =
                                                        item.discountPrice *
                                                        item.quantity;
                                                    totalPrice += price;
                                                    return (
                                                        <tr key={item?.id}>
                                                            <td>
                                                                <input
                                                                    className="cart-checkbox"
                                                                    type="checkbox"
                                                                    name={
                                                                        item.productId
                                                                    }
                                                                    checked={
                                                                        item?.isChecked ||
                                                                        false
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="product-cart-product-img">
                                                                    <Image
                                                                        fill
                                                                        src={`${NagadhatPublicUrl}/${item?.product_thumbnail}`}
                                                                        alt="black-friday"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h2 className="product-cart-text">
                                                                    {
                                                                        item.product_name
                                                                    }
                                                                </h2>
                                                                <strong className="product-cart-price">
                                                                    ৳{price}
                                                                </strong>
                                                                <del
                                                                    className="product-cart-price"
                                                                    style={{
                                                                        marginLeft:
                                                                            "15px",
                                                                        color: "#a4a4a4",
                                                                    }}
                                                                >
                                                                    ৳
                                                                    {
                                                                        discountPrice
                                                                    }
                                                                </del>
                                                            </td>

                                                            <td>
                                                                <div
                                                                    className="btn-group quantity-area"
                                                                    role="group"
                                                                    aria-label="Basic example"
                                                                >
                                                                    <div className="quantity-increase-bg">
                                                                        <button
                                                                            type="button"
                                                                            className="btn quantity-increase"
                                                                            onClick={() => {
                                                                                handleDecrement(
                                                                                    item?.id
                                                                                );
                                                                            }}
                                                                        >
                                                                            <Image
                                                                                fill
                                                                                src="/images/minusIcon.png"
                                                                                alt="black-friday"
                                                                            />
                                                                        </button>
                                                                    </div>

                                                                    <input
                                                                        className="quantity-fild"
                                                                        min="1"
                                                                        max="5"
                                                                        step="1"
                                                                        autoComplete="off"
                                                                        type="text"
                                                                        height="100%"
                                                                        value={
                                                                            item?.quantity
                                                                        }
                                                                        readOnly
                                                                    />
                                                                    <div className="quantity-decrease-bg">
                                                                        <button
                                                                            className="btn quantity-decrease"
                                                                            type="button"
                                                                            onClick={() => {
                                                                                handleIncrement(
                                                                                    item?.id
                                                                                );
                                                                            }}
                                                                        >
                                                                            <Image
                                                                                fill
                                                                                src="/images/+icon.png"
                                                                                alt="black-friday"
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-cart-remov-btn-bg">
                                                                    <button
                                                                        className="product-cart-remov-btn"
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                index
                                                                            )
                                                                        }
                                                                    >
                                                                        <Image
                                                                            fill
                                                                            src="/images/trash-bin.png"
                                                                            alt="delete"
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="product-cart-like-btn-bg">
                                                                    <button className="product-cart-like-btn">
                                                                        <Image
                                                                            fill
                                                                            src="/images/heart.png"
                                                                            alt="heart image"
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="row promo-code-section">
                            <div className="col-12">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="discount-code-img">
                                        <Image
                                            fill
                                            src="/images/discount-code.png"
                                            alt="discount-code"
                                        />
                                    </div>
                                    <h3 className="promo-code-title">
                                        I Have promo code
                                    </h3>
                                </div>
                                <div className="promo-code-input-area">
                                    <input
                                        type="text"
                                        name="promo"
                                        className="form-control"
                                        placeholder="Enter promo code"
                                    />
                                    <button className="add-to-cart-link border border-0">
                                        Apply
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row shopping-section">
                            <div className="col-12">
                                <div className="shopping-info-area">
                                    <h3 className="shopping-title">
                                        Shopping Summary
                                    </h3>
                                    <div className="d-flex gap-3 align-items-center justify-content-between shopping-price-area">
                                        <p className="">Total</p>
                                        <strong className="">৳35,000</strong>
                                    </div>
                                    <button className="add-to-cart-link border border-0 w-100">
                                        CHECKOUT
                                    </button>
                                    <Link
                                        href="#"
                                        className="shopping-back-btn"
                                    >
                                        Back to Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartPage;
