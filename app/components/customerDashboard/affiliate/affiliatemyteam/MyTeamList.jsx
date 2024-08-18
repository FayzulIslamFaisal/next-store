import { FaCircleCheck } from "react-icons/fa6";
import { FaBan } from "react-icons/fa";

const MyTeamList = ({ teamListInfo }) => {
    // Filter members based on the conditions
    const generalMembers = teamListInfo.filter(
        (member) =>
            member.affiliate_user_status === "General" &&
            member.affiliate_user === null
    );
    const affiliateMembers = teamListInfo.filter(
        (member) =>
            member.affiliate_user_status === "Affiliate" &&
            member.affiliate_user !== null
    );
    console.log("generalMembers", generalMembers);

    console.log("affiliateMembers", affiliateMembers);

    // Combine both lists: show general members first, then affiliate members
    const displayMembers = [...generalMembers, ...affiliateMembers];

    console.log(displayMembers);

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Ranks</th>
                        <th scope="col">Username</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Sponsor</th>
                        <th scope="col">Resell</th>
                        <th scope="col">Retail</th>
                        <th scope="col">Total Refer</th>
                        <th scope="col">Members {">"}</th>
                        <th scope="col">User Type</th>
                        <th scope="col">KYC</th>
                    </tr>
                </thead>
                <tbody>
                    {displayMembers.map((member, index) => (
                        <tr key={member.id}>
                            <td scope="row">{index + 1}</td>
                            <td>{member.user_name}</td>
                            <td>{member.name}</td>
                            <td>{member.affiliate_user?.sponsor || ""}</td>
                            <td>
                                {member.affiliate_user?.total_resell_amount ||
                                    0}
                            </td>
                            <td>
                                {member.affiliate_user?.total_retail_amount ||
                                    0}
                            </td>
                            <td>{member.affiliate_user?.refer_count || 0}</td>
                            <td>
                                {member.affiliate_user?.total_team_members || 0}
                            </td>
                            <td>{member.affiliate_user_status}</td>
                            <td
                                className={
                                    member.status === 1 ? "paid" : "text-danger"
                                }
                            >
                                {member.status === 1 ? (
                                    <FaCircleCheck />
                                ) : (
                                    <FaBan />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyTeamList;
