"use client"
import ResaleShippingProduct from '@/app/components/customerDashboard/affiliate/affiliateproducts/ResaleShippingProduct';
import CustomerAddress from '@/app/components/shippingPage/customerAddress/CustomerAddress';
import ShippingOrderSection from '@/app/components/customerDashboard/affiliate/affiliateproducts/ShippingOrderSectionResale';
import ShippingProduct from '@/app/components/shippingPage/ShippingProduct';
import { getResaleOrderByOrderId } from '@/app/services/affiliate/getResaleOrderByOrderId';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import ShippingOrderSectionResale from '@/app/components/customerDashboard/affiliate/affiliateproducts/ShippingOrderSectionResale';

const page = ({ params }) => {
    const [customerAddress, setCustomerAddress] = useState([]);
    const [deliveryNote, setDeliveryNote] = useState("");
    const [cartProduct, setCartProduct] = useState([]);
    const [pickUpIdForOrder, setPickUpIdForOrder] = useState(null);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const { status, data: session } = useSession();
    const orderId = params?.orderId;


    const handlePlaceOrder = () => {
        // Place order logic goes here
        console.log("Place order called");
    };

    // Fetch Order information
    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                if (session?.accessToken && orderId) {
                    // Fetch Order information from API
                    const response = await getResaleOrderByOrderId(session.accessToken, orderId);
                    console.log({ response });
                    setSubTotal(response?.results.sub_total);
                    setTotalPrice(response?.results.grand_total);
                    // Assuming response contains the product list, set cartProduct accordingly
                    setCartProduct(response?.results?.products || []);  // Update as per actual response structure
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrderDetails();
    }, [session?.accessToken, orderId]);

    return (
        <>
            <section className="shipping-section-area nh-new-shipping-wrapper">
                <div className="container">
                    <div className="row gy-5 gy-lg-0 gx-0 gx-lg-5">
                        <div className="col-lg-8">
                            <CustomerAddress
                                setPickUpIdForOrder={
                                    setPickUpIdForOrder
                                }
                                setShippingPrice={setShippingPrice}
                                setDeliveryNote={setDeliveryNote}
                                customerAddress={customerAddress}
                                setCustomerAddress={setCustomerAddress}
                            />

                            {/* shows add to card product */}
                            <ResaleShippingProduct
                                cartProduct={cartProduct}
                            />
                        </div>
                        <div className="col-lg-4">
                            <ShippingOrderSectionResale
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
        </>
    )
}

export default page
