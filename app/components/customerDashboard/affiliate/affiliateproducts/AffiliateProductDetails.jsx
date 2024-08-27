import AffiliateProductDetailsImg from "./AffiliateProductDetailsImg"
import ProductLongDescription from "@/app/components/productDetail/ProductLongDescription"
import ProductDetailsContent from "./ProductDetailsContent"


const AffiliateProductDetails = () => {
  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-6 px-5">
          <AffiliateProductDetailsImg />
        </div>
        <div className="col-lg-6">
          <ProductDetailsContent/>
        </div>
      </div>
      <div >
        <ProductLongDescription />
      </div>
    </div>
  )
}

export default AffiliateProductDetails
