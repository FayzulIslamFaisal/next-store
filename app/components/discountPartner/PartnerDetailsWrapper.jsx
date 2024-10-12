import PartnerDetailInfo from "./PartnerDetailInfo";

const PartnerDetailsWrapper = () => {
    return (
        <>
            <div
                className=" text-center fs-1 py-2"
                style={{ background: "#44bc9d" }}
            >
                <h1 className="text-white mb-0">Plate Restaurant,</h1>
            </div>
            <PartnerDetailInfo />
        </>
    );
};

export default PartnerDetailsWrapper;
