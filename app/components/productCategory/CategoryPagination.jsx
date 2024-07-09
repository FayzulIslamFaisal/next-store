'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Pagination from "./Pagination";

const CategoryPagination = ({ lastPage, currentPage }) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const handlePageChange = (page) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', page);
        const newUrl = `${window.location.pathname}?${newParams.toString()}`;
        router.push(newUrl);
        console.log(newUrl);
    };

    return (
        <Pagination 
            currentPage={currentPage}
            lastPage={lastPage}
            onPageChange={handlePageChange}
        />
    );
};

export default CategoryPagination;
