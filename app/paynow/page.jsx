

import PayNowTopIcon from "../components/paynow/PayNowTopIcon";
import PayNowDetails from "../components/paynow/PayNowDetails";

const PayNowPage = () => {
    return (
        <>
            <div className="pay-now-wrapper">
                <div className="container">
                    <PayNowTopIcon />
                    <PayNowDetails />
                </div>
            </div>
        </>
    );
};

export default PayNowPage;
