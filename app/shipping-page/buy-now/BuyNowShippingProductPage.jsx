"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { getCustomerAllShippingAddress } from "../../services/getShippingCustomerAddresses";
import {
    deleteBuyNowProductData,
    getBuyNowProductData,
} from "../../utils";
import { placeOrder } from "../../services/postPlaceOrder";
import Link from "next/link";
import PrivateRoute from "@/app/components/PrivateRoute/PrivateRoute";
import { showToast } from "@/app/components/Toast";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomerAddress from "@/app/components/shippingPage/customerAddress/CustomerAddress";
import ShippingProduct from "@/app/components/shippingPage/ShippingProduct";
import ShippingOrderSection from "@/app/components/shippingPage/ShippingOrderSection";

const BuyNowShippingProductPage = () => {
    const { status, data: session } = useSession();
    const [customerAddress, setCustomerAddress] = useState([]);

    const [cartProduct, setCartProduct] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [pickUpIdForOrder, setPickUpIdForOrder] = useState(null);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [deliveryNote, setDeliveryNote] = useState("");
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
    const [selectedDefaultAddressId, setSelectedDefaultAddressId] =
        useState(null);
    const [redirectPath, setRedirectPath] = useState("#");
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const router = useRouter();


    function findObjectWithKey(array, key, value) {
        return array.find((obj) => obj[key] === value);
    }

    useEffect(() => {
        const fetchData = async () => {
            if (session) {
                try {
                    const data = await getCustomerAllShippingAddress(session?.accessToken);
                    setCustomerAddress(data.results);
                    const defaultAddressInfo = findObjectWithKey(data.results, "set_default", 1);
                    setSelectedDefaultAddressId(defaultAddressInfo?.id);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };
        fetchData();
    }, [session]);

    const handlePlaceOrder = async () => {
        if (!isTermsChecked) {
            toast.error("You must agree to the terms and conditions.");
            return;
        }
        const cartItems = cartProduct?.map((item) => ({
            product_id: item.product_id,
            product_quantity: item.quantity,
            product_unit_price: item.price,
            product_variation_id: item.product_variation_id,
            product_shipping_charge: "", // Replace with actual shipping charge if applicable
            product_discount_type: item.discount_type,
            product_discount_amount: item?.regular_price,
            vendor_id: "", // Replace with actual vendor ID if applicable
            thumbnail: item.product_thumbnail,
            product_regular_price: item.discountPrice,
        }));

        const payload = {
            outlet_id: outletId,
            location_id: districtId,
            shipping_address_id: selectedDefaultAddressId, // Replace with actual shipping address ID if applicable
            delivery_note: deliveryNote,
            total_delivery_charge: shippingPrice,
            total_products_price: totalPrice,
            payment_type: "cash_on_delivery",
            shipping_email: userEmail,
            place_order_with: "buy now",
            outlet_pickup_point_id: pickUpIdForOrder,
            sub_total: subTotal,
            discount_amount: subTotal - totalPrice,
            grand_total: totalPrice + parseInt(shippingPrice),
            cart_items: cartItems,
        };
        // console.log(shippingPrice);
        const order = await placeOrder(payload, session?.accessToken);
        if (order.code == 200) {
            setRedirectPath(`/paynow?orderId=${order?.results}`);
            deleteBuyNowProductData();
            router.push(`/paynow?orderId=${order?.results}`);
        } else {
            setRedirectPath("#");
            showToast(order.message, "error");
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedEmail = localStorage.getItem("userEmail");
            if (savedEmail) {
                setUserEmail(savedEmail);
            } else if (session?.user?.email) {
                setUserEmail(session.user.email);
            }
        }
    }, [session]);

    useEffect(() => {
        const buyNowData = async () => {
            if (typeof window !== "undefined") {
                const cartProducts = getBuyNowProductData();
                setCartProduct(cartProducts);
            }
        };
        buyNowData();
    }, [session]);


    return (
        <PrivateRoute>
            <section className="shipping-section-area nh-new-shipping-wrapper">
                <div className="container">
                    <div className="row gy-5 gy-lg-0 gx-0 gx-lg-5">
                        <div className="col-lg-8">

                            <CustomerAddress
                                setPickUpIdForOrder={setPickUpIdForOrder}
                                setShippingPrice={setShippingPrice}
                                setDeliveryNote={setDeliveryNote}
                                customerAddress={customerAddress} setCustomerAddress={setCustomerAddress}
                            />

                            {/* shows add to card product */}
                            <ShippingProduct
                                cartProduct={cartProduct}
                                setTotalPrice={setTotalPrice}
                                setSubTotal={setSubTotal}
                            />

                        </div>
                        <div className="col-lg-4">
                            <ShippingOrderSection
                                subTotal={subTotal}
                                totalPrice={totalPrice}
                                shippingPrice={shippingPrice}
                                handlePlaceOrder={handlePlaceOrder}
                                isTermsChecked={isTermsChecked}
                                setIsTermsChecked={setIsTermsChecked}
                                customerAddress={customerAddress}
                                cartProduct={cartProduct}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </PrivateRoute>
    );
};

export default BuyNowShippingProductPage;
