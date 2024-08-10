import React from "react";
import ProductSinglePage from "./ProductDetails";
import Head from "next/head";
import { getProductDetails } from "@/app/services/getProductDetails";
export async function generateMetadata(path) {
    try {
        console.log("Generated pathName:", path); // Debugging line
        console.log(
            "Generated pathName:",
            ` outlet_id=${path?.searchParams?.outlet_id}&product_id=${path?.searchParams?.product_id}`
        ); // Debugging line

        const productData = await getProductDetails(
            ` outlet_id=${path?.searchParams?.outlet_id}&product_id=${path?.searchParams?.product_id}`
        ); // Wait until data is fetched successfully
        const productDetails = productData?.results;

        if (!productDetails) {
            throw new Error("No product details found");
        }

        return {
            title: productDetails?.product_name || "Default Title",
            description:
                productDetails?.short_description || "Default Description",
            openGraph: {
                title: productDetails?.product_name || "Default Title",
                description:
                    productDetails?.short_description || "Default Description",
                url: `https://nagadhat-dev.vercel.app/products/get-product-details?outlet_id=${productDetails?.outlet_id}&product_id=${productDetails?.id}`,
                siteName: "Nagad Hut Bangladesh",
                images: [
                    {
                        url: `https://v3.nagadhat.com/${productDetails?.product_thumbnail}`,
                        width: 800,
                        height: 600,
                        alt: "Product Image",
                    },
                ],
                locale: "en_US",
                type: "website",
            },
        };
    } catch (error) {
        console.error("Error fetching product details:", error); // Detailed error logging
        // Handle error or return fallback metadata
        return {
            title: "Product Not Found",
            description: "Could not load product details",
            openGraph: {
                title: "Product Not Found",
                description: "Could not load product details",
                url: "https://nagadhat-dev.vercel.app/products",
                siteName: "Nagad Hut Bangladesh",
                images: [
                    {
                        url: "https://v3.nagadhat.com/default-thumbnail.jpg",
                        width: 800,
                        height: 600,
                        alt: "Default Image",
                    },
                ],
                locale: "en_US",
                type: "website",
            },
        };
    }
}

/* export const metadata = {
    openGraph: {
        title: "Next.js",
        description: "The React Framework for the Web",
        url: "https://nextjs.org",
        siteName: "Next.js",
        images: [
            {
                url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: "https://static-01.daraz.com.bd/p/57703e043589d286263bb30487d44fd4.jpg", // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: "My custom alt",
            },
        ],
        locale: "en_US",
        type: "website",
    },
}; */

const ProductDetailsShows = ({ searchParams }) => {
    const { outlet_id, product_id } = searchParams;
    return (
        <>
            <div>
                <Head>
                    {outlet_id &&
                        product_id &&
                        generateMetadata(
                            `outlet_id=${outlet_id}&product_id=${product_id}`
                        )}
                </Head>
                <ProductSinglePage
                    params={`outlet_id=${outlet_id}&product_id=${product_id}`}
                ></ProductSinglePage>
            </div>
        </>
    );
};

export default ProductDetailsShows;
