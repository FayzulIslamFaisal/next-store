"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DefaultLoader from '@/app/components/defaultloader/DefaultLoader';

const RefProduct = ({ params }) => {
    const { refId } = params;
    const [userId, productId] = refId;
    const router = useRouter();
    const [outletId, setOutletId] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("outletId") || 3;
        }
        return 3;
    });

    useEffect(() => {
        // Set userId in localStorage
        localStorage.setItem('referrerID', userId);

        // Redirect to the specified route
        router.push(`/products/get-product-details?outlet_id=${outletId}&product_id=${productId}`);
    }, [userId, productId, router]);

    return (
        <DefaultLoader/>
    );
};

export default RefProduct;
