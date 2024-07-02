import { getFlashSlaeShowOnHomePage } from "@/app/services/getFlashSlaeShowOnHomePage"
import FlipClock from "../FlipClock"

const ViewAllCategoryTitle = async ({ title, isFlashSaleTimer=false }) => {
    const flashSaleInfo = await getFlashSlaeShowOnHomePage();
    const flashSaleInfoResults = flashSaleInfo?.results;
    const flashSaleInfoEndTime = flashSaleInfoResults?.end_time
    return (
        <div className="row view-all-product-title">
            <div className="col-md-12 ">
                <div className={`view-all-product-title-box d-flex align-items-center ${isFlashSaleTimer ? "justify-content-between" : "justify-content-center"}`}>
                    <h2>{title}</h2>
                    {
                        isFlashSaleTimer&& title === "Flash Sale" && flashSaleInfoEndTime && (<FlipClock endsAt={flashSaleInfoEndTime}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewAllCategoryTitle