import { FaSearch } from "react-icons/fa";
const PayoutSalaryDetail = () => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Date/Time</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Purpose</th>
                            <th scope="col " className="text-end">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td className="text-end">৳ 400 </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td className="text-end">৳ 400 </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>24/05/2024</td>
                            <td>#1345656</td>
                            <td>Speciel Bonus</td>
                            <td className="text-end">৳ 400 </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5" className="text-end fs-5 ">
                                Total: ৳ 100
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="pt-5">
                <p className="">Showing 0 to 0 of 0 entries </p>
            </div>
        </>
    );
};

export default PayoutSalaryDetail;
