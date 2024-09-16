import { FaSearch } from "react-icons/fa";

const ResaleBonusDetail = () => {
    return (
        <>
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

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">
                                SL
                            </th>
                            <th scope="col" className="text-center">
                                Date/Time
                            </th>
                            <th scope="col" className="text-center">
                                Amount
                            </th>
                            <th scope="col" className="text-center">
                                User
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle text-center">1</td>

                            <td className="align-middle text-center">
                                16/09/2024
                            </td>
                            <td className="align-middle text-center">50000</td>
                            <td className="align-middle text-center">Hamid</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-center">2</td>

                            <td className="align-middle text-center">
                                16/09/2024
                            </td>
                            <td className="align-middle text-center">50000</td>
                            <td className="align-middle text-center">Kamal</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-center">3</td>

                            <td className="align-middle text-center">
                                16/09/2024
                            </td>
                            <td className="align-middle text-center">50000</td>
                            <td className="align-middle text-center">Jamal</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-center">4</td>

                            <td className="align-middle text-center">
                                16/09/2024
                            </td>
                            <td className="align-middle text-center">50000</td>
                            <td className="align-middle text-center">Akmal</td>
                        </tr>
                        <tr>
                            <td className="align-middle text-center">5</td>

                            <td className="align-middle text-center">
                                16/09/2024
                            </td>
                            <td className="align-middle text-center">50000</td>
                            <td className="align-middle text-center">Nurul</td>
                        </tr>

                        <tr>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center">
                                <strong>Total : ৳ 50000</strong>
                            </td>
                            <td className="align-middle text-center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pt-5 ">
                <p className="ps-4">Showing 0 to 0 of 0 entries </p>
                <p className="ps-4">pagination</p>
            </div>
        </>
    );
};

export default ResaleBonusDetail;
