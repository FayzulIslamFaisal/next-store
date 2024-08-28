"use client"
import { NagadhatPublicUrl } from "@/app/utils";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const ContainerOrderDetails = ({ selectedProducts, setSelectedProducts }) => {
    // Initialize state with selectedProducts and default quantity
    
    console.log({ selectedProducts });

    const handleIncrease = (productId) => {
        setSelectedProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const handleDecrease = (productId) => {
        setSelectedProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
            )
        );
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value, 10);

        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 500) {
            setSelectedProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === productId ? { ...product, quantity: newQuantity } : product
                )
            );
        }
    };

    const handleDeleteSelectedProducts = (productId) => {
        const updatedProducts = selectedProducts.filter(product => product.id !== productId);
        setSelectedProducts(updatedProducts); // Update the local state
    };


    const calculateTotalPrice = () => {
        return selectedProducts.reduce((acc, product) => acc + product.pivot.mrp_price * product.quantity, 0);
    };
    const calculateDiscount = () => {
        return selectedProducts.reduce((acc, product) => acc + product.pivot.profit * product.quantity, 0);
    };

    const totalPrice = calculateTotalPrice();
    const discount = calculateDiscount();
    const finalTotal = totalPrice - discount;

    return (
        <>
            <div className="row gy-3 p-4">
                <div className="col-md-8 overflow-x-auto">
                    <div
                        className="container-booking-oder-table"
                        style={{ minWidth: "400px" }}
                    >
                        <h3>Order Details</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Details</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <img
                                                style={{ height: "50px" }}
                                                src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                                alt={product.product_name}
                                            />
                                        </td>
                                        <td>
                                            {product.product_name}
                                        </td>
                                        <td className="align-middle">
                                            <div
                                                className="btn-group px-1 quantity-area container-booking-quantity-area"
                                                role="group"
                                                aria-label="Basic example"
                                            >
                                                <button
                                                    type="button"
                                                    className="quantity-decrease"
                                                    onClick={() => handleDecrease(product.id)}
                                                    style={{ fontSize: "16px" }}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <input
                                                    className="quantity-fild py-1"
                                                    min="1"
                                                    max="500"
                                                    type="text"
                                                    style={{ width: "36px" }}
                                                    value={product.quantity}
                                                    onChange={(e) => handleQuantityChange(product.id, e)}
                                                />
                                                <button
                                                    className="quantity-increase"
                                                    type="button"
                                                    onClick={() => handleIncrease(product.id)}
                                                    style={{ fontSize: "16px" }}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <strong>{product.pivot.mrp_price * product.quantity}</strong>
                                        </td>
                                        <td className="align-middle">
                                            <p
                                                onClick={()=>handleDeleteSelectedProducts(product.id)}
                                                className="text-danger"
                                                title="Delete"
                                                style={{cursor:"pointer"}}
                                            >
                                                <FaTrashAlt />
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container-booking-oder-table">
                        <h3>Order Amount</h3>
                        <table className="table table-borderless container-booking-oder-amount-table">
                            <tbody>
                                <tr>
                                    <td>Sub Total</td>
                                    <td>{totalPrice}</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td>{discount}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>
                                        <strong>{finalTotal}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="overflow-hidden">
                            <a className="add-to-cart-link rounded-bottom">
                                Booking Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerOrderDetails;
