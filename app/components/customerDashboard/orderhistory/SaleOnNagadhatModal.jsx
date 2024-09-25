"use client";
import Image from "next/image";
import SaleOnNagadhatInvoice from "./SaleOnNagadhatInvoice";
import SaleOnNagadhatWallet from "./SaleOnNagadhatWallet";
import SaleOnNagadhatHeader from "./SaleOnNagadhatHeader";
import SaleOnNagadhatTop from "./SaleOnNagadhatTop";
import SaleOnNagadhatBottom from "./SaleOnNagadhatBottom";
import DeviceDetector from "device-detector-js";
import { useEffect, useState, useTransition } from "react";
import { getLocalIpAddress } from "@/app/services/affiliate/getLocalIpAddress";
import { useSession } from "next-auth/react";
import { getSaleOnNagadhat } from "@/app/services/affiliate/getSaleOnNagadhat";
import LodingFixed from "../../LodingFixed";
import NoDataFound from "../../NoDataFound";

const SaleOnNagadhatModal = ({ resaleOrderID }) => {
    const [isPending, startTransition] = useTransition();
    const [checkTermsCondition, setCheckTermsCondition] = useState(false);
    const [saleOnNagadhatData, setsaleOnNagadhatData] = useState({});
    const [ipAddress, setIpAddress] = useState(null);
    const [deviceInfo, setDeviceInfo] = useState(null);

    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated" && session?.accessToken) {
            const fetchSaleOnNagadhatData = async () => {
                try {
                    startTransition(async () => {
                        const response = await getSaleOnNagadhat(
                            resaleOrderID,
                            session?.accessToken
                        );
                        setsaleOnNagadhatData(response?.results || {});
                    });
                } catch (error) {}
            };
            fetchSaleOnNagadhatData();
        }
    }, [status, session?.accessToken, resaleOrderID]);

    const saleOnLength =
        saleOnNagadhatData && Object.keys(saleOnNagadhatData).length > 0;

    console.log("saleOnLength", saleOnLength);

    // Function to get IP address
    const fetchIpAddress = async () => {
        try {
            const response = await getLocalIpAddress();
            setIpAddress(response?.ip);
        } catch (error) {
            console.error("Error fetching IP address:" || error);
        }
    };

    // Function to get device information
    const getDeviceInfo = () => {
        const deviceDetector = new DeviceDetector();
        const userAgent = navigator.userAgent;
        const deviceInfo = deviceDetector.parse(userAgent);
        setDeviceInfo(
            `Device: ${deviceInfo?.device?.type || "N/A"}, Brand: ${
                deviceInfo?.device?.brand || "N/A"
            }, Model: ${deviceInfo?.device?.model || "N/A"}, Browser Name:${
                deviceInfo?.client?.name || "N/A"
            }`
        );
    };

    const handleTermsCondition = () => {
        setCheckTermsCondition(!checkTermsCondition);
    };

    useEffect(() => {
        if (checkTermsCondition) {
            fetchIpAddress();
            getDeviceInfo();
        }
    }, [checkTermsCondition]);

    return (
        <>
            <div
                className="modal fade"
                id="sale-on-nagadhat-modal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        {isPending && <LodingFixed />}
                        <SaleOnNagadhatHeader />
                        <div className="modal-body px-5">
                            {saleOnLength ? (
                                <>
                                    <SaleOnNagadhatTop
                                        saleOnNagadhatData={saleOnNagadhatData}
                                    />
                                    <SaleOnNagadhatInvoice
                                        saleOnNagadhatData={saleOnNagadhatData}
                                    />
                                    <SaleOnNagadhatWallet
                                        saleOnNagadhatData={saleOnNagadhatData}
                                    />
                                    <SaleOnNagadhatBottom
                                        saleOnNagadhatData={saleOnNagadhatData}
                                    />
                                </>
                            ) : (
                                <NoDataFound />
                            )}

                            <div className=" d-flex gap-4 justify-content-between">
                                <div className="">
                                    <div className="mb-3 d-flex align-items-center gap-2">
                                        <input
                                            type="checkbox"
                                            className="form-check-input border-2 border-info"
                                            id="terms-condition"
                                            style={{
                                                width: "25px",
                                                height: "25px",
                                            }}
                                            checked={checkTermsCondition}
                                            onChange={handleTermsCondition}
                                        />
                                        <label
                                            className="form-check-label fs-5 fw-bold "
                                            htmlFor="terms-condition"
                                        >
                                            I accept the terms and conditions.
                                        </label>
                                    </div>
                                    <h4 className=" fs-4">প্রথম পক্ষ</h4>
                                    <p>
                                        <strong className="fs-5">
                                            {saleOnNagadhatData?.first_name ||
                                                "N/A"}
                                        </strong>
                                    </p>
                                </div>
                                <div className="">
                                    <div className="pb-2">
                                        <Image
                                            src={`/images/signature.png`}
                                            width={120}
                                            height={50}
                                            alt="image"
                                            sizes="100vw"
                                        />
                                    </div>
                                    <p className=" fs-6">
                                        দ্বিতীয় পক্ষ <br /> মোঃ ইস্রাফিল মোল্লা
                                        <br />
                                        ব্যবস্থাপনা পরিচালক,
                                        <br /> নগদহাট বাংলাদেশ লিমিটেড।
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-success"
                                style={{
                                    opacity: checkTermsCondition ? 1 : 0.2,
                                    cursor: checkTermsCondition
                                        ? "pointer"
                                        : "not-allowed",
                                }}
                                disabled={!checkTermsCondition}
                            >
                                I agreed to a sale on Nagadhat.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SaleOnNagadhatModal;
