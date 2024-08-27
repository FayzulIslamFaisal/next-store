import ContainerBookingProduct from "./ContainerBookingProduct";
import ContainerOrderDetails from "./ContainerOrderDetails";
import ContainerTopInfo from "./ContainerTopInfo";

const ContainerBooking = () => {
    return (
        <>
            <div
                className="tab-pane fade"
                id="container-booking"
                role="tabpanel"
            >
                <ContainerTopInfo />
                <ContainerBookingProduct />
                <ContainerOrderDetails />
            </div>
        </>
    );
};

export default ContainerBooking;