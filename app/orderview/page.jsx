import OrderViewSummary from "../components/orderview/OrderViewSummary";
import OrderViewTimeLine from "../components/orderview/OrderViewTimeLine";
import OrderViewDetail from "../components/orderview/OrderViewDetail";
import OrderViewPaymentHistory from "../components/orderview/OrderViewPaymentHistory";
import OrderViewAmmount from "../components/orderview/OrderViewAmmount";
import OrderViewTopBtn from "../components/orderview/OrderViewTopBtn";

const OrderViewPage = () => {
    return (
        <>
            <div className="order-view-wrapper">
                <div className=" container">
                    <OrderViewTopBtn />
                    <OrderViewSummary />
                    <OrderViewTimeLine />
                    <div className="row order-view-payment-history">
                        <div className="col-lg-9">
                            <OrderViewDetail />
                            <OrderViewPaymentHistory />
                        </div>
                        <OrderViewAmmount />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewPage;
