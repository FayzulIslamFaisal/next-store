import Link from "next/link";

const Pagination = ({ searchParams }) => {
    return (
        <div className="product-category-pagination-col">
            <nav aria-label="Page navigation example">
                <ul className="pagination align-items-center">
                    <li className="page-item">
                        <Link
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">&#60;</span>
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            1
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link active" href="#">
                            2
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            4
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link page-link-dotted" href="#">
                            ...
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#">
                            10
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&#62;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
