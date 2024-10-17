import PartnerDetailImage from "./PartnerDetailImage";
import PartnerDetailInfoRight from "./PartnerDetailInfoRight";

const PartnerDetailInfo = ({ partnerDetail }) => {
    return (
        <div className="row pt-4">
            <PartnerDetailImage partnerDetail={partnerDetail} />
            <PartnerDetailInfoRight partnerDetail={partnerDetail} />
        </div>
    );
};

export default PartnerDetailInfo;
