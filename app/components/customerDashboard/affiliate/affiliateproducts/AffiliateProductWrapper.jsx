import AffiliateTopTitle from "./AffiliateTopTitle";
import { AffiliateTabTitle } from "./AffiliateTabTitle";
import AffiliateProductBody from "./AffiliateProductBody";

const AffiliateProductWrapper = () => {
    return (
        <>
            <div className="customer-setting">
                <AffiliateTopTitle />
                <AffiliateTabTitle />
                <AffiliateProductBody />
            </div>
        </>
    );
};

export default AffiliateProductWrapper;
