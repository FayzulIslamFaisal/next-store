import Image from "next/image";
const CompanyBankInfoRight = () => {
    return (
        <>
            <div className="col-md-6">
                <div
                    className=" position-relative w-100 "
                    style={{ height: "250px" }}
                >
                    <Image fill src={`/images/bkash-image.png`} alt="image" />
                </div>
            </div>
        </>
    );
};

export default CompanyBankInfoRight;
