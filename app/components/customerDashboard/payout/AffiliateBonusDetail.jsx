const AffiliateBonusDetail = ({ affiliateBonusResult, affiliateBonusData }) => {
    return (
        <>
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
                                From
                            </th>
                            <th scope="col" className="text-center">
                                Invoice
                            </th>
                            <th scope="col" className="text-center">
                                Level
                            </th>
                            <th scope="col" className="text-center">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {affiliateBonusData?.map((item, index) => {
                            return (
                                <tr key={item?.id}>
                                    <td className="align-middle text-center">
                                        {index + 1}
                                    </td>

                                    <td className="align-middle text-center">
                                        {item?.date_time || "N/A"}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.earning || "N/A"}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.user_name || "N/A"}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.invoice || "N/A"}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.level || "N/A"}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.purpose || "N/A"}
                                    </td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center"></td>
                            <td colSpan="5" className="align-middle ">
                                {affiliateBonusResult?.total_earning > 0 && (
                                    <strong>
                                        Total : ৳{" "}
                                        {Number(
                                            affiliateBonusResult.total_earning
                                        ).toFixed(2)}
                                    </strong>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="ps-4">
                Showing{" "}
                {affiliateBonusResult?.current_page
                    ? affiliateBonusResult?.current_page
                    : 0}
                to{" "}
                {affiliateBonusResult?.last_page
                    ? affiliateBonusResult?.last_page
                    : 0}{" "}
                of{" "}
                {affiliateBonusResult?.total_page_count
                    ? affiliateBonusResult?.total_page_count
                    : 0}{" "}
                entries{" "}
            </p>
            <p className="ps-4">pagination</p>
        </>
    );
};

export default AffiliateBonusDetail;
