import Image from "next/image"
import Link from "next/link"
import CategoryProductArchiveItems from "./CategoryProductArchiveItems"

const CategoryProductArchive = ({ productArvhiveList }) => {
    return (
        <div className="product-category-grid-area">
            {
                productArvhiveList.map((productItem) => (<CategoryProductArchiveItems key={productItem.id} productItem={productItem} />))
            }
        </div>
    )
}

export default CategoryProductArchive