import { Lato, Open_Sans, Philosopher } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import DistrictModal from "./components/DistrictModal";
import AuthProvider from "./auth/Provider";
import { Suspense } from "react";
// import { CategoryDetailProvider } from "./context/CategoryDetailContext";
// import { CategoryDetailProductProvider } from "./context/CategoryDetailProductContext";
import { ReduxProvider } from "./ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const lato = Lato({
    subsets: ["latin"],
    display: "swap",
    variable: "--lato",
    weight: ["100", "300", "400", "700", "900"],
});
const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--open-sans",
    weight: ["300", "400", "500", "600", "700", "800"],
});
const philosopher = Philosopher({
    subsets: ["latin"],
    display: "swap",
    variable: "--philosopher",
    weight: ["400", "700"],
});

export const metadata = {
    title: "Nagadhat",
    description: "Generated by create next app",
};

export default function RootLayout({ children, slug, option }) {
    return (
        <html
            lang="en"
            className={`${lato.variable} ${open_sans.variable} ${philosopher.variable}`}
        >
            <link
                rel="stylesheet"
                href="/css/bootstrap.min.css"
                precedence="default"
            />
            <link rel="stylesheet" href="/css/slick.css" precedence="default" />
            <link
                rel="stylesheet"
                href="/css/slick-theme.css"
                precedence="default"
            />
            <link rel="stylesheet" href="/css/brand.css" precedence="default" />
            <link
                rel="stylesheet"
                href="/css/animatloading.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/category.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/flash-sale.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/footer.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/header.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/hero-banner.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/just-for.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/partner.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/service.css"
                precedence="default"
            />
            <link rel="stylesheet" href="/css/home.css" precedence="default" />
            <link rel="stylesheet" href="/css/login.css" precedence="default" />
            <link
                rel="stylesheet"
                href="/css/product-details.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/product-category.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/view-all.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/cart-page.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/shipping-details.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/search-modal.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/order-confirm.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/collapse.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/new-shipping.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/questionCard.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/not-found-page.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/customer-dashboard.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/customer-manage-profile.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/customer-order-history.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/order-invoice.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/orderview.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/paynow.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/customer-password-setting.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/common.css"
                precedence="default"
            />
            <link
                rel="stylesheet"
                href="/css/responsive.css"
                precedence="default"
            />
            <link rel="stylesheet" href="/css/otp.css" precedence="default" />
            {/* <Script strategy="afterInteractive" src="/js/jquery.min.js" /> */}
            <Script
                strategy="afterInteractive"
                src="/js/bootstrap.bundle.min.js"
            />
            <Script src="/js/jquery.min.js" />
            <Script src="/js/custom.js" />

            <body>
                <Suspense>
                    <ReduxProvider>
                        <AuthProvider>
                            {/* <CategoryDetailProductProvider
                                slug={slug}
                                option={option}
                            > */}
                                {/* <CategoryDetailProvider> */}
                                    <Header />
                                    <DistrictModal />
                                    {children}
                                    <Footer />
                                    <ToastContainer />
                                {/* </CategoryDetailProvider> */}
                            {/* </CategoryDetailProductProvider> */}
                        </AuthProvider>
                    </ReduxProvider>
                </Suspense>
            </body>
        </html>
    );
}
