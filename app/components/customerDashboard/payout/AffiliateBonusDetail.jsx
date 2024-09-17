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
                                <tr key={index}>
                                    <td className="align-middle text-center">
                                        {index + 1}
                                    </td>

                                    <td className="align-middle text-center">
                                        {item?.date_time}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.earning}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.user_name}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.invoice}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.level}
                                    </td>
                                    <td className="align-middle text-center">
                                        {item?.purpose}
                                    </td>
                                </tr>
                            );
                        })}

                        <tr>
                            <td className="align-middle text-center"></td>

                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center">
                                {affiliateBonusResult?.total_earning > 0 && (
                                    <strong>
                                        Total : ৳{" "}
                                        {Number(
                                            affiliateBonusResult.total_earning
                                        ).toFixed(2)}
                                    </strong>
                                )}
                            </td>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center"></td>
                            <td className="align-middle text-center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="ps-4">Showing 0 to 0 of 0 entries </p>
            <p className="ps-4">pagination</p>
        </>
    );
};

export default AffiliateBonusDetail;
