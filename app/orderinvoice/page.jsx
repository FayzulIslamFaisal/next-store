"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const OrderInvoicePage = () => {
    useEffect(() => {
        window.print();
    }, []);
    return (
        <>
            <div className=" container-fluid">
                <div className="row invoice-wrapper">
                    <section className="invoice-section order-invoice-section-area col-12 pt-3 ps-4">
                        <div className="d-flex flex-column align-content-between h-100 ">
                            <div className="invoice-body flex-grow-1">
                                <div className="row">
                                    <div className="invoice-contact-info col-6 fs-6">
                                        <div className="d-flex align-items-start gap-2 font-xs fw-semibold">
                                            <FaPhoneAlt className=" bg-praymary-color text-white rounded-circle p-1 " />
                                            <p className="mb-2">
                                                Hotline: 09647-444-444
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-start gap-2 font-xs fw-semibold">
                                            <FaRegEnvelope className="bg-praymary-color text-white rounded-circle p-1" />
                                            <p className="mb-2">
                                                Email: support@nagadhat.com.bd
                                            </p>
                                        </div>
                                        <div className="d-flex align-items-start gap-2 font-xs fw-semibold">
                                            <FaGlobe className="bg-praymary-color text-white rounded-circle p-1" />
                                            <p className="mb-2">
                                                Web: nagadhat.com.bd
                                            </p>
                                        </div>
                                    </div>
                                    <div className="invoice-section-ph-logo col-6">
                                        <div className="d-flex justify-content-end">
                                            <div className="invoice-logo ">
                                                <Image
                                                    fill
                                                    className="img-fluid"
                                                    src="/images/nagadhat-logo.png"
                                                    alt="logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="invoice-title text-center sub-section-margin-t">
                                    <h5 className="px-3 fw-bold py-1 d-inline border border-secondary rounded-pill">
                                        INVOICE
                                    </h5>
                                </div>
                                <div className="invoice-info-continar customer-info d-flex justify-content-between sub-section-margin-t">
                                    <div className="customer-infossss">
                                        <p className="pb-1 font-sm width-80">
                                            <span className="fw-bold">
                                                Name:{" "}
                                            </span>
                                            M/S Baghdad Trading
                                        </p>
                                        <p className="pb-1 font-sm width-80">
                                            <span className="fw-bold">
                                                Phone:{" "}
                                            </span>
                                            01739215458
                                        </p>
                                        <p className="pb-1 font-sm width-80 fw-bold">
                                            Customer Details:
                                            <span className="border-bottom-dotted">
                                                Victoria College Road, Comilla
                                                3500.
                                            </span>
                                        </p>
                                    </div>
                                    <div className="invoice-info">
                                        <div className="d-flex justify-content-end">
                                            <div className="customer-info-inner d-flex flex-column">
                                                <p className="fw-semibold font-sm">
                                                    Invoice:
                                                </p>
                                                <div className="d-flex align-items-center gap-2 font-sm mb-1">
                                                    <div className="bg-secondary-color rounded-circle invoice-list-doted-h"></div>
                                                    <p>Invoice No: #INV7863</p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 font-sm mb-1">
                                                    <div className="bg-secondary-color rounded-circle invoice-list-doted-h"></div>
                                                    <p>
                                                        Date: 30/04/24 7:32 PM
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 font-sm mb-1">
                                                    <div className="bg-secondary-color rounded-circle invoice-list-doted-h"></div>
                                                    <div className="d-flex justify-content-between gap-2">
                                                        <p>Payment Status:</p>
                                                        <p className="text-white bg-secondary-color text-center rounded payment-status-w">
                                                            Partial
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-2 font-sm mb-1 w-100">
                                                    <div className="bg-secondary-color rounded-circle invoice-list-doted-h"></div>
                                                    <div className="d-flex justify-content-between gap-2">
                                                        <p>Order Status:</p>
                                                        <p className="text-white bg-secondary-color text-center rounded payment-status-w">
                                                            Shipping
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-section-margin-t invoice-product-table">
                                    <table className="table border">
                                        <thead>
                                            <tr>
                                                <th className="bg-lite-dark">
                                                    #SL
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Image
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Product Name
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Qty
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Discount
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Price
                                                </th>
                                                <th className="bg-lite-dark">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className="product-img-h">
                                                    <div className="">
                                                        <img
                                                            className="img-fluid"
                                                            src="/img/img-1-1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </td>
                                                <td className="lh-1">
                                                    11oz rim color mug with
                                                    round handle+box, Barcode:
                                                    68666
                                                </td>
                                                <td>1</td>
                                                <td>20</td>
                                                <td>2892</td>
                                                <td>2892</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className=" text-capitalize mb-0 py-2">
                                            payment history
                                        </h5>
                                    </div>
                                </div>
                                <div className="row sub-section-margin-t">
                                    <div className="col-sm-8 invoice-payment-info">
                                        <table className="table border rounded">
                                            <thead>
                                                <tr>
                                                    <th>#SL</th>
                                                    <th>Date</th>
                                                    <th>Method</th>
                                                    <th>Note</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody className="border-top-2">
                                                <tr>
                                                    <td>1</td>
                                                    <td>30/05/24 7:32 PM</td>
                                                    <td>Cash</td>
                                                    <td>37863</td>
                                                    <td>৳ 3344</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>10/07/24 3:30 PM</td>
                                                    <td>Cash</td>
                                                    <td>37863</td>
                                                    <td>৳ 1044</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>07/06/24 9:00 AM</td>
                                                    <td>Cash</td>
                                                    <td>37863</td>
                                                    <td>৳ 5485</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-sm-4 invoice-pay-info">
                                        <div className="border rounded">
                                            <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                                                <p className="text-black">
                                                    Subtotal
                                                </p>
                                                <p className="text-black">
                                                    ৳ 58
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                                                <p className="text-black">
                                                    Discount
                                                </p>
                                                <p className="text-black"></p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center border-bottom px-3 py-2">
                                                <p className="text-black">
                                                    Shipping Charge
                                                </p>
                                                <p className="text-black"></p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center px-3 pt2">
                                                <p className="text-black">
                                                    <strong>Total</strong>
                                                </p>
                                                <p className="text-black">
                                                    <strong>৳ 45</strong>
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center px-3">
                                                <p className="text-black">
                                                    Paid
                                                </p>
                                                <p></p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center border-bottom px-3 pb-1">
                                                <p className="text-black">
                                                    Amount
                                                </p>
                                                <p className="text-black">
                                                    ৳ 0
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center px-3 py-2">
                                                <p className="text-danger">
                                                    <strong>Due</strong>
                                                </p>
                                                <p className="text-danger">
                                                    <strong>৳ 0.080</strong>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-footer">
                                <div className="col-12 mt-3 border-top py-3 fw-semibold text-center">
                                    <p>Thank you for being with Nagadhat</p>
                                    <div className="d-flex align-items-start gap-2 font-xs fw-semibold justify-content-center">
                                        <FaLocationDot className="bg-praymary-color text-white rounded-circle p-1" />
                                        <p className="mb-2">
                                            Khaja Super Market, 2nd to 7th
                                            Floor, Kallyanpur Bus Stop, Mirpur
                                            Road, Dhaka-1207
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default OrderInvoicePage;
