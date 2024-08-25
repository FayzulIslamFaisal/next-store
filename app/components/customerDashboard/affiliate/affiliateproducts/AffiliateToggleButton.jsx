"use client";

import { FaTableCells } from "react-icons/fa6";
import { FaList } from "react-icons/fa";

const AffiliateToggleButton = ({ handleToggle, isGridView }) => {
    return (
        <>
            <div className="btn-group grid-list-toggol-btn-group">
                <button
                    className={`btn grid-list-toggol-btn ${
                        isGridView ? "active-btn" : ""
                    }`}
                    aria-current={isGridView ? "page" : undefined}
                    onClick={() => handleToggle("grid")}
                >
                    <FaTableCells />
                </button>
                <button
                    className={`btn grid-list-toggol-btn ${
                        !isGridView ? "active-btn" : ""
                    }`}
                    aria-current={!isGridView ? "page" : undefined}
                    onClick={() => handleToggle("list")}
                >
                    <FaList />
                </button>
            </div>
        </>
    );
};

export default AffiliateToggleButton;
