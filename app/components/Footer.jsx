import CopyRight from "./CopyRight";
import Paywith from "./Paywith";
import QuickLinks from "./QuickLinks";

function Footer() {
    const linkListsOptionOne = [
        { title: "FAQ", path: "#" },
        { title: "Support", path: "#" },
        { title: "About Us", path: "#" },
        { title: "Terms & Conditions", path: "#" },
        { title: "Join Us", path: "#" },
        { title: "Quiz", path: "#" },
    ];
    const myAccoutOptions = [
        { title: "Login", path: "#" },
        { title: "Be an Affiliate", path: "#" },
        { title: "Be a Merchant", path: "#" },
        { title: "Discount Partner", path: "#" },
    ];

    return (
        <footer>
            <div className="container">
                <div className="row footer-widget-row">
                    <div className="col-xl-7">
                        <div className="row footer-widget-inner">
                            <div className="col-md-6 footer-widget">
                                <div className="footer-widget-logo">
                                    <a href="home.html">
                                        <img
                                            src="/images/footer-logo.svg"
                                            alt="footer logo"
                                        />
                                    </a>
                                </div>
                                <div className="footer-widget-info text-white">
                                    <p>
                                        Nagadhat is an e-commerce platform
                                        coupled with chain <br /> of affiliated
                                        marketing in Bangladesh.
                                    </p>
                                    <div className="nh-social-link d-flex align-items-center">
                                        <a href="#" target="_blank">
                                            <img
                                                src="/images/facbook.svg"
                                                alt="facbook"
                                            />
                                        </a>
                                        <a href="#" target="_blank">
                                            <img
                                                src="/images/twitter.svg"
                                                alt="twitter"
                                            />
                                        </a>
                                        <a href="#" target="_blank">
                                            <img
                                                src="/images/linkedin.svg"
                                                alt="linkedin"
                                            />
                                        </a>
                                        <a href="#" target="_blank">
                                            <img
                                                src="/images/youtube.svg"
                                                alt="youtube"
                                            />
                                        </a>
                                        <a href="#" target="_blank">
                                            <img
                                                src="/images/instagram.svg"
                                                alt="instagram"
                                            />
                                        </a>
                                    </div>
                                    <div className="nh-subscribe-form">
                                        <form>
                                            <div className="mb-3 d-flex">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="your email address here..."
                                                />
                                                <button
                                                    type="submit"
                                                    className="nh-subscribe-btn text-white text-uppercase"
                                                >
                                                    SUBSCRIBE
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 footer-widget text-white">
                                <h5>Contact Info</h5>
                                <div className="footer-widget-address">
                                    <div className="footer-widget-address-item d-flex">
                                        <div className="footer-widget-address-icon">
                                            <img
                                                src="/images/call-footer.svg"
                                                alt="call-footer"
                                            />
                                        </div>
                                        <div className="footer-widget-address-info">
                                            <strong>Call Us</strong>
                                            <p>
                                                <a href="tel:01906198502">
                                                    +8801906198502
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-widget-address-item d-flex">
                                        <div className="footer-widget-address-icon">
                                            <img
                                                src="/images/call-footer.svg"
                                                alt="call-footer"
                                            />
                                        </div>
                                        <div className="footer-widget-address-info">
                                            <strong>Address</strong>
                                            <p>
                                                Khaja Super Market, 2nd to 7th
                                                Floor, Kallyanpur <br />
                                                Bus Stop, Mirpur Road,
                                                Dhaka-1207.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="row footer-widget">
                            <QuickLinks
                                title="Quick Links"
                                option={linkListsOptionOne}
                            />
                            <QuickLinks
                                title="My Account"
                                option={myAccoutOptions}
                            />
                            <QuickLinks title="Be A Seller">
                                <div className="applay-now-btn">
                                    <a href="#">APPLY NOW</a>
                                </div>
                            </QuickLinks>
                        </div>
                    </div>
                </div>
                <div className="row payment-method-row">
                    <Paywith />
                </div>
                <CopyRight />
            </div>
        </footer>
    );
}

export default Footer;
