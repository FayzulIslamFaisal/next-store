"use client";

import Image from "next/image";
import AddToCartButton from "../AddToCartButton";
import { useEffect, useState } from "react";

const ProductInformetion = ({ productInfo }) => {
  const [productAllVariants, setProductAllVariants] = useState([]);
  useEffect(() => {
    updateProductInitialVariations();
  }, [productInfo]);

  const updateProductInitialVariations = () => {
    const variants = productInfo?.variations;
    const updatedProductAllVariants = [];
    variants?.forEach((variant) => {
      // Create an array of attributes to simplify the loop
      const attributes = [
        { name: "variation_size", value: variant.variation_size?.title },
        { name: "variation_color", value: variant.variation_color?.title },
        { name: "variation_weight", value: variant.variation_weight?.title },
      ];

      attributes.forEach((attribute) => {
        if (!attribute.value) return; // Skip if the attribute value is null or undefined

        const existingAttributeIndex = updatedProductAllVariants?.findIndex(
          (item) => item.name === attribute.name
        );

        if (existingAttributeIndex === -1) {
          updatedProductAllVariants.push({
            name: attribute.name,
            variants: [
              {
                value: attribute.value,
                selectAble: true,
                selected: false,
              },
            ],
          });
        } else {
          const existingValueIndex = updatedProductAllVariants[
            existingAttributeIndex
          ].variants?.findIndex((item) => item.value === attribute.value);
          if (existingValueIndex === -1) {
            updatedProductAllVariants[existingAttributeIndex]?.variants?.push({
              value: attribute.value,
              selectAble: true,
              selected: false,
            });
          }
        }
      });
    });
    setProductAllVariants(updatedProductAllVariants);
  };
  const handleVariations = (variantValue, name) => {
    console.log(variantValue, name);
    setProductAllVariants((prevProductAllVariants) => {
      const updatedProductAllVariants = prevProductAllVariants.map((item) => {
        if (item.name === name && Array.isArray(item.variants)) {
          return {
            ...item,
            error: false,
            variants: item?.variants?.map((variantItem) => ({
              ...variantItem,
              selected:
                variantItem.value === variantValue
                  ? !variantItem.selected
                  : false,
            })),
          };
        }
        return item;
      });
      return updatedProductAllVariants;
    });
  };
  console.log(productAllVariants);

  return (
    <div className="col-md-6">
      <div className="product-details-content">
        <h1>{productInfo?.product_name}</h1>
        <div className="product-details-rating-area d-flex align-items-center justify-content-between flex-wrap">
          <div className="product-details-rating-item d-flex align-items-center">
            <div className="rating-star d-flex align-items-center">
              <div className="rating-star-image">
                <Image
                  className="img-fluid"
                  src="/images/Star 5.svg"
                  fill={true}
                  alt="Star"
                />
              </div>
              <div className="rating-star-image">
                <Image
                  className="img-fluid"
                  src="/images/Star 5.svg"
                  fill={true}
                  alt="Star"
                />
              </div>
              <div className="rating-star-image">
                <Image
                  className="img-fluid"
                  src="/images/Star 5.svg"
                  fill={true}
                  alt="Star"
                />
              </div>
              <div className="rating-star-image">
                <Image
                  className="img-fluid"
                  src="/images/Star 5.svg"
                  fill={true}
                  alt="Star"
                />
              </div>
              <div className="rating-star-image">
                <Image
                  className="img-fluid"
                  src="/images/Star 5.svg"
                  fill={true}
                  alt="Star"
                />
              </div>
            </div>
            <div className="rating-star">
              <p>10 Ratings</p>
            </div>
          </div>
          <div className="product-details-rating-item d-flex align-items-center">
            <div className="product-Sold-img">
              <Image
                className="img-fluid"
                src="/images/sold.svg"
                width={100}
                height={100}
                alt="sold"
              />
            </div>
            <div className="product-Sold">
              <p>415 Sold</p>
            </div>
          </div>
          <div className="product-details-rating-item d-flex align-items-center">
            <div className="product-Sold-img">
              <Image
                className="img-fluid"
                src="/images/product-view.svg"
                alt="Viewe image"
                width={100}
                height={100}
              />
            </div>
            <div className="product-Sold">
              <p>1000 Viewed</p>
            </div>
          </div>
        </div>
        <div className="product-details-price-area d-flex align-items-center">
          <strong>
            {" "}
            <span>৳</span>{" "}
            {productInfo?.price?.original?.results?.discounted_price}
          </strong>
          <del>৳ {productInfo?.price?.original?.results?.regular_price}</del>
        </div>
        <div className="product-short-description-area">
          <div
            dangerouslySetInnerHTML={{ __html: productInfo?.short_description }}
          />
          {/* <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            non eirmod tempor invidunt ut labore et dolore magna
          </p>
          <ul>
            <li>Consetetur sadip</li>
            <li>Scing elitrsed </li>
            <li>Daam nonumy</li>
            <li>Tempor invidunt</li>
          </ul> */}
        </div>

        <div className="product-info-rtk-content">
          <form>
            <div className="product-details-variant-area">
              <div className="product-details-variant d-flex align-items-center">
                {productAllVariants?.map((item, index) => (
                  <div key={index}>
                    {console.log(item.name)}
                    {item?.name === "variation_size" && (
                      <>
                        <div className="product-details-variant-holder d-flex align-items-center">
                          <p>Size:</p>
                          {item?.variants?.map((variant, inx) => (
                            <div
                              key={inx}
                              className={`product-details-variant-item ${
                                variant.selected
                                  ? "variantAttributeActive"
                                  : "variantAttributeUnitive"
                              }`}
                              onClick={() =>
                                handleVariations(variant.value, item.name)
                              }
                            >
                              <label>{variant?.value}</label>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="product-details-quantity-area d-flex align-items-center justify-content-between">
              <div className="product-details-quantity d-flex align-items-center">
                <div className="product-details-inner-quantity d-flex align-items-center">
                  <p>Quantity:</p>
                </div>
                <div className="product-details-inner-quantity product-details-inner-qty d-flex align-items-center">
                  <button>-</button>
                  <input readOnly type="text" value="1" />
                  <button>+</button>
                </div>
              </div>
              <div className="product-details-quantity d-flex align-items-center">
                {productAllVariants?.map((item, index) => (
                  <div key={index}>
                    {console.log(item.name)}
                    {item?.name === "variation_color" && (
                      <>
                        <div className="product-details-variant-holder d-flex align-items-center">
                          <p>Color</p>
                          {item?.variants?.map((variant, inx) => (
                            <div
                              key={inx}
                              className="product-details-inner-color product-details-variant-item"
                              onClick={() =>
                                handleVariations(variant.value, item.name)
                              }
                              style={{
                                border: variant.selected
                                  ? "3px solid #44bc9d "
                                  : "",
                                background: variant?.value.toLowerCase(),
                              }}
                            ></div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}

                {/*  <p>Color</p>
                <div className="product-details-inner-quantity d-flex align-items-center">

                  <div
                    className="product-details-inner-color product-details-variant-item"
                    style={{ background: "#BBB5FF" }}
                  >
                    <input
                      readOnly
                      type="radio"
                      name="color"
                      id="color-variant1"
                    />
                    <label htmlFor="color-variant1"></label>
                  </div>
                  <div
                    className="product-details-inner-color product-details-variant-item"
                    style={{ background: "#FF0000" }}
                  >
                    <input
                      readOnly
                      type="radio"
                      name="color"
                      id="color-variant2"
                    />
                    <label htmlFor="color-variant2"></label>
                  </div>
                  <div
                    className="product-details-inner-color product-details-variant-item"
                    style={{ background: "#1400FF" }}
                  >
                    <input
                      readOnly
                      type="radio"
                      name="color"
                      id="color-variant3"
                    />
                    <label htmlFor="color-variant3"></label>
                  </div>
                  <div
                    className="product-details-inner-color product-details-variant-item"
                    style={{ background: "#32D118" }}
                  >
                    <input
                      readOnly
                      type="radio"
                      name="color"
                      id="color-variant4"
                    />
                    <label htmlFor="color-variant4"></label>
                  </div>

                </div> */}
              </div>
            </div>
            <div className="product-details-add-cart-area d-flex align-items-center">
              <div className="product-details-add-cart">
                <AddToCartButton
                  title="BUY NOW"
                  buyNowBtn="product-details-action-btn"
                />
              </div>
              <div className="product-details-add-cart">
                <AddToCartButton buyNowBtn="product-details-action-btn" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductInformetion;
