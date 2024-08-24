import { getUserDashboard } from "@/app/services/userdashboard/getUserDashboard";
import { removeRequestPath } from "@/app/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isAffiliateUser, setIsAffiliateUser] = useState({});
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            const fetchUserDashboardInfo = async () => {
                try {
                    const userDashboardInfo = await getUserDashboard(
                        session?.accessToken
                    );
                    const userDashboardResult = userDashboardInfo?.results;
                    setIsAffiliateUser(userDashboardResult);
                } catch (error) {
                    console.error(
                        "Failed to fetch user dashboard info:",
                        error
                    );
                }
            };
            fetchUserDashboardInfo();
        }
    }, [status, session]);

    const isActive = (href) => currentPath === href;

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="customer-dashboard-side-nav">
            <div className="p-4 text-center customer-dashboard-profile">
                <div className="mb-3 customer-dashboard-profile-avatar">
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
                                isActive("/orderhistory") ? "activ-link" : ""
                            } nav-link customer-dashboard-nav-link`}
                            href="/orderhistory"
                            scroll={false}
                        >
                            <FaThList className="nav-icon me-2" />
                            Order History
                        </Link>
                    </li>
                    <li className="nav-item customer-dashboard-nav-item">
                        <p
                            className="nav-link customer-dashboard-nav-link dropdown-btn"
                            onClick={() => toggleDropdown("privilegeCard")}
                        >
                            <FaCreditCard className="nav-icon me-2" />
                            Privilege Card
                            <FaAngleRight
                                className={`dropdown ${
                                    activeDropdown === "privilegeCard"
                                        ? "rotate"
                                        : ""
                                }`}
                            />
                        </p>
                        <ul
                            className={`dropdown-conteiner ${
                                activeDropdown === "privilegeCard" ? "show" : ""
                            }`}
                        >
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

                    {isAffiliateUser?.affiliate_user_status == "Affiliate" && (
                        <li className="nav-item customer-dashboard-nav-item">
                            <p
                                className="nav-link customer-dashboard-nav-link dropdown-btn"
                                onClick={() => toggleDropdown("affiliate")}
                            >
                                <FaWallet className="nav-icon me-2" />
                                Affiliate
                                <FaAngleRight
                                    className={`dropdown ${
                                        activeDropdown === "affiliate"
                                            ? "rotate"
                                            : ""
                                    }`}
                                />
                            </p>
                            <ul
                                className={`dropdown-conteiner ${
                                    activeDropdown === "affiliate" ? "show" : ""
                                }`}
                            >
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="/affiliatedashboard"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Dashboard
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="/affiliateteam"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        My Team
                                    </Link>
                                </li>
                                <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="/affiliateproductslink"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Affiliate Products Link
                                    </Link>
                                </li>
                                {/* <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products
                                    </Link>
                                </li> */}
                                {/* <li className="dropdown-item customer-dashboard-dropdown-item">
                                    <Link
                                        className="dropdown-link customer-dashboard-dropdown-link"
                                        href="#"
                                    >
                                        <span className="dropdown-item-circle"></span>
                                        Resell Products Option
                                    </Link>
                                </li> */}
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
                                        href="/affiliaterankreward"
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
                    )}

                    <li className="nav-item customer-dashboard-nav-item">
                        <p
                            className="nav-link customer-dashboard-nav-link dropdown-btn"
                            onClick={() => toggleDropdown("payout")}
                        >
                            <FaBangladeshiTakaSign className="nav-icon me-2" />
                            Payout
                            <FaAngleRight
                                className={`dropdown ${
                                    activeDropdown === "payout" ? "rotate" : ""
                                }`}
                            />
                        </p>
                        <ul
                            className={`dropdown-conteiner ${
                                activeDropdown === "payout" ? "show" : ""
                            }`}
                        >
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
                                    My Income
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
                                isActive("/manage-profile") ? "activ-link" : ""
                            } nav-link customer-dashboard-nav-link`}
                            href="/manage-profile"
                            scroll={false}
                        >
                            <FaUser className="nav-icon me-2" />
                            Manage Profile/KYC
                        </Link>
                    </li>
                    <li className="nav-item customer-dashboard-nav-item">
                        <p
                            className="nav-link customer-dashboard-nav-link dropdown-btn"
                            onClick={() => toggleDropdown("settings")}
                        >
                            <FaCog className="nav-icon me-2" />
                            Settings
                            <FaAngleRight
                                className={`dropdown ${
                                    activeDropdown === "settings"
                                        ? "rotate"
                                        : ""
                                }`}
                            />
                        </p>
                        <ul
                            className={`dropdown-conteiner ${
                                activeDropdown === "settings" ? "show" : ""
                            }`}
                        >
                            <li className="dropdown-item customer-dashboard-dropdown-item">
                                <Link
                                    className="dropdown-link customer-dashboard-dropdown-link"
                                    href="/passwordtxnotp"
                                >
                                    <span className="dropdown-item-circle"></span>
                                    Password & TXN OTP
                                </Link>
                            </li>
                            <li className="dropdown-item customer-dashboard-dropdown-item">
                                <Link
                                    className="dropdown-link customer-dashboard-dropdown-link"
                                    href="/customershippingaddress"
                                >
                                    <span className="dropdown-item-circle"></span>
                                    Shipping Address
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item customer-dashboard-nav-item">
                        <p
                            className="nav-link customer-dashboard-nav-link dropdown-btn"
                            onClick={() => toggleDropdown("others")}
                        >
                            <FaPoll className="nav-icon me-2" />
                            Others
                            <FaAngleRight
                                className={`dropdown ${
                                    activeDropdown === "others" ? "rotate" : ""
                                }`}
                            />
                        </p>
                        <ul
                            className={`dropdown-conteiner ${
                                activeDropdown === "others" ? "show" : ""
                            }`}
                        >
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
                            onClick={(e) => {
                                removeRequestPath();
                            }}
                        >
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
    );
};

export default CustomerLeftSideNavbar;
