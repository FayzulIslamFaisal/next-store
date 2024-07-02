import SectionTitle from "../SectionTitle";
import ProductCategories from "../ProductCategories";
import FindLooking from "./FindLooking";
import Pagination from "./Pagination";
import CategoryProductArchive from "./CategoryProductArchive";
import ShotBy from "./ShotBy";

const CategoryRightSide = ({
    categoryByProduct,
    categoryByResult,
    categoryTitle,
}) => {
    const categoryTotal = categoryByResult?.total_product;
    const categoryMainTitle = categoryTitle?.title;
    let categoryProductLength = categoryByProduct?.length;
    const featuredBrandtData = [
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 1",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 2",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 3",
            path: "#",
            title: "Women",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 4",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 5",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 6",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 7",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 8",
            path: "#",
            title: "Bedding Accessories",
        },

        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 9",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 10",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 11",
            path: "#",
            title: "Women",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 12",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 13",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 14",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 15",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageUrl: "/images/meril.svg",
            alttext: "category image 16",
            path: "#",
            title: "Bedding Accessories",
        },
    ];

    return (
        <main className="product-category-right-Side">
            <div className="category-right-Side">
                <div className="all-category-item-area d-flex align-items-center justify-content-between">
                    <div className="all-category-item">
                        {categoryTotal > 0 && categoryMainTitle.length > 0 && (
                            <p>
                                {categoryTotal} Items Found “{categoryMainTitle}
                                ”
                            </p>
                        )}
                    </div>
                    {categoryProductLength > 0 && <ShotBy />}
                </div>
                {categoryProductLength > 0 ? (
                    <CategoryProductArchive
                        productArvhiveList={categoryByProduct}
                    />
                ) : (
                    <h1 className=" text-center text-capitalize pt-5">
                        Category Product Data Not Found!!!
                    </h1>
                )}
                {categoryProductLength > 12 && (
                    <div className="row product-category-pagination-row">
                        <div className="col-md-12">
                            <div className="product-category-pagination-area d-flex flex-wrap  align-items-center justify-content-center">
                                {/* <FindLooking /> */}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                )}

                {/* <SectionTitle title={`Featured Brands`} />
        <ProductCategories
          categoryProductData={featuredBrandtData}
          isHome={false}
        /> */}
            </div>
        </main>
    );
};

export default CategoryRightSide;
