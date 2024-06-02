"use client";

import Image from "next/image";
import AddToCartButton from "../AddToCartButton";
import { useEffect, useState } from "react";
import { existingIndex } from "@/app/utils";

const ProductInformetion = ({ productInfo }) => {
  const [productAllVariants, setProductAllVariants] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [unselected, setUnselected] = useState([]);
  const [decorateVariation, setDecorateVariation] = useState([]);
  const [variantProductInfo, setVariantProductInfo] = useState({});
  const [variationsInfo, setVariationsInfo] = useState([]);

  useEffect(() => {
    updateProductInitialVariations();
  }, [productInfo]);

  //// This function finds a variant and updates the productAllVariants with the selected and selectable variants.

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

        const existingAttributeIndex = existingIndex(
          updatedProductAllVariants,
          attribute.name
        );

        // console.log(updatedProductAllVariants);

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

  // this handler get the value when user select the variations and change the selected,selectable. set the value error.
  const handleVariations = (variantValue, name) => {
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

  // this function return the sleeted variant
  const getAvailableVariants = () => {
    return productAllVariants?.reduce((acc, curr) => {
      curr?.variants?.forEach((variant) => {
        if (variant.selected) {
          acc.push({ [curr.name]: variant.value });
        }
      });
      return acc;
    }, []);
  };

  useEffect(() => {
    setSelectedVariants(getAvailableVariants());
  }, [productAllVariants]);

  console.log(selectedVariants);

  // return not selected variant name
  const findNotSelectedVariants = () => {
    const selectedVariantKeys = selectedVariants.flatMap((selectedVariant) =>
      Object.keys(selectedVariant)
    );
    return productAllVariants
      .filter((item) => !selectedVariantKeys.includes(item.name))
      .map((item) => item.name);
  };

  useEffect(() => {
    const notSelectedVariants = findNotSelectedVariants();
    setUnselected(notSelectedVariants);
  }, [selectedVariants]);

  //this function return the unselected variant
  const notSelectedVariantFalse = () => {
    unselected.forEach((name) => {
      productAllVariants.forEach((item) => {
        if (item.name == name) {
          item.variants.forEach((variant) => {
            variant.selectAble = false;
          });
        }
      });
    });
  };

  const updateVariantSelectAbility = (name, value, isSelectable) => {
    productAllVariants.forEach((item) => {
      if (item.name == name) {
        item.variants.forEach((variant) => {
          if (variant.value == value) {
            variant.selectAble = isSelectable;
          }
        });
      }
    });
  };

  const updateVariantNameSelectAbility = (name, isSelectable) => {
    productAllVariants.forEach((item) => {
      if (item.name == name) {
        item.variants.forEach((variant) => {
          variant.selectAble = isSelectable;
        });
      }
    });
  };

  function filterBySelected(arr, selected) {
    return arr.filter((item) => {
      return selected.every((sel) => {
        const selKey = Object.keys(sel)[0];
        return item?.hasOwnProperty(selKey) && item[selKey] === sel[selKey];
      });
    });
  }
  const getColorBySize = (
    size,
    checkVariantName,
    outPutValue,
    productObject
  ) => {
    let matchVariant = new Set();
    let unmatchedValues = new Set();

    productObject.forEach((variant) => {
      if (variant[checkVariantName] === size) {
        matchVariant.add(variant[outPutValue]);
      } else if (
        !productObject.some(
          (item) =>
            item[outPutValue] === variant[outPutValue] &&
            item[checkVariantName] === size
        )
      ) {
        unmatchedValues.add(variant[outPutValue]);
      }
    });

    return {
      matched: Array.from(matchVariant),
      unmatched: Array.from(unmatchedValues),
    };
  };

  const getDifference = (selected, enable) => {
    const selectedProperties = selected.flatMap(Object.keys);
    return enable.map((obj) =>
      Object.fromEntries(
        Object.entries(obj).filter(([key]) => !selectedProperties.includes(key))
      )
    );
  };

  useEffect(() => {
    const decorateProductVariation = productInfo?.variations?.map((item) => ({
      variation_size: item.variation_size ? item.variation_size.title : null,
      variation_color: item.variation_color ? item.variation_color.title : null,
      variation_weight: item.variation_weight
        ? item.variation_weight.title
        : null,
    }));
    setDecorateVariation(decorateProductVariation);
  }, [productInfo]);
  const availableVariantTrue = () => {
    const selectedVariantKeys = selectedVariants.flatMap((selectedVariant) =>
      Object.keys(selectedVariant)
    );
    const arr = [];
    console.log("selectedVariants", selectedVariants);
    console.log("selectedVariantKeys", selectedVariantKeys);
    console.log("decorateVariation", decorateVariation);
    selectedVariantKeys.map((selectedKey) => {
      selectedVariants?.map((selectedVariantObject) => {
        decorateVariation.map((availableVariant, index) => {
          if (selectedVariants.length == 1) {
            if (
              availableVariant[selectedKey] ===
                selectedVariantObject[selectedKey] &&
              !arr.includes(availableVariant)
            ) {
              arr.push(decorateVariation[index]);
            }
          }
          if (selectedVariants.length > 1) {
            if (
              availableVariant[selectedKey] ===
                selectedVariantObject[selectedKey] &&
              !arr.includes(availableVariant)
            ) {
              arr.push(decorateVariation[index]);
            }
          }
        });
      });
    });

    if (arr.length > 0) {
      if (selectedVariants.length == 1) {
        updateVariantNameSelectAbility(selectedVariantKeys[0], true);
        arr.map((enableVariant) => {
          console.log("enableVariant", enableVariant);
          const enableVariantKey = Object.keys(enableVariant);
          console.log("enableVariantKey", enableVariantKey);
          enableVariantKey.map((enableVariantName) => {
            updateVariantSelectAbility(
              enableVariantName,
              enableVariant[enableVariantName],
              true
            );
          });
        });
      }
      if (selectedVariants.length > 1) {
        console.log("**************");
        selectedVariantKeys?.map((selectedKey) => {
          selectedVariants?.map((selectedVariantObject, index) => {
            if (index == 0) {
              const checkVariantValue = selectedVariantObject[selectedKey];
              const checkVariantName = selectedKey;
              const outPutValue = selectedVariantKeys[1];
              const size = getColorBySize(
                checkVariantValue,
                checkVariantName,
                outPutValue,
                decorateVariation
              );
              console.log("size", size);
              if (size.matched.length) {
                size?.matched.map((enableVariantItem) => {
                  updateVariantSelectAbility(
                    outPutValue,
                    enableVariantItem,
                    true
                  );
                });
              }
            }
            if (index == 1) {
              const checkVariantValue = selectedVariantObject[selectedKey];
              const checkVariantName = selectedKey;
              const outPutValue = selectedVariantKeys[0];
              const color = getColorBySize(
                checkVariantValue,
                checkVariantName,
                outPutValue,
                decorateVariation
              );
              color?.matched.map((enableVariantItem) => {
                updateVariantSelectAbility(
                  outPutValue,
                  enableVariantItem,
                  true
                );
              });

              color?.unmatched.map((enableVariantItem) => {
                updateVariantSelectAbility(
                  outPutValue,
                  enableVariantItem,
                  false
                );
              });
            }
          });
        });

        /*  const enableVariants = filterBySelected(arr, selectedVariants);
        const difference = getDifference(selectedVariants, enableVariants);
        // setMatchOtherVariant(difference);
        const selectedVariantInfo = filterBySelected(
          variationsInfo,
          selectedVariants
        );

        if (selectedVariantInfo) {
          setVariantProductInfo(selectedVariantInfo[0]);
        } */
      }
    } else {
      productAllVariants.forEach((allVariantItem) => {
        allVariantItem.variants.forEach((variant) => {
          variant.selectAble = true;
        });
      });
    }
  };

  useEffect(() => {
    notSelectedVariantFalse();
    availableVariantTrue();
  }, [selectedVariants]);

  console.log(decorateVariation);
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
            {productInfo?.price?.original?.results?.discounted_price !== 0
              ? productInfo?.price?.original?.results?.discounted_price
              : productInfo?.price?.original?.results?.regular_price}
          </strong>
          <del>
            {productInfo?.price?.original?.results?.discounted_price > 0 &&
              `৳ ${productInfo?.price?.original?.results?.regular_price}`}
          </del>
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
                    {item?.name === "variation_size" && (
                      <>
                        <div className="product-details-variant-holder d-flex align-items-center">
                          <p>Size:</p>
                          {item?.variants?.map((variant, inx) =>
                            variant.selectAble ? (
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
                            ) : (
                              <div
                                key={inx}
                                className={`product-details-variant-item`}
                                style={{
                                  border: "2px solid #7B7B7B",
                                  cursor: "not-allowed",
                                  opacity: 0.3,
                                }}
                              >
                                <label>{variant?.value}</label>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="product-details-variant-area">
              <div className="d-flex align-items-center">
                {productAllVariants?.map((item, index) => (
                  <div key={index}>
                    {item?.name === "variation_color" && (
                      <>
                        <div className="product-details-variant-holder d-flex align-items-center">
                          <p className="variantName">Color</p>
                          {item?.variants?.map((variant, inx) =>
                            variant.selectAble ? (
                              <div
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
                            ) : (
                              <div
                                className="product-details-inner-color product-details-variant-item"
                                style={{
                                  border: "2px solid #7B7B7B",
                                  background: variant?.value.toLowerCase(),
                                  cursor: "not-allowed",
                                  opacity: 0.3,
                                }}
                              ></div>
                            )
                          )}
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
