const FilterCategories = () => {
    return (
        <div>
            <div className="d-flex align-items-center pb-4">
                <label
                    htmlFor="category"
                    className=" rounded-2 px-4 py-2 bg-success text-white border-2 border-secondary btn-outline-light fs-6"
                >
                    Filter
                </label>
                <select
                    className="form-select py-2 border-1 btn-outline-light focus-ring focus-ring-light"
                    id="category"
                    defaultValue="" 
                >
                    <option value="" disabled>
                        Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    );
};

export default FilterCategories;
