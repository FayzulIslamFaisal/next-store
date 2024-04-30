import Image from "next/image"
import StarRatingItems from "./StarRatingItems"

const StarRating = ({ ratingImg, ratingCount }) => {
    return (
        <div className="category-product-rating d-flex align-items-center">
            <div className="category-product-rating-item d-flex align-items-center">
                {
                    ratingImg.map((item, index) => (<StarRatingItems ratingItem={item} key={index} />))
                }

            </div>
            <span>({ratingCount})</span>
        </div>
    )
}

export default StarRating