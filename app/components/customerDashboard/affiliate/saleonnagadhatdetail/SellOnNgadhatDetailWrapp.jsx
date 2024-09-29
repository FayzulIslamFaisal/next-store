"use client";
import { useSession } from "next-auth/react";
import SaleOnNagadhatDetailBottom from "./SaleOnNagadhatDetailBottom";
import SaleOnNagadhatDetailHeader from "./SaleOnNagadhatDetailHeader";
import SaleOnNagadhatDetailInvoice from "./SaleOnNagadhatDetailInvoice";
import SaleOnNagadhatDetailNomini from "./SaleOnNagadhatDetailNomini";
import SaleOnNagadhatDetailPay from "./SaleOnNagadhatDetailPay";
import SaleOnNagadhatDetailTop from "./SaleOnNagadhatDetailTop";
import { getSaleOnNagadhat } from "@/app/services/affiliate/getSaleOnNagadhat";
import { useEffect, useState, useTransition } from "react";

const SellOnNgadhatDetailWrapp = ({ orderId }) => {
    const [isPending, startTransition] = useTransition();
    const [saleOnNagadhatData, setSaleOnNagadhatData] = useState({});
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === "authenticated" && session?.accessToken) {
            const fetchSaleOnNagadhatData = async () => {
                try {
                    const response = await getSaleOnNagadhat(
                        orderId,
                        session?.accessToken
                    );
                    startTransition(() => {
                        setSaleOnNagadhatData(response?.results || {});
                    });
                } catch (error) {}
            };
            fetchSaleOnNagadhatData();
        }
    }, [status, session?.accessToken, orderId]);

    const saleOnLength =
        saleOnNagadhatData && Object.keys(saleOnNagadhatData).length > 0;

    console.log("saleOnNagadhatData", saleOnNagadhatData);

    return (
        <>
            <div className="customer-dashboard-order-history-area">
                <SaleOnNagadhatDetailHeader />
                <SaleOnNagadhatDetailTop
                    saleOnNagadhatData={saleOnNagadhatData}
                />
                <SaleOnNagadhatDetailInvoice
                    saleOnNagadhatData={saleOnNagadhatData}
                />
                <SaleOnNagadhatDetailPay
                    saleOnNagadhatData={saleOnNagadhatData}
                />
                <SaleOnNagadhatDetailNomini
                    saleOnNagadhatData={saleOnNagadhatData}
                />
                <SaleOnNagadhatDetailBottom
                    saleOnNagadhatData={saleOnNagadhatData}
                    orderId={orderId}
                />
            </div>
        </>
    );
};

export default SellOnNgadhatDetailWrapp;
