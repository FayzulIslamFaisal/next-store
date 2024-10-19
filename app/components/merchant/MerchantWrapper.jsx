import Image from "next/image";
import Service from "../Service";

const MerchantWrapper = () => {
    const serviceItems = [
        {
            imageurl: "/images/pickup.svg",
            altText: "pickup image",
            title: " Fast Delivery",
            subTitle: "Free For All Type Order",
        },
        {
            imageurl: "/images/gift-cart.svg",
            altText: "gift cart",
            title: " Best Quality",
            subTitle: "Best Product Peices",
        },
        {
            imageurl: "/images/gift-box.svg",
            altText: "gift box",
            title: " Exchange Offer",
            subTitle: "One Day To Changes",
        },
        {
            imageurl: "/images/headphone.svg",
            altText: "headphone",
            title: "  Help Center",
            subTitle: "Support System 24/7",
        },
    ];
    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant01.jpg`}
                                width={1370}
                                height={550}
                                alt="image"
                                className=" img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant02.jpg`}
                                width={1370}
                                height={450}
                                alt="image"
                                className=" img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant3.png`}
                                width={1370}
                                height={400}
                                alt="image"
                                className=" img-fluid"
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant04.jpg`}
                                width={1370}
                                height={200}
                                alt="image"
                                className=" img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant05.jpg`}
                                width={1370}
                                height={350}
                                alt="image"
                                className=" img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row g-2 align-items-center ">
                    <div className="col-md-8">
                        <div>
                            <iframe
                                width="100%"
                                height="452"
                                src="https://www.youtube.com/embed/CdLsU7ficaA?si=tRfwnSCZOvA2xxwc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="">
                            <Image
                                src="/images/o-que-e-seller.jpg"
                                width={550}
                                height={0} // or remove height
                                alt="image"
                                style={{
                                    maxWidth: "100%",
                                    objectFit: "cover",
                                    height: "auto",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="py-1">
                            <Image
                                src={`/images/merchant06.jpg`}
                                width={1370}
                                height={320}
                                alt="image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                <div className="row py-1 g-2">
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="">
                            <Image
                                src={`/images/merchan08.jpg`}
                                width={550}
                                height={310}
                                alt="image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="">
                            <Image
                                src={`/images/merchan09.jpg`}
                                width={550}
                                height={310}
                                alt="image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12">
                        <div className="">
                            <Image
                                src={`/images/merchan10.jpg`}
                                width={550}
                                height={310}
                                alt="image"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-4 merchant-top-space">
                <Service />
            </div>
        </>
    );
};

export default MerchantWrapper;
