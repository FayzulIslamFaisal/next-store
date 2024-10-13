import PrivilegeCardModal from "./PrivilegeCardModal";
import PrivilegeCardProduct from "./PrivilegeCardProduct";
import PrivilegeMainCard from "./PrivilegeMainCard";

const PrivilegeCardDashboardTop = () => {
    return (
        <>
            <div className="customer-dashboard-order-history-area">
                <PrivilegeMainCard />
                <PrivilegeCardProduct />
            </div>

            {/* <!-- Modal --> */}
            <PrivilegeCardModal />
        </>
    );
};

export default PrivilegeCardDashboardTop;
