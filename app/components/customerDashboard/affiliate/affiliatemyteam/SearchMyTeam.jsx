"use client";
import { useEffect, useState } from "react";

const SearchMyTeam = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchInput.toLowerCase());
    };

    useEffect(() => {
        if (!searchInput) {
            onSearch("");
        }
    }, [searchInput, onSearch]);
    return (
        <>
            <form
                className="row justify-content-end pt-4 px-4 m-0"
                onSubmit={handleSubmit}
            >
                <div className="col-md-6 d-flex gap-2 align-items-center">
                    <input
                        type="search"
                        name="search"
                        className="form-control"
                        id="search"
                        placeholder="Search by name/phone number"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="add-to-cart-link border-0">
                        Search
                    </button>
                </div>
            </form>
        </>
    );
};

export default SearchMyTeam;
