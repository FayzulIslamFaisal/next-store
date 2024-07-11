'use client';
import Link from "next/link";

const Pagination = ({ currentPage, lastPage, onPageChange }) => {
    const createPageLinks = () => {
        let pages = [];
        for (let i = 1; i <= lastPage; i++) {
            pages.push(
                <li key={i} className={`page-item ${i == currentPage ? "active" : ""}`}>

                    <p className="page-link" onClick={() => onPageChange(i)}>
                        {i}
                    </p>

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
                        <p className="page-link" onClick={() => onPageChange(currentPage - 1)} aria-label="Previous" >
                            <span aria-hidden="true">&#60;</span>
                        </p>
                    </li>
                    {createPageLinks()}
                    <li className={`page-item ${currentPage === lastPage ? 'disabled' : ""}`}>
                        <p className="page-link" onClick={() => onPageChange(currentPage + 1)} aria-label="Next" >
                            <span aria-hidden="true">&#62;</span>
                        </p>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
