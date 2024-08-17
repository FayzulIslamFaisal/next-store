const SearchMyTeam = () => {
    return (
        <>
            <form className="row justify-content-end pt-4 px-4 m-0" action="">
                <div className="col-md-6 d-flex gap-2 align-items-center">
                    <input
                        type="text"
                        name="search"
                        className="form-control"
                        id="search"
                        placeholder="Search by name/phone number"
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
