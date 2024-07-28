import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    const currentPath = usePathname();
    const isActive = (href) => currentPath === href;
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
                                className={`${
                                    isActive("/dashboard") ? "activ-link" : ""
                                } nav-link customer-dashboard-nav-link`}
                                href="/dashboard"
                                scroll={false}
                            >
                                <FaHome className="nav-icon me-2" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className={`${
                                    isActive("/orderhistory")
                                        ? "activ-link"
                                        : ""
                                } nav-link customer-dashboard-nav-link`}
                                href="/orderhistory"
                                scroll={false}
                            >
                                <FaThList className="nav-icon me-2" />
                                Order History
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <p className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaCreditCard className="nav-icon me-2" />
                                Privilege Card
                                <FaAngleRight className="dropdown" />
                            </p>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Privilege Dashboard
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Discount Partner
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Wallet Statement
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Rebate History
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <p className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaWallet className="nav-icon me-2" />
                                Affiliate
                                <FaAngleRight className="dropdown" />
                            </p>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Dashboard
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        My Team
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Products Link
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products Option
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Sell On Nagadhat
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Ranks & Rewards
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        My Challenges
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Terms & Condition
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <p className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaBangladeshiTakaSign className="nav-icon me-2" />
                                Payout
                                <FaAngleRight className="dropdown" />
                            </p>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Bonus
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Bonus
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Generation Bonus
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Ranks & Rewards
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Challenge
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Salary
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <FaGift className="nav-icon me-2" />
                                My Vouchers
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className={`${
                                    isActive("/manage-profile")
                                        ? "activ-link"
                                        : ""
                                } nav-link customer-dashboard-nav-link`}
                                href="/manage-profile"
                                scroll={false}
                            >
                                <FaUser className="nav-icon me-2" />
                                Manage Profile/KYC
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <p className="nav-link customer-dashboard-nav-link dropdown-btn ">
                                <FaCog className="nav-icon me-2" />
                                Settings
                                <FaAngleRight className="dropdown" />
                            </p>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link "
                                        href="/customerSetting.html"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Password & TXN OTP
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="/customerSettingShaippingAddress.html"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Shipping Address
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <p className="nav-link customer-dashboard-nav-link dropdown-btn">
                                <FaPoll className="nav-icon me-2" />
                                Others
                                <FaAngleRight className="dropdown" />
                            </p>
                            <ul className="dropdown-conteiner">
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Invitations
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Quizes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <FaTicket className="nav-icon me-2" />
                                Support
                            </Link>
                        </li>
                        <li className="nav-item customer-dashboard-nav-item">
                            <Link
                                className="nav-link customer-dashboard-nav-link"
                                href="#"
                            >
                                <i className="fas fa-sign-out-alt nav-icon pe-2"></i>
                                <FaSignOutAlt className="nav-icon me-2" />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link className="w-100 add-to-cart-link" href="#">
                    Be a Seller
                </Link>
            </div>
        </aside>
    );
};

export default CustomerLeftSideNavbar;
