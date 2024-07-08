import OrderSummaryLeft from "../components/ordersummary/OrderSummaryLeft";
import OrderSummaryRight from "../components/ordersummary/OrderSummaryRight";

const ThankYouPage = () => {
    return (
        <section className="order-confirm-section-area">
            <div className="custom-container">
                <div className="row align-items-center order-confirm-section  gy-5">
                    <OrderSummaryLeft />
                    <OrderSummaryRight />
                </div>
            </div>
        </section>
    );
};

export default ThankYouPage;
