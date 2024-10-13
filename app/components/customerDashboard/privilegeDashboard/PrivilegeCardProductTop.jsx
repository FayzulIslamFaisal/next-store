const PrivilegeCardProductTop = () => {
    return (
        <>
            <div className="row pt-4 pb-4 px-4">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-end gap-2">
                        <div className="">
                            <input
                                type="seach"
                                className="form-control"
                                placeholder="Search Product"
                            />
                        </div>
                        <div className="">
                            <select className="form-select">
                                <option value="0">Categories</option>
                                <option value="180">Food &amp; Beverage</option>
                                <option value="209">Daily Needs</option>
                                <option value="254">Daily Foods</option>
                                <option value="265">Food</option>
                                <option value="279">Masala</option>
                                <option value="289">Noodles</option>
                                <option value="337">Soups</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivilegeCardProductTop;
