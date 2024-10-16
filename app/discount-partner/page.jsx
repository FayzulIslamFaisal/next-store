"use client";
import DiscountPartnerBasicInfo from "../components/discountPartner/DiscountPartnerBasicInfo";
import DiscountPartnerBusinessInfo from "../components/discountPartner/DiscountPartnerBusinessInfo";
import DiscountPartnerContactInfo from "../components/discountPartner/DiscountPartnerContactInfo";
import { useSearchParams } from "next/navigation";
import { DiscountPartnerTabTitle } from "../components/discountPartner/DiscountPartnerTabTitle";

const DiscountPartner = () => {
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab") || "basic-info";


    const handleTabClick = (tabId) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("tab", tabId);
        window.history.replaceState(
            {},
            "",
            `${window.location.pathname}?${newSearchParams.toString()}`
        );
    };

    return (
        <div className="my-5">
            <div className="customer-manage-profile-info container">

                <DiscountPartnerTabTitle handleTabClick={handleTabClick}/>
                <div className="tab-content container-booking-body">
                    {tab === "basic-info" && (
                        <DiscountPartnerBasicInfo 
                        isActive={tab === "basic-info"} 
                        handleTabClick={handleTabClick} 
                        />
                    )}
                    {tab === "contact-info" && (
                        <DiscountPartnerContactInfo 
                        isActive={tab === "contact-info"}
                        handleTabClick={handleTabClick}
                        />
                    )}
                    {tab === "business-info" && (
                        <DiscountPartnerBusinessInfo 
                        isActive={tab === "business-info"}
                        handleTabClick={handleTabClick}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiscountPartner;
