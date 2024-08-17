import { FaCircleCheck } from "react-icons/fa6";
import { FaBan } from "react-icons/fa";

const MyTeamList = () => {
    return (
        <>
            <div class="table-responsive">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Ranks</th>
                            <th scope="col">Username</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Sponsor</th>
                            <th scope="col">Resell</th>
                            <th scope="col">Retail</th>
                            <th scope="col">Totel Refer</th>
                            <th scope="col">Members {">"} </th>
                            <th scope="col">User Type</th>
                            <th scope="col">KYC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td>0130000000</td>
                            <td>xyz</td>
                            <td> </td>
                            <td>10</td>
                            <td>20</td>
                            <td>4</td>
                            <td>2</td>
                            <td>User</td>
                            <td className="paid">
                                {/* <i className="fa-solid fa-circle-check"></i> */}
                                <FaCircleCheck />
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">2</td>
                            <td>0130000000</td>
                            <td>xyz</td>
                            <td> </td>
                            <td>10</td>
                            <td>20</td>
                            <td>4</td>
                            <td>2</td>
                            <td>User</td>
                            <td className="text-danger">
                                <FaBan />
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">3</td>
                            <td>0130000000</td>
                            <td>xyz</td>
                            <td> </td>
                            <td>10</td>
                            <td>20</td>
                            <td>4</td>
                            <td>2</td>
                            <td>User</td>
                            <td className="paid">
                                {/* <i className="fa-solid fa-circle-check"></i>
                                 */}
                                <FaCircleCheck />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyTeamList;
