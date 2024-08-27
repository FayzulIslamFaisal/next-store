import Image from "next/image"
import { FaRegStar, FaStar } from "react-icons/fa6"

const ProductDetailsContent = () => {
  return (
    <>
      <div class="product-details-content">
            <h1>Pilot Metropolitan Ballpoint Pen</h1>
            <div class="product-details-rating-area d-flex align-items-center justify-content-between flex-wrap">
              <div class="product-details-rating-item d-flex">
                <div class="rating-star d-flex text-warning">
                  <div class="rating-star-image">
                    <FaStar />
                  </div>
                  <div class="rating-star-image">
                    <FaStar />
                  </div>
                  <div class="rating-star-image">
                    <FaStar />
                  </div>
                  <div class="rating-star-image">
                    <FaStar />
                  </div>
                  <div class="rating-star-image">
                  <FaRegStar />
                  </div>
                </div>
                <div class="rating-star">
                  <p>10 Ratings</p>
                </div>
              </div>
              <div class="product-details-rating-item d-flex align-items-center">
                <div class="product-Sold-img">
                  <Image alt="sold" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="img-fluid" src="/images/sold.svg" style="color: transparent;" />
                </div>
                <div class="product-Sold">
                  <p>415 Sold</p>
                </div>
              </div>
              <div class="product-details-rating-item d-flex align-items-center">
                <div class="product-Sold-img">
                  <Image alt="Viewe image" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="img-fluid" src="/images/product-view.svg" style="color: transparent;" />
                </div>
                <div class="product-Sold">
                  <p>50 Viewed</p>
                </div>
              </div>
            </div>
            <div class="product-details-price-area d-flex align-items-center">
              <strong>
                <span>৳</span>
                442
              </strong>
              <del>৳ 562.00</del>
            </div>
            <div class="product-short-description-area">
              <div>
                <p>
                  <span>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                  </span>
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProductDetailsContent
