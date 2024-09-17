const GenerationBonusDetail = ({
    generationBonusData,
    generationBonusResult,
}) => {
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
                                Level
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {generationBonusData?.map((item, index) => (
                            <tr key={item.id}>
                                <td className="align-middle text-center">
                                    {index + 1}
                                </td>
                                <td className="align-middle text-center">
                                    {item?.date_time || "N/A"}
                                </td>
                                <td className="align-middle text-center">
                                    {item?.earning || "N / A"}
                                </td>
                                <td className="align-middle text-center">
                                    {item?.user_name || "Unknown"}
                                </td>
                                <td className="align-middle text-center">
                                    {item?.level || "N/A"}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td
                                colSpan={2}
                                className="align-middle text-center"
                            ></td>
                            <td colSpan={3} className="align-middle ">
                                {generationBonusResult?.total_earning > 0 && (
                                    <strong>
                                        Total: ৳{" "}
                                        {generationBonusResult?.total_earning}
                                    </strong>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className="ps-4">
                Showing{" "}
                {generationBonusResult?.current_page
                    ? generationBonusResult?.current_page
                    : 0}
                to{" "}
                {generationBonusResult?.last_page
                    ? generationBonusResult?.last_page
                    : 0}{" "}
                of{" "}
                {generationBonusResult?.total_page_count
                    ? generationBonusResult?.total_page_count
                    : 0}{" "}
                entries{" "}
            </p>
            <p className="ps-4">pagination</p>
        </>
    );
};

export default GenerationBonusDetail;
