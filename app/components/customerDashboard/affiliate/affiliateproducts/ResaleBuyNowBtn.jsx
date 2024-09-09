"use client";
import { showToast } from '@/app/components/Toast';
import { placeOrder } from '@/app/services/postPlaceOrder';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ResaleBuyNowBtn = ({ product }) => {
    const { status, data: session } = useSession();
    const router = useRouter();
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

    const handlePlaceOrder = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        let newQuantity = product.updateQuantity || product.min_quantity || 1;
        
        const cartItems = [{
            cart_product_type : product.sell_product_type || 2,
            product_id: product.id,
            product_quantity: (newQuantity || 1),
            product_regular_price: product.resell_mrp_price,
            product_unit_price: product.resell_mrp_price,
            product_variation_id: "",
            product_shipping_charge: "",
            product_discount_type: "",
            product_discount_amount: (product.resell_mrp_price - product.resell_purchases_price) * (newQuantity || 1),
            vendor_id: "",
            thumbnail: product.product_thumbnail || ""
        }];

        const data = {
            outlet_id: outletId,
            location_id: districtId,
            sub_total: product.resell_mrp_price * (newQuantity || 1),
            discount_amount: 0,
            total_products_price: product.resell_mrp_price * (newQuantity || 1),
            total_delivery_charge: 0,
            grand_total: product.resell_mrp_price * (newQuantity || 1),
            delivery_note: "",
            shipping_email: "",
            outlet_pickup_point_id: null,
            order_product_type: 2,
            place_order_with: "",
            shipping_address_id: null,
            payment_type: "",
            cart_items: cartItems,
        }

        try {
            const order = await placeOrder(data, session?.accessToken);
            if (order.code == 200) {
                router.push(`/paynow?orderId=${order?.results?.order_id}`);
            } else {
                showToast(order.message, "error");
            }
        } catch (error) {
            console.error("An error occurred while placing the order:", error);
            showToast("Something went wrong, please try again later.", "error");
        }
    }
    return (
        <>
            <button
                onClick={handlePlaceOrder}
                className="add-to-cart-link undefined category-product-add-btn border-0"
                style={{
                    pointerEvents: "auto",
                    opacity: 1,
                }}
            >
                Buy Now
            </button>
        </>
    )
}

export default ResaleBuyNowBtn
