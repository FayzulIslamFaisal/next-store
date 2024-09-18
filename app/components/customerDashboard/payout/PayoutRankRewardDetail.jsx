import { FaSearch } from "react-icons/fa";

const PayoutRankRewardDetail = ({ rankRewardData, rankRewardResult }) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Date/Time</th>
                            <th scope="col">Rank & reward</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankRewardData?.map((item, index) => {
                            return (
                                <tr key={item?.id || index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{item?.date_time || "N/A"}</td>
                                    <td>{item?.purpose || "N/A"} </td>
                                    <td> ৳ {item?.earning || "0"} </td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td colSpan={3} scope="row"></td>
                            <td>
                                {rankRewardResult?.total_earning > 0 && (
                                    <strong>
                                        ৳ {rankRewardResult?.total_earning}
                                    </strong>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PayoutRankRewardDetail;
