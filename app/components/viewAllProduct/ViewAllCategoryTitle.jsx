import FlipClock from "../FlipClock"

const ViewAllCategoryTitle = ({ title, isFlashSaleTimer=false }) => {
    return (
        <div className="row view-all-product-title">
            <div className="col-md-12 ">
                <div className={`view-all-product-title-box d-flex align-items-center ${isFlashSaleTimer ? "justify-content-between" : "justify-content-center"}`}>
                    <h2>{title}</h2>
                    {
                        isFlashSaleTimer&& (<FlipClock endsAt={`2024-06-25 12:00`}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewAllCategoryTitle