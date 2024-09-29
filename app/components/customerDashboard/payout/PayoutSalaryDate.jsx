const PayoutSalaryDate = () => {
    return (
        <>
            <div className="row pb-2 row-gap-2 px-3">
                <div className="col-md-4">
                    <div className="px-3 rounded py-2 border">
                        <p>
                            Activity Date: <strong>Jun 08, 2024</strong>
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="px-3 rounded py-2 border">
                        <p>
                            End Date: <strong>July 08, 2024</strong>
                        </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="px-3 rounded py-2 border">
                        <p>
                            Next Salary: <strong> 5000 taka</strong>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayoutSalaryDate;
