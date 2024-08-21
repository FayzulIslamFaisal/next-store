import OrderViewWrapp from "../components/orderview/OrderViewWrapp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const OrderViewPage = () => {
    return (
        <>
            <PrivateRoute>
                <OrderViewWrapp />
            </PrivateRoute>
        </>
    );
};

export default OrderViewPage;
