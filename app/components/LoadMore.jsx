import Link from "next/link";
import React from "react";

function LoadMore({ onLoadMore }) {
    return (
        <div className="row load-more-btn-row">
            <div className="col-md-12">
                <div className="load-more-btn-area text-center text-uppercase">
                    <Link
                        href="#"
                        className="load-more-btn"
                        onClick={(e) => onLoadMore(e)}
                    >
                        Load more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoadMore;
