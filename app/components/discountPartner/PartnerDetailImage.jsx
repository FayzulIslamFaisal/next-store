import Image from "next/image";

const PartnerDetailImage = () => {
    return (
        <>
            <div className="col-md-6 col-12 ">
                <div
                    className="mb-4 position-relative w-100"
                    style={{ height: "320px" }}
                >
                    <Image
                        fill
                        src={`/images/1685792932_270252764_106906425207433_1238237773264254812_n.jpg`}
                        alt="image alt ss"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="row g-2 pb-4">
                    <div className="col-md-4 col-sm-6">
                        <div
                            className="position-relative w-100"
                            style={{ height: "140px" }}
                        >
                            <Image
                                fill
                                src={`/images/1685792932_270252764_106906425207433_1238237773264254812_n.jpg`}
                                alt="image alt"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div
                            className="position-relative w-100"
                            style={{ height: "140px" }}
                        >
                            <Image
                                fill
                                src={`/images/1685792932_270252764_106906425207433_1238237773264254812_n.jpg`}
                                alt="image alt"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div
                            className="position-relative w-100"
                            style={{ height: "140px" }}
                        >
                            <Image
                                fill
                                src={`/images/1685792932_270252764_106906425207433_1238237773264254812_n.jpg`}
                                alt="image alt"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div
                            className="position-relative w-100"
                            style={{ height: "140px" }}
                        >
                            <Image
                                fill
                                src={`/images/1685792932_270252764_106906425207433_1238237773264254812_n.jpg`}
                                alt="image alt"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartnerDetailImage;