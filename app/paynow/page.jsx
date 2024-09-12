import PayNowTopIcon from "../components/paynow/PayNowTopIcon";
import PayNowDetails from "../components/paynow/PayNowDetails";
import Service from "../components/Service";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const PayNowPage = () => {
    return (
        <>
            <PrivateRoute>
                <div className="pay-now-wrapper">
                    <div className="container">
                        <PayNowTopIcon />
                        <PayNowDetails />
                        <Service  />
                    </div>
                </div>
            </PrivateRoute>
        </>
    );
};

export default PayNowPage;
