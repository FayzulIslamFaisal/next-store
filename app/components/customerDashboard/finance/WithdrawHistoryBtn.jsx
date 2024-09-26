"use client";
import { FaEye } from "react-icons/fa6";
import WithdrawHistoryModal from "./WithdrawHistoryModal";
import { useState } from "react";

const WithdrawHistoryBtn = ({ item, token }) => {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <>
            <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#viewWithdrawHistoryModal"
                onClick={() => setSelectedId(item?.id)}
            >
                <FaEye />
            </button>
            <WithdrawHistoryModal selectedId={selectedId} token={token} />
        </>
    );
};

export default WithdrawHistoryBtn;
