"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DefaultLoader from '@/app/components/defaultloader/DefaultLoader';

const RefProduct = ({ params }) => {
    const { refId } = params;
    const [userId, productId, outletId] = refId;
    const router = useRouter();

    useEffect(() => {
        // Set userId and productId in localStorage
        localStorage.setItem('referrerID', userId);
        localStorage.setItem('referrerProduct', productId);

        // Redirect to the specified route
        router.push(`/products/get-product-details?outlet_id=${outletId}&product_id=${productId}`);
    }, [userId, productId, router]);

    return (
        <DefaultLoader/>
    );
};

export default RefProduct;
