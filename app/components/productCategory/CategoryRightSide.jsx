// import SectionTitle from "../SectionTitle";
// import ProductCategories from "../ProductCategories";
// import FindLooking from "./FindLooking";
import Pagination from "./Pagination";
import CategoryProductArchive from "./CategoryProductArchive";
import ShotBy from "./ShotBy";

const CategoryRightSide = ({
    categoryByProduct,
    categoryByResult,
    categoryTitle,
    searchParams,
}) => {
    const categoryTotal = categoryByResult?.total_product;
    const categoryMainTitle = categoryTitle?.title;
    let categoryProductLength = categoryByProduct?.length;

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
                    {categoryProductLength > 0 && <ShotBy searchParams={searchParams} categoryByProduct={categoryByProduct} />}
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
                {categoryProductLength > 16 && (
                    <div className="row product-category-pagination-row">
                        <div className="col-md-12">
                            <div className="product-category-pagination-area d-flex flex-wrap  align-items-center justify-content-center">
                                {/* <FindLooking /> */}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CategoryRightSide;
