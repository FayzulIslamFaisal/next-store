import Image from "next/image";

const StarRatingItems = ({ ratingItem }) => {
    return (
        <>
            <div className="category-product-rating-img">
                <Image src={ratingItem.img} width={13} height={13} alt={ratingItem.altText} />
            </div>
        </>
    )
}

export default StarRatingItems