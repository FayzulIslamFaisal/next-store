
import AffiliateRetailsProduct from "./AffiliateRetailsProduct";
import ContainerBooking from "./ContainerBooking";
import ResaleProducts from "./ResaleProducts";

const AffiliateProductBody = () => {
    return (
        <>
            <div className="tab-content container-booking-body">
                <AffiliateRetailsProduct />
                <ContainerBooking />
                <ResaleProducts />
            </div>
        </>
    );
};

export default AffiliateProductBody;
