'use client';
import Link from "next/link";

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const createPageLinks = () => {
        let pages = [];
        for (let i = 1; i <= lastPage; i++) {
            pages.push(
                <li key={i} className={`page-item ${i == currentPage ? "active" : ""}`}>
                    <Link href={`?page=${i}`} passHref>
                        <p className="page-link" onClick={() => onPageChange(i)}>
                            {i}
                        </p>
                    </Link>
                </li>
            );
        }
        return pages;
    };

    return (
        <div className="product-category-pagination-col">
            <nav aria-label="Page navigation example">
                <ul className="pagination align-items-center">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <Link href={`?page=${currentPage - 1}`} passHref>
                            <p className="page-link" aria-label="Previous" >
                                <span aria-hidden="true">&#60;</span>
                            </p>
                        </Link>
                    </li>
                    {createPageLinks()}
                    <li className={`page-item ${currentPage === lastPage ? 'disabled' : ""}`}>
                        <Link href={`?page=${currentPage + 1}`} passHref>
                            <p className="page-link" aria-label="Next" >
                                <span aria-hidden="true">&#62;</span>
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
