"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { NagadhatPublicUrl, addToCartProductList, apiBaseUrl } from "../utils";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { deleteCartProduct } from "../services/getDeleteCartProduct";
import { addToCartQuantityUpdate } from "../services/addToCartQuantityUpdate";
import { deleteProductFromTheApi } from "../services/deleteSelectedProduct";
import { useDispatch, useSelector } from "react-redux";
import { setAddToCart } from "../store/cartSlice";
import {
    FaHeart,
    FaMinus,
    FaPlus,
    FaRegHeart,
    FaTrash,
    FaTrashCan,
} from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import DefaultLoader from "../components/defaultloader/DefaultLoader";
const CartPage = () => {
    const [checkedProductCard, setCheckedProductCard] = useState([]);
    const [selected, setSelected] = useState([]);
    const { status, data: session } = useSession();
    let price;
    let totalPrice = 0;
    let discountPrice;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    //Update Add To Cart product after operation in localStore addToCart Item
    const updateLocalStorage = (items) => {
        localStorage.setItem("addToCart", JSON.stringify(items));
    };

    /**
     * Handles the deletion of a cart item.
     * If a session exists, it deletes the item from the server and updates the state accordingly.
     * If no session exists, it removes the item from the local state and updates local storage.
     *
     * @param {number} cart_id - The ID of the cart item to be deleted.
     */
    const handleDelete = async (cart_id) => {
        if (session) {
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
            const addToCartProductLength = addToCartProductList();
            dispatch(
                setAddToCart({
                    hasSession: false,
                    length: addToCartProductLength.length,
                })
            );
        }
    };

    /**
     * Handles the deletion of selected cart items.
     * If a session exists, it deletes the selected items from the server and updates the state accordingly.
     * If no session exists, it removes the selected items from the local state and updates local storage.
     */
    const handleSelectedItemDelete = async () => {
        if (session) {
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
            const addToCartProductLength = addToCartProductList();
            dispatch(
                setAddToCart({
                    hasSession: false,
                    length: addToCartProductLength.length,
                })
            );
        }
    };

    /**
     * Handles changes to the selection state of cart items.
     * If the "allSelect" checkbox is changed, it updates the selection state of all items.
     * If an individual item checkbox is changed, it updates the selection state of that specific item.
     *
     * @param {Event} e - The change event triggered by the checkbox.
     */
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

    /**
     * Handles decrementing the quantity of a cart item.
     * If a session exists, it updates the quantity on the server and refreshes the cart state.
     * If no session exists, it updates the quantity locally and updates local storage.
     *
     * @param {number} indexId - The ID of the cart item to decrement.
     */
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

    /**
     * Handles incrementing the quantity of a cart item.
     * If a session exists, it updates the quantity on the server and refreshes the cart state.
     * If no session exists, it updates the quantity locally and updates local storage.
     *
     * @param {number} indexId - The ID of the cart item to increment.
     */

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
    /**
     * Adds products to the cart by making a POST request to the API.
     *
     * @param {Array} cartItems - The items to be added to the cart.
     * @returns {Promise<Object>} - The response from the API.
     */
    const addToCartProduct = async (cartItems) => {
        const response = await fetch(`${apiBaseUrl}/add-to-cart-product`, {
            method: "POST",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${session?.accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ cart_items: cartItems }),
        });

        return response.json();
    };

    /**
     * Fetches the products in the cart by making a GET request to the API.
     *
     * @returns {Promise<Object>} - The response from the API containing the cart products.
     */

    const fetchCartProducts = async () => {
        try {
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

    /**
     * Handles the checkout process for the user.
     *
     * If the user is logged in (session exists), it performs the following steps:
     * 1. Retrieves the list of products to be added to the cart.
     * 2. Adds the products to the cart.
     * 3. Fetches the updated cart products after adding the new items.
     * 4. Updates the state with the new cart products.
     * 5. Removes the 'addToCart' item from local storage.
     * 6. Dispatches an action to update the cart state in the Redux store.
     *
     * If any error occurs during the process, it logs the error to the console.
     */

    const handleCheckout = async () => {
        if (session) {
            const cartProduct = addToCartProductList();
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
    }, [session]);

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
                                            <FaTrashCan /> REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            <Suspense fallback={<DefaultLoader />}>
                                <div className="row product-cart-details-area">
                                    <div className="col-12">
                                        <div className="product-cart-details-continer overflow-x-auto">
                                            <div className="table align-middle">
                                                <div className="d-flex flex-column gap-2">
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
                                                                <div
                                                                    className="d-flex justify-content-between gap-2 product-cart-details-item"
                                                                    key={
                                                                        item?.cart_id
                                                                    }
                                                                >
                                                                    <div className="d-flex gap-3">
                                                                        <div className="d-flex justify-content-center align-items-center">
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
                                                                        </div>

                                                                        <div>
                                                                            <div className="product-cart-product-img">
                                                                                <Image
                                                                                    fill
                                                                                    src={`${NagadhatPublicUrl}/${item?.product_thumbnail}`}
                                                                                    alt="black-friday"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <h2 className="product-cart-text">
                                                                                {
                                                                                    item.product_name
                                                                                }
                                                                            </h2>
                                                                            <p className="cart-prodect-variants">
                                                                                {Array.isArray(
                                                                                    item?.selectedVariants
                                                                                ) &&
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
                                                                                                if (
                                                                                                    variant &&
                                                                                                    typeof variant ===
                                                                                                        "object" &&
                                                                                                    Object.entries(
                                                                                                        variant
                                                                                                    )
                                                                                                        .length >
                                                                                                        0
                                                                                                ) {
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
                                                                                                            <p>
                                                                                                                <span>
                                                                                                                    {
                                                                                                                        keyDisplay
                                                                                                                    }

                                                                                                                    :
                                                                                                                </span>
                                                                                                                <span className="cart-prodect-variants-item">
                                                                                                                    <label>
                                                                                                                        {
                                                                                                                            value
                                                                                                                        }
                                                                                                                    </label>
                                                                                                                </span>
                                                                                                            </p>
                                                                                                        </React.Fragment>
                                                                                                    );
                                                                                                }
                                                                                                return null; // Return null if variant is not valid
                                                                                            }
                                                                                        )}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div>
                                                                            <p>
                                                                                <strong className="product-cart-price">
                                                                                    ৳
                                                                                    {
                                                                                        price
                                                                                    }
                                                                                </strong>
                                                                            </p>
                                                                            <p>
                                                                                <del className="product-cart-discount-price">
                                                                                    ৳
                                                                                    {
                                                                                        discountPrice
                                                                                    }
                                                                                </del>
                                                                            </p>
                                                                            <p>
                                                                                -10%
                                                                            </p>
                                                                        </div>
                                                                        <div className="d-flex gap-2">
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
                                                                                <FaTrashCan />
                                                                            </button>
                                                                            <button className="product-cart-remov-btn">
                                                                                <FaRegHeart />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div
                                                                            className="btn-group quantity-area"
                                                                            role="group"
                                                                            aria-label="Basic example"
                                                                        >
                                                                            <button
                                                                                type="button"
                                                                                className="quantity-increase"
                                                                                onClick={() => {
                                                                                    handleDecrement(
                                                                                        session
                                                                                            ? item?.cart_id
                                                                                            : index
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <FaMinus />
                                                                            </button>
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
                                                                            <button
                                                                                className="quantity-decrease"
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    handleIncrement(
                                                                                        session
                                                                                            ? item?.cart_id
                                                                                            : index
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <FaPlus />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Suspense>
                        }
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
                                        href={"/shipping-page/cart-product"}
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