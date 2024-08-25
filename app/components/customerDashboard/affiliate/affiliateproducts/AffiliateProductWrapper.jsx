import { FaTableCells } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
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
