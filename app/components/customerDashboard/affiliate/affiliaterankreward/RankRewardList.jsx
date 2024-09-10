const RankRewardList = () => {
    return (
        <>
            <div className=" table-responsive">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Ranks</th>
                            <th scope="col" className="text-center">
                                Icon
                            </th>
                            <th scope="col" className="text-center">
                                Title
                            </th>
                            <th scope="col" className="text-center">
                                Total Sales
                            </th>
                            <th scope="col" className="text-center">
                                Direct Sales
                            </th>
                            <th scope="col" className="text-center">
                                1st Highest Sales
                            </th>
                            <th scope="col" className="text-center">
                                2nd Highest Sales
                            </th>
                            <th scope="col" className="text-center">
                                Others Sales
                            </th>
                            <th scope="col" className="text-center">
                                Rewards
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="align-middle" scope="row">
                                1
                            </td>
                            <td className="align-middle text-center">
                                <img
                                    src="/images/men (1).png"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                    }}
                                    alt="men (1).png"
                                />
                            </td>
                            <td className="align-middle text-center">
                                Executive
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 200000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 100000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 300000{" "}
                            </td>
                            <td className="align-middle text-center">
                                <button className="add-to-cart-link affiliate-rank-btn ">
                                    Rank Not Achieved
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle" scope="row">
                                2
                            </td>
                            <td className="align-middle text-center">
                                <img
                                    src="/images/men (2).png"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                    }}
                                    alt="men (2).png"
                                />
                            </td>
                            <td className="align-middle text-center">
                                Senior Executive
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000
                            </td>
                            <td className="align-middle text-center">
                                0 | 200000
                            </td>
                            <td className="align-middle text-center">
                                0 | 100000
                            </td>
                            <td className="align-middle text-center">
                                0 | 300000
                            </td>
                            <td className="align-middle text-center">
                                <button className="add-to-cart-link affiliate-rank-btn ">
                                    Rank Not Achieved
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle" scope="row">
                                3
                            </td>
                            <td className="align-middle text-center">
                                <img
                                    src="/images/men (3).png"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                    }}
                                    alt="men (3).png"
                                />
                            </td>
                            <td className="align-middle text-center">
                                Area Manager
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 500000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 200000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 100000{" "}
                            </td>
                            <td className="align-middle text-center">
                                0 | 300000{" "}
                            </td>
                            <td className="align-middle text-center">
                                <button className="add-to-cart-link affiliate-rank-btn ">
                                    Rank Not Achieved
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RankRewardList;
