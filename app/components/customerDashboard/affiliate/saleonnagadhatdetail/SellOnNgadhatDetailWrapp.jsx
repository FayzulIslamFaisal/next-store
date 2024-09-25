import SaleOnNagadhatDetailBottom from "./SaleOnNagadhatDetailBottom";
import SaleOnNagadhatDetailHeader from "./SaleOnNagadhatDetailHeader";
import SaleOnNagadhatDetailInvoice from "./SaleOnNagadhatDetailInvoice";
import SaleOnNagadhatDetailNomini from "./SaleOnNagadhatDetailNomini";
import SaleOnNagadhatDetailPay from "./SaleOnNagadhatDetailPay";
import SaleOnNagadhatDetailTop from "./SaleOnNagadhatDetailTop";

const SellOnNgadhatDetailWrapp = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area">
                <SaleOnNagadhatDetailHeader />
                <SaleOnNagadhatDetailTop />
                <SaleOnNagadhatDetailInvoice />
                <SaleOnNagadhatDetailPay />
                <SaleOnNagadhatDetailNomini />
                <SaleOnNagadhatDetailBottom />
            </div>
        </>
    );
};

export default SellOnNgadhatDetailWrapp;
