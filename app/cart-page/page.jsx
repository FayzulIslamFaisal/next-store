"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NagadhatPublicUrl, addToCartProductList, apiBaseUrl } from "../utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { deleteCartProduct } from "../services/getDeleteCartProduct";
import { addToCartQuantityUpdate } from "../services/addToCartQuantityUpdate";
import { deleteProductFromTheApi } from "../services/deleteSelectedProduct";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setAddToCart } from "../store/cartSlice";
const CartPage = () => {
    const [checkedProductCard, setCheckedProductCard] = useState([]);
    const [selected, setSelected] = useState([]);
    const [promo, setPromo] = useState(false);
    const [total, setTotal] = useState("");
    const [cartProduct, setCartProduct] = useState([]);
    const pathName = usePathname();
    const { status, data: session } = useSession();
    const [selectedProductCardId, setSelectedProductCardId] = useState([]);
    let price;
    let totalPrice = 0;
    let discountPrice;
    const dispatch = useDispatch();
    const updateLocalStorage = (items) => {
        localStorage.setItem("addToCart", JSON.stringify(items));
    };
    const handleDelete = async (cart_id) => {
        if (session) {
            console.log("product delete run", session?.accessToken);
            await deleteCartProduct(cart_id, session?.accessToken);
            const updatedCartProducts = await fetchCartProducts();
            setCheckedProductCard(updatedCartProducts?.data);
            dispatch(
                setAddToCart({
                    hasSession: true,
                    length: updatedCartProducts?.data?.length,
                })
            );
        } else {
            const updatedItemsInCard = checkedProductCard.filter(
                (item, i) => i !== cart_id
            );
            setCheckedProductCard(updatedItemsInCard);
            updateLocalStorage(updatedItemsInCard);
            dispatch(setAddToCart({ hasSession: false }));
        }
    };

    const handleSelectedItemDelete = async () => {
        if (session) {
            const productsCardId = [];
            const updatedItemsInCard = checkedProductCard
                .filter((item) => item.isChecked)
                .map((item) => ({
                    cart_id: item?.cart_id,
                }));
            await deleteProductFromTheApi(
                updatedItemsInCard,
                session?.accessToken
            );
            const updatedCartProducts = await fetchCartProducts();
            setCheckedProductCard(updatedCartProducts?.data);
            dispatch(
                setAddToCart({
                    hasSession: true,
                    length: updatedCartProducts?.data?.length,
                })
            );
        } else {
            const updatedItemsInCard = checkedProductCard.filter(
                (item) => !item.isChecked
            );
            setCheckedProductCard(updatedItemsInCard);
            updateLocalStorage(updatedItemsInCard);
            dispatch(setAddToCart({ hasSession: false }));
        }
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
            let tempCard = checkedProductCard.map((checkCard, index) =>
                index.toString() === name
                    ? { ...checkCard, isChecked: checked }
                    : checkCard
            );
            setCheckedProductCard(tempCard);
            setSelected(tempCard);
        }
    };

    const handleDecrement = async (indexId) => {
        if (session) {
            const quantityUpdateInfo = {
                cart_id: indexId,
                outlet_id: 3,
                quantity: "decrement",
            };
            await addToCartQuantityUpdate(
                quantityUpdateInfo,
                session?.accessToken
            );
            const updatedCartProducts = await fetchCartProducts();
            setCheckedProductCard(updatedCartProducts?.data);
        } else {
            const updatedUsers = checkedProductCard.map((checkCard, index) => {
                if (index === indexId) {
                    if (checkCard.quantity > 1) {
                        return {
                            ...checkCard,
                            quantity: checkCard.quantity - 1,
                        };
                    }
                }
                return checkCard;
            });
            setCheckedProductCard(updatedUsers);
            updateLocalStorage(updatedUsers);
        }
    };

    const handleIncrement = async (indexId) => {
        if (session) {
            const quantityUpdateInfo = {
                cart_id: indexId,
                outlet_id: 3,
                quantity: "increment",
            };
            await addToCartQuantityUpdate(
                quantityUpdateInfo,
                session?.accessToken
            );
            const updatedCartProducts = await fetchCartProducts();
            setCheckedProductCard(updatedCartProducts?.data);
        } else {
            const updatedUsers = checkedProductCard.map((checkCard, index) => {
                if (index === indexId) {
                    return { ...checkCard, quantity: checkCard.quantity + 1 };
                }
                return checkCard;
            });
            setCheckedProductCard(updatedUsers);
            updateLocalStorage(updatedUsers);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartProduct = addToCartProductList();
            setCheckedProductCard(cartProduct);
        }
    }, []);

    const addToCartProduct = async (cartItems) => {
        /*   try {
            console.log("post cart product ================", cartItems);
            const response = await fetch(
                "https://v3.nagadhat.com/api/add-to-cart-product",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ cart_items: cartItems }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add product to cart");
            }

            return response.json();
        } catch (error) {
            console.error(error);
        } */

        const response = await fetch(
            "https://v3.nagadhat.com/api/add-to-cart-product",
            {
                method: "POST",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${session?.accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cart_items: cartItems }),
            }
        );

        console.log("post send response1111111111111111", response);
        return response.json();
    };

    const fetchCartProducts = async () => {
        try {
            console.log("get cart product ================");
            const response = await fetch(
                `${apiBaseUrl}/get-cart-products?outlet_id=3&location_id=47`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Failed to fetch cart products");
            }

            return response.json();
        } catch (error) {
            console.error(error);
        }
    };

    const handleCheckout = async () => {
        if (session) {
            console.log("in session");
            const cartProduct = addToCartProductList();
            console.log("card product passing", cartProduct);
            await addToCartProduct(cartProduct);
            const updatedCartProducts = await fetchCartProducts();
            setCheckedProductCard(updatedCartProducts?.data);
            localStorage.removeItem("addToCart");
            dispatch(
                setAddToCart({
                    hasSession: true,
                    length: updatedCartProducts?.data?.length,
                })
            );
            // console.log("updatedCartProducts", updatedCartProducts);
        }
    };
    useEffect(() => {
        handleCheckout();
        console.log("hello word");
    }, [session]);
    console.log("=>>> get login status", status);
    console.log("=>>> get login session", session);
    console.log("sfddkfjndfk", checkedProductCard);
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
                                                checkedProductCard?.length >
                                                    0 &&
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
                                        <button
                                            onClick={handleSelectedItemDelete}
                                        >
                                            REMOVE
                                        </button>
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
                                                        <tr key={item?.cart_id}>
                                                            <td>
                                                                <input
                                                                    className="cart-checkbox"
                                                                    type="checkbox"
                                                                    name={`${index}`}
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
                                                                <strong className="ml-3">
                                                                    {item?.selectedVariants &&
                                                                        item.selectedVariants
                                                                            .slice(
                                                                                0,
                                                                                2
                                                                            )
                                                                            .map(
                                                                                (
                                                                                    variant,
                                                                                    inx
                                                                                ) => {
                                                                                    const [
                                                                                        key,
                                                                                        value,
                                                                                    ] =
                                                                                        Object.entries(
                                                                                            variant
                                                                                        )[0];
                                                                                    const keyDisplay =
                                                                                        key.split(
                                                                                            "_"
                                                                                        )[1];

                                                                                    return (
                                                                                        <React.Fragment
                                                                                            key={
                                                                                                inx
                                                                                            }
                                                                                        >
                                                                                            <span>
                                                                                                {
                                                                                                    keyDisplay
                                                                                                }
                                                                                            </span>
                                                                                            <span className="product-details-variant-item ms-3 me-2">
                                                                                                <label>
                                                                                                    {
                                                                                                        value
                                                                                                    }
                                                                                                </label>
                                                                                            </span>
                                                                                        </React.Fragment>
                                                                                    );
                                                                                }
                                                                            )}
                                                                </strong>
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
                                                                                    session
                                                                                        ? item?.cart_id
                                                                                        : index
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
                                                                                    session
                                                                                        ? item?.cart_id
                                                                                        : index
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
                                                                                session
                                                                                    ? item?.cart_id
                                                                                    : index
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
                                                            {/* <td>
                                                                <div className="product-cart-like-btn-bg">
                                                                    <button className="product-cart-like-btn">
                                                                        <Image
                                                                            fill
                                                                            src="/images/heart.png"
                                                                            alt="heart image"
                                                                        />
                                                                    </button>
                                                                </div>
                                                            </td> */}
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
                                        <strong className="">
                                            ৳{totalPrice}
                                        </strong>
                                    </div>
                                    <Link
                                        href={"/shipping-page"}
                                        className="add-to-cart-link border border-0 w-100"
                                    >
                                        CHECKOUT
                                    </Link>
                                    <Link
                                        href="/"
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
