import Image from "next/image";
import Link from "next/link";
import {
    FaAngleRight,
    FaCog,
    FaCreditCard,
    FaGift,
    FaHome,
    FaPoll,
    FaSignOutAlt,
    FaThList,
    FaUser,
    FaWallet,
} from "react-icons/fa";
import { FaBangladeshiTakaSign, FaTicket } from "react-icons/fa6";

const CustomerLeftSideNavbar = ({ authSessionData }) => {
    return (
        <aside className="col-lg-3 d-none d-lg-block">
            <div className="customer-dashboard-side-nav">
                <div className="p-4 text-center customer-dashboard-profile">
                    <div className=" mb-3 customer-dashboard-profile-avatar">
                        <Image
                            className="rounded-circle"
                            src="/images/avatar-demo.png"
                            alt="avatar-demo"
                            width={60}
                            height={60}
                        />
                    </div>
                    <h2>
                        {authSessionData?.user?.name}
                        <span>®</span>
                    </h2>
                    <p>{authSessionData?.user?.email}</p>
                </div>
                <nav className="customer-dashboard-side-navbar">
                    <ul className="nav flex-column">
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className="nav-link customer-dashboard-nav-link"
                                href="/dashboard"
                            >
                                <FaHome className="nav-icon me-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a
                                className="nav-link customer-dashboard-nav-link "
                                href="/orderhistory"
                            >
                                <FaThList className="nav-icon me-2" />
                                Order History
                            </a>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaCreditCard className="nav-icon me-2" />
                                Privilege Card
                                <FaAngleRight className="dropdown" />
                            </a>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Privilege Dashboard
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Discount Partner
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Wallet Statement
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Rebate History
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaWallet className="nav-icon me-2" />
                                Affiliate
                                <FaAngleRight className="dropdown" />
                            </a>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Dashboard
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        My Team
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Products Link
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products Option
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Sell On Nagadhat
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Ranks & Rewards
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        My Challenges
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Terms & Condition
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaBangladeshiTakaSign className="nav-icon me-2" />
                                Payout
                                <FaAngleRight className="dropdown" />
                            </a>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Bonus
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Bonus
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Generation Bonus
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Ranks & Rewards
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Challenge
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Salary
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <FaGift className="nav-icon me-2" />
                                My Vouchers
                            </a>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a
                                className="nav-link customer-dashboard-nav-link"
                                href="/customerManageProfile.html"
                            >
                                <FaUser className="nav-icon me-2" />
                                Manage Profile/KYC
                            </a>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a className="nav-link customer-dashboard-nav-link dropdown-btn ">
                                <FaCog className="nav-icon me-2" />
                                Settings
                                <FaAngleRight className="dropdown" />
                            </a>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link "
                                        href="/customerSetting.html"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Password & TXN OTP
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="/customerSettingShaippingAddress.html"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Shipping Address
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaPoll className="nav-icon me-2" />
                                Others
                                <FaAngleRight className="dropdown" />
                            </a>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Invitations
                                    </a>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <a
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Quizes
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <FaTicket className="nav-icon me-2" />
                                Support
                            </a>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <a
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <i className="fas fa-sign-out-alt nav-icon pe-2"></i>
                                <FaSignOutAlt className="nav-icon me-2" />
                                Logout
                            </a>
                        </li>
                    </ul>
                </nav>
                <a className="w-100 add-to-cart-link" href="#">
                    Be a Seller
                </a>
            </div>
        </aside>
    );
};

export default CustomerLeftSideNavbar;
