import { FaSearch } from "react-icons/fa";
const PayoutSalaryDetail = () => {
    return (
        <>
            <form className="row" action="">
                <div className=" d-flex justify-content-end px-4 py-3">
                    <div
                        className="input-group affiliate-products-search"
                        style={{ maxWidth: "250px" }}
                    >
                        <input
                            className="form-control"
                            placeholder="Search..."
                            type="search"
                            // value=""
                            name="search"
                        />
                        <button className="input-group-text" id="search">
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </form>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Date/Time</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Purpose</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td>৳ 400 </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td>৳ 400 </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td>৳ 400 </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td
                                colSpan="5"
                                className="text-end fs-5 pe-lg-5 pe-md-4 pe-0"
                            >
                                Total: ৳ 100
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default PayoutSalaryDetail;
