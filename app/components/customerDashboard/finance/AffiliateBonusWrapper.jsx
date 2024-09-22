import FinanceTopTitle from "./FinanceTopTitle";
import WithdrawChart from "./WithdrawChart";
import mobileBanking from "@/public/images/mobile-banking.png";
import bank from "@/public/images/bank.png";
import Image from "next/image";
import FinancePaymentMethod from "./FinancePaymentMethod";
import AgentWithdrawalModal from "./AgentWithdrawalModal";
import MobileBankingModal from "./MobileBankingModal";
import BankWithdrawalModal from "./BankWithdrawalModal";
import WithdrawTopBanner from "./WithdrawTopBanner";

const WithdrawWrapper = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area">
                <FinanceTopTitle title="Withdraw" />
                <div className="p-4">
                    {/* withdraw top banner section */}
                    <WithdrawTopBanner />

                    {/* Withdrawal Payment Method*/}
                    <FinancePaymentMethod />

                    {/* Modal 1: Agent Withdrawal */}
                    <AgentWithdrawalModal />

                    {/* Modal 2: Mobile Banking */}
                    <MobileBankingModal />

                    {/* Modal 3: Bank */}
                    <BankWithdrawalModal />
                </div>
            </div>
        </>
    );
};

export default WithdrawWrapper;
