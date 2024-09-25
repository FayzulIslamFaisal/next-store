import Image from "next/image";
import QRCode from "react-qr-code";
const SaleOnNagadhatDetailBottom = () => {
    return (
        <>
            <div className="d-flex gap-4 justify-content-between px-4 pt-0 pb-5">
                <div className="">
                    <h4 className=" fs-4">প্রথম পক্ষ</h4>
                    <div className="pt-2 pb-4">
                        <QRCode
                            size={256}
                            style={{
                                height: "auto",
                                maxWidth: "100px",
                                width: "100%",
                            }}
                            value={`hello world`}
                        />
                    </div>
                    <p>
                        <strong className="fs-5">Saiful Islam Akundo</strong>
                    </p>
                </div>
                <div className="">
                    <div className="pb-2">
                        <Image
                            src={`/images/signature.png`}
                            width={120}
                            height={50}
                            alt="image"
                            sizes="100vw"
                        />
                    </div>
                    <p className=" fs-6">
                        দ্বিতীয় পক্ষ <br /> মোঃ ইস্রাফিল মোল্লা
                        <br />
                        ব্যবস্থাপনা পরিচালক,
                        <br /> নগদহাট বাংলাদেশ লিমিটেড।
                    </p>
                </div>
            </div>
        </>
    );
};

export default SaleOnNagadhatDetailBottom;
