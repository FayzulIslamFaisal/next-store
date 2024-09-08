"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import {
    NagadhatPublicUrl,
    addToCartProductList,
    apiBaseUrl,
    deleteBuyNowProductData,
    getSelectedCardIds,
    getTotalQuantity,
    requestPage,
    setSelectedCardIds,
} from "../utils";
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
import { RotatingLines } from "react-loader-spinner";
import NoProductShows from "../components/NoProductShows";
import Swal from "sweetalert2";
import { showToast } from "../components/Toast";
import { useRouter } from "next/navigation";
import { addToCartSelectedProduct } from "../services/postCartSelectedProducts";
import { toast } from "react-toastify";
import NoDataFound from "../components/NoDataFound";
import { placeOrder } from "../services/postPlaceOrder";
const CartPage = () => {
    const [checkedProductCard, setCheckedProductCard] = useState([]);
    const [checkingProductFilter, setCheckingProductFilter] = useState([]);
    const [selected, setSelected] = useState([]);
    const { status, data: session } = useSession();
    const [isRemoveOpen, setIsRemoveOpen] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);
    let price;
    let regularPrice;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    //Update Add To Cart product after operation in localStore addToCart Item
    const [outletId, setOutletId] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("outletId") || 3;
        }
        return 3;
    });

    const [districtId, setDistrictId] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("districtId") || 47;
        }
        return 47;
    });

    // useEffect(() => {
    //     const checkedProducts = checkedProductCard.filter(product => product.isChecked);

    //     if (checkedProducts.length > 1) {
    //         const firstProductType = checkedProducts[0].cart_product_type;
    //         const hasDifferentType = checkedProducts.some(product => product.cart_product_type != firstProductType);

    //         if (hasDifferentType) {
    //             toast.error("Different product types selected!"); // Show toast message
    //             console.log("Different product types selected!", hasDifferentType);

    //             // setHasDifferentType(hasDifferentType);
    //         }

    //     }
    //     console.log(checkedProductCard);


    // }, [checkedProductCard])

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState(null);
    console.log({ selectedProductType });


    useEffect(() => {
        // Check if any product has isChecked true and different cart_product_type
        const checkedProducts = checkedProductCard.filter(product => product.isChecked);

        if (checkedProducts.length > 0) {
            const firstProductType = checkedProducts[0].cart_product_type;
            setSelectedProductType(firstProductType);
            const hasDifferentType = checkedProducts.some(product => product.cart_product_type !== firstProductType);

            if (hasDifferentType) {
                toast.error("Different product types selected!");
                setIsButtonDisabled(true);
            } else {
                setIsButtonDisabled(false);
            }
        } else {
            setSelectedProductType(null);
            setIsButtonDisabled(false);
        }
        console.log(checkedProductCard);

    }, [checkedProductCard]);

    const updateLocalStorage = (items) => {
        localStorage.setItem("addToCart", JSON.stringify(items));
    };
    const [quanticUpdateLoader, setQuantityUpdateLoader] = useState(false);

    function updateProductWithChecked(cartInfoIds, updateProduct) {
        // Get an array of cart_ids from cartInfoIds
        const cartIds = cartInfoIds.map((item) => item.cart_id);

        // Iterate through updateProduct array
        updateProduct.forEach((product) => {
            // If the product's cart_id is in the cartIds array, add isChecked: true
            if (cartIds.includes(product.cart_id)) {
                product.isChecked = true;
            }
        });

        return updateProduct;
    }

    /**
     * Handles the deletion of a cart item.
     * If a session exists, it deletes the item from the server and updates the state accordingly.
     * If no session exists, it removes the item from the local state and updates local storage.
     *
     * @param {number} cart_id - The ID of the cart item to be deleted.
     */
    const handleDelete = async (cart_id) => {
        const wantToDelete = await Swal.fire({
            title: "Are you sure?",
            text: "Remove the product from cart !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove",
            backdrop: false,
        });

        try {
            if (wantToDelete.isConfirmed) {
                setLoading(true);

                if (session) {
                    const checkingProductFilter =
                        isAnyChecked(checkedProductCard);
                    const cartIds = checkingProductFilter.map((item) => ({
                        cart_id: item?.cart_id,
                    }));
                    setSelectedCardIds(cartIds);
                    const deleteProduct = await deleteCartProduct(
                        cart_id,
                        session?.accessToken
                    );
                    const updatedCartProducts = await fetchCartProducts(
                        outletId,
                        districtId
                    );

                    if (updatedCartProducts?.success) {
                        showToast("Product delete successfully");
                        const selectedProductIds = getSelectedCardIds();
                        const updatedProducts = updateProductWithChecked(
                            selectedProductIds,
                            updatedCartProducts?.data
                        );
                        setCheckedProductCard(updatedProducts);
                        // setCheckedProductCard(updatedCartProducts?.data);

                        const quantityTotal = getTotalQuantity(
                            updatedCartProducts?.data
                        );
                        dispatch(
                            setAddToCart({
                                hasSession: true,
                                length: quantityTotal,
                            })
                        );
                    }
                } else {
                    const updatedItemsInCard = checkedProductCard.filter(
                        (item, i) => i !== cart_id
                    );
                    setCheckedProductCard(updatedItemsInCard);
                    updateLocalStorage(updatedItemsInCard);
                    const addToCartProductLength = addToCartProductList();
                    const quantityTotal = getTotalQuantity(
                        addToCartProductLength
                    );
                    dispatch(
                        setAddToCart({
                            hasSession: false,
                            length: quantityTotal,
                        })
                    );
                }
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Handles the deletion of selected cart items.
     * If a session exists, it deletes the selected items from the server and updates the state accordingly.
     * If no session exists, it removes the selected items from the local state and updates local storage.
     */
    const handleSelectedItemDelete = async () => {
        const wantToDelete = await Swal.fire({
            title: "Are you sure?",
            text: "Remove the product from cart !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove",
        });
        try {
            if (wantToDelete.isConfirmed) {
                setLoading(true);
                if (session) {
                    const checkingProductFilter =
                        isAnyChecked(checkedProductCard);
                    const cartIds = checkingProductFilter.map((item) => ({
                        cart_id: item?.cart_id,
                    }));
                    setSelectedCardIds(cartIds);

                    const updatedItemsInCard = checkedProductCard
                        .filter((item) => item.isChecked)
                        .map((item) => ({
                            cart_id: item?.cart_id,
                        }));

                    await deleteProductFromTheApi(
                        updatedItemsInCard,
                        session?.accessToken
                    );
                    const updatedCartProducts = await fetchCartProducts(
                        outletId,
                        districtId
                    );

                    if (updatedCartProducts?.success) {
                        const selectedProductIds = getSelectedCardIds();
                        const updatedProducts = updateProductWithChecked(
                            selectedProductIds,
                            updatedCartProducts?.data
                        );
                        setCheckedProductCard(updatedProducts);
                        const quantityTotal = getTotalQuantity(
                            updatedCartProducts?.data
                        );

                        dispatch(
                            setAddToCart({
                                hasSession: true,
                                length: quantityTotal,
                            })
                        );
                    }
                } else {
                    const updatedItemsInCard = checkedProductCard.filter(
                        (item) => !item.isChecked
                    );
                    setCheckedProductCard(updatedItemsInCard);
                    updateLocalStorage(updatedItemsInCard);
                    const addToCartProductLength = addToCartProductList();
                    const quantityTotal = getTotalQuantity(
                        addToCartProductLength
                    );
                    dispatch(
                        setAddToCart({
                            hasSession: false,
                            length: quantityTotal,
                        })
                    );
                }
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
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
    // selected checked product item
    const selectedCount = checkedProductCard.filter(
        (card) => card.isChecked
    ).length;

    /**
     * Handles decrementing the quantity of a cart item.
     * If a session exists, it updates the quantity on the server and refreshes the cart state.
     * If no session exists, it updates the quantity locally and updates local storage.
     *
     * @param {number} indexId - The ID of the cart item to decrement.
     */
    const handleDecrement = async (indexId) => {
        try {
            setQuantityUpdateLoader(true);

            if (session) {
                const checkingProductFilter = isAnyChecked(checkedProductCard);
                const cartIds = checkingProductFilter.map((item) => ({
                    cart_id: item?.cart_id,
                }));
                setSelectedCardIds(cartIds);
                const quantityUpdateInfo = {
                    cart_id: indexId,
                    outlet_id: outletId,
                    quantity: "decrement",
                };
                const decrementApi = await addToCartQuantityUpdate(
                    quantityUpdateInfo,
                    session?.accessToken
                );

                const updatedCartProducts = await fetchCartProducts(
                    outletId,
                    districtId
                );
                if (updatedCartProducts?.success) {
                    const selectedProductIds = getSelectedCardIds();
                    const updatedProducts = updateProductWithChecked(
                        selectedProductIds,
                        updatedCartProducts?.data
                    );
                    setCheckedProductCard(updatedProducts);
                    const quantityTotal = getTotalQuantity(
                        updatedCartProducts?.data
                    );
                    dispatch(
                        setAddToCart({
                            hasSession: true,
                            length: quantityTotal,
                        })
                    );
                }
            } else {
                const updatedUsers = checkedProductCard.map(
                    (checkCard, index) => {
                        if (index === indexId) {
                            if (checkCard.quantity > 1) {
                                return {
                                    ...checkCard,
                                    quantity: checkCard.quantity - 1,
                                };
                            }
                        }
                        return checkCard;
                    }
                );
                const quantityTotal = getTotalQuantity(updatedUsers);
                dispatch(
                    setAddToCart({
                        hasSession: false,
                        length: quantityTotal,
                    })
                );
                setCheckedProductCard(updatedUsers);
                updateLocalStorage(updatedUsers);
            }
            setQuantityUpdateLoader(false);
        } catch (error) {
            console.log(error);
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
        try {
            setQuantityUpdateLoader(true);
            if (session) {
                const checkingProductFilter = isAnyChecked(checkedProductCard);
                const cartIds = checkingProductFilter.map((item) => ({
                    cart_id: item?.cart_id,
                }));
                setSelectedCardIds(cartIds);
                const quantityUpdateInfo = {
                    cart_id: indexId,
                    outlet_id: outletId,
                    quantity: "increment",
                };

                const incrementApi = await addToCartQuantityUpdate(
                    quantityUpdateInfo,
                    session?.accessToken
                );

                const updatedCartProducts = await fetchCartProducts(
                    outletId,
                    districtId
                );

                if (updatedCartProducts?.success) {
                    const selectedProductIds = getSelectedCardIds();
                    const updatedProducts = updateProductWithChecked(
                        selectedProductIds,
                        updatedCartProducts?.data
                    );
                    setCheckedProductCard(updatedProducts);

                    const quantityTotal = getTotalQuantity(
                        updatedCartProducts?.data
                    );

                    dispatch(
                        setAddToCart({
                            hasSession: true,
                            length: quantityTotal,
                        })
                    );
                }
            } else {
                const updatedUsers = checkedProductCard.map(
                    (checkCard, index) => {
                        if (index === indexId) {
                            return {
                                ...checkCard,
                                quantity: checkCard.quantity + 1,
                            };
                        }
                        return checkCard;
                    }
                );
                const quantityTotal = getTotalQuantity(updatedUsers);
                dispatch(
                    setAddToCart({
                        hasSession: false,
                        length: quantityTotal,
                    })
                );
                setCheckedProductCard(updatedUsers);
                updateLocalStorage(updatedUsers);
            }
            setQuantityUpdateLoader(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const cartProduct = addToCartProductList();
            setCheckedProductCard(cartProduct);
        }
    }, []);
    /**
     * Fetches the products in the cart by making a GET request to the API.
     *
     * @returns {Promise<Object>} - The response from the API containing the cart products.
     */

    const fetchCartProducts = async (outletId, districtId) => {
        try {
            const response = await fetch(
                `${apiBaseUrl}/get-cart-products?outlet_id=${outletId}&location_id=${districtId}`,
                {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                }
            );

            // console.log("s", response);

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
        try {
            setLoading(true);
            if (session) {
                const updatedCartProducts = await fetchCartProducts(
                    outletId,
                    districtId
                );
                // console.log("sjfhdufh", updatedCartProducts);
                if (updatedCartProducts?.success) {
                    setCheckedProductCard(updatedCartProducts?.data);
                }
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleCheckout();
    }, [session]);

    function isAnyChecked(products) {
        const isCheckedProduct = [];
        for (let product of products) {
            if (product.isChecked) {
                isCheckedProduct.push(product);
            }
        }
        return isCheckedProduct;
    }

    useEffect(() => {
        const checkingProductFilter = isAnyChecked(checkedProductCard);
        console.log({ checkingProductFilter });
        setCheckingProductFilter(checkingProductFilter)

        const checkedProductTotalPrice = checkingProductFilter.reduce(
            (sum, product) => {
                return sum + parseFloat(product.price) * product.quantity;
            },
            0
        );
        const checkedProductSubTotalPrice = checkingProductFilter.reduce(
            (sum, product) => {
                return sum + parseFloat(product.regular_price || product.price) * product.quantity;
            },
            0
        );
        const checkedProductTotalDiscount = checkingProductFilter.reduce(
            (sum, product) => {
                return sum + parseFloat((product.regular_price ? product.regular_price : product.price) - product.price) * product.quantity;
            },
            0
        );

        setTotalPrice(checkedProductTotalPrice);
        setSubTotalPrice(checkedProductSubTotalPrice);
        setTotalDiscount(checkedProductTotalDiscount);

        setIsRemoveOpen(checkingProductFilter.length > 0 ? true : false);
    }, [checkedProductCard]);

    const handleCheckoutNavigation = async () => {
        const checkingProductFilter = isAnyChecked(checkedProductCard);
        if (checkingProductFilter.length > 0) {
            if (session) {
                const updatedItemsInCard = checkingProductFilter.map(
                    (item) => ({
                        cart_id: item?.cart_id,
                    })
                );
                // console.log("updatedItemsInCard", updatedItemsInCard);
                await addToCartSelectedProduct(
                    updatedItemsInCard,
                    session?.accessToken
                );
                router.push(`/shipping-page/cart-product`);
            } else {
                requestPage("cart-page");
                router.push("/login");
                showToast("Log in to access shipping", "error");
            }
        } else {
            showToast("Please select product first", "error");
        }
    };



    const handlePlaceOrder = async () => {

        const cartItems = checkingProductFilter.map(product => ({
            product_id: product.product_id,
            product_quantity: product.quantity,
            product_regular_price: product.regular_price,
            product_unit_price: product.price,
            product_variation_id: product.product_variation_id || "",
            product_shipping_charge: "", // You can add this if available
            product_discount_type: product.discount_type || "",
            product_discount_amount: product.discountPrice || "",
            vendor_id: "",
            thumbnail: product.product_thumbnail || ""
        }));

        const data = {
            outlet_id: outletId,
            location_id: districtId,
            sub_total: subTotalPrice,
            discount_amount: totalDiscount,
            total_products_price: subTotalPrice,
            total_delivery_charge: 0,
            grand_total: totalPrice,
            delivery_note: "",
            shipping_email: "",
            outlet_pickup_point_id: null,
            order_product_type: selectedProductType,
            place_order_with: "add to cart",
            shipping_address_id:null,
            payment_type:"",
            cart_items: cartItems,
            // cart_items: [
            //   {
            //     product_id: 1,
            //     product_quantity: 1,
            //     product_regular_price: 0,
            //     product_unit_price: 100,
            //     product_variation_id: "",
            //     product_shipping_charge: "",
            //     product_discount_type: "",
            //     product_discount_amount: "",
            //     vendor_id: "",
            //     thumbnail: "storage/media/product/thumbnail/Capture.PNG"
            //   }
            // ]
        }

        console.log("place order", data);

        try {
            if (session) {
                const order = await placeOrder(data, session?.accessToken);
                if (order.code == 200) {
                    deleteBuyNowProductData();
                    router.push(`/paynow?orderId=${order?.results?.order_id}`);
                } else {
                    showToast(order.message, "error");
                }
            } else {
                requestPage("cart-page");
                router.push("/login");
                showToast("Log in to access shipping", "error");
            }
        } catch (error) {
            console.error("An error occurred while placing the order:", error);
            showToast("Something went wrong, please try again later.", "error");
        }
    }


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
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="select-all">
                                            Select All
                                        </label>
                                    </div>
                                    <div className="cart-top-remove-btn">
                                        <button
                                            onClick={handleSelectedItemDelete}
                                            disabled={!isRemoveOpen}
                                            style={{
                                                opacity: isRemoveOpen
                                                    ? "100%"
                                                    : 0.5,
                                                cursor: isRemoveOpen
                                                    ? "pointer"
                                                    : "not-allowed",
                                            }}
                                        >
                                            <FaTrashCan /> REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row product-cart-details-area">
                            <div className="col-12">
                                <div className="product-cart-details-continer overflow-x-auto">
                                    <div className="table align-middle">
                                        <div className="d-flex flex-column gap-2">
                                            {checkedProductCard.length > 0 ? (
                                                checkedProductCard?.map(
                                                    (item, index) => {
                                                        price =
                                                            item.price *
                                                            item.quantity;
                                                        regularPrice =
                                                            item.regular_price *
                                                            item.quantity;

                                                        return (
                                                            <div
                                                                className="d-flex justify-content-between gap-2 product-cart-details-item"
                                                                key={index}
                                                            >
                                                                <div className="d-flex gap-3">
                                                                    <div className="d-flex justify-content-center align-items-center">
                                                                        <input
                                                                            className="cart-checkbox"
                                                                            type="checkbox"
                                                                            name={`${index}`}
                                                                            checked={item?.isChecked || false}
                                                                            onChange={handleChange}
                                                                        />
                                                                    </div>

                                                                    <div>
                                                                        <div className="product-cart-product-img">
                                                                            <Image
                                                                                fill={true}
                                                                                src={`${NagadhatPublicUrl}/${item?.product_thumbnail}`}
                                                                                alt="black-friday"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <h2 className="product-cart-text">
                                                                            <Link
                                                                                href={`/products/get-product-details?outlet_id=${item?.outlet_id}&product_id=${item?.product_id}`}
                                                                            >
                                                                                {item.product_name}
                                                                            </Link>
                                                                        </h2>
                                                                        <div className="cart-prodect-variants">
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
                                                                                                    <React.Fragment key={inx}>
                                                                                                        <p>
                                                                                                            <span>{keyDisplay}:{" "}</span>
                                                                                                            <span className="cart-prodect-variants-item">
                                                                                                                <label>{value}</label>
                                                                                                            </span>
                                                                                                        </p>
                                                                                                    </React.Fragment>
                                                                                                );
                                                                                            }
                                                                                            return null;
                                                                                        }
                                                                                    )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div>
                                                                        <p><strong className="product-cart-price">৳{price}</strong></p>
                                                                        <p><del className="product-cart-discount-price">৳{regularPrice}</del></p>
                                                                    </div>
                                                                    <div className="d-flex gap-2">
                                                                        <button
                                                                            className="product-cart-remov-btn"
                                                                            onClick={() => handleDelete(session ? item?.cart_id : index)}
                                                                        >
                                                                            <FaTrashCan />
                                                                        </button>
                                                                        <button className="product-cart-remov-btn">
                                                                            <FaRegHeart />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="my-auto">
                                                                    <div
                                                                        className="btn-group quantity-area"
                                                                        role="group"
                                                                        aria-label="Basic example"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            className="quantity-increase"
                                                                            onClick={() => { handleDecrement(session ? item?.cart_id : index); }}
                                                                            disabled={quanticUpdateLoader}
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
                                                                            value={item?.quantity}
                                                                            readOnly
                                                                        />
                                                                        <button
                                                                            className="quantity-decrease"
                                                                            type="button"
                                                                            onClick={() => { handleIncrement(session ? item?.cart_id : index); }}
                                                                            disabled={quanticUpdateLoader}
                                                                        >
                                                                            <FaPlus />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )
                                            ) : (
                                                <NoDataFound
                                                    title={"No Cart Items"}
                                                    description={"There are no items in this cart"}
                                                />
                                            )}
                                        </div>
                                    </div>
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
                                            fill={true}
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
                                    <div className="d-flex gap-3 align-items-center justify-content-between shopping-price-area py-1">
                                        <p className="">
                                            Total{" "}
                                            {checkedProductCard.length > 0 &&
                                                totalPrice > 0 && (
                                                    <span
                                                        style={{
                                                            color: "#414241",
                                                            fontSize: "14px",
                                                            fontWeight: "400"
                                                        }}
                                                    >
                                                        (Items {selectedCount})
                                                    </span>
                                                )}
                                        </p>
                                        <strong>৳{totalPrice}</strong>
                                    </div>
                                    {selectedProductType == 2 ?
                                        <button
                                            onClick={(e) => { handlePlaceOrder() }}
                                            className="add-to-cart-link border border-0 w-100"
                                            disabled={!totalPrice}
                                            style={{
                                                pointerEvents:
                                                    totalPrice && !isButtonDisabled
                                                        ? "auto" : "none",
                                                opacity:
                                                    totalPrice && !isButtonDisabled
                                                        ? 1 : 0.5,
                                            }}
                                        >
                                            {totalPrice ? "place order" : "Select First"}
                                        </button>
                                        :
                                        <button
                                            onClick={(e) => { handleCheckoutNavigation() }}
                                            className="add-to-cart-link border border-0 w-100"
                                            disabled={!totalPrice}
                                            style={{
                                                pointerEvents:
                                                    totalPrice && !isButtonDisabled
                                                        ? "auto" : "none",
                                                opacity:
                                                    totalPrice && !isButtonDisabled
                                                        ? 1 : 0.5,
                                            }}
                                        >
                                            {totalPrice ? "CHECKOUT" : "Select First"}
                                        </button>
                                    }
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
