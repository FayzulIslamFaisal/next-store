"use client";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ currentPage, lastPage}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    if (lastPage ==1) {
        return
    }

    const handlePageChange = (page) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', page);
        const newUrl = `${window.location.pathname}?${newParams.toString()}`;
        router.push(newUrl);
    };

    const createPageLinks = () => {
        let pages = [];
        for (let i = 1; i <= lastPage; i++) {
            pages.push(
                <li
                    key={i}
                    className={`page-item ${i == currentPage ? "active" : ""}`}
                >
                    <p className="page-link" onClick={() => handlePageChange(i)}>
                        {i}
                    </p>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="product-category-pagination-col d-flex justify-content-center align-items-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination align-items-center">
                    <li
                        className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <p
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">&#60;</span>
                        </p>
                    </li>
                    {createPageLinks()}
                    <li
                        className={`page-item ${
                            currentPage === lastPage ? "disabled" : ""
                        }`}
                    >
                        <p
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                            aria-label="Next"
                        >
                            <span aria-hidden="true">&#62;</span>
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
