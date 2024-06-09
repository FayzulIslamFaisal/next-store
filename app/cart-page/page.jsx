import Image from "next/image";

const CartPage = () => {
  return (
    <section className="cart-section-area">
      <div className="container">
        <div className="row gx-4 gy-5">
          <div className="col-lg-9">
            <div className="row cart-top-area">
              <div className="col-12">
                <div className="cart-top-holder">
                  <div className="d-flex gap-3 card-top-info">
                    <input
                      className="cart-checkbox"
                      type="checkbox"
                      id="select-all"
                      name="select-all"
                    />
                    <label htmlFor="select-all">Select All</label>
                  </div>
                  <div className="cart-top-remove-btn">
                    <button>REMOVE</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row product-cart-details-area">
              <div className="col-12">
                <div className="product-cart-details-continer table-responsive">
                  <table className="table align-middle">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            className="cart-checkbox"
                            type="checkbox"
                            name="product-item"
                          />
                        </td>
                        <td>
                          <div className="product-cart-product-img">
                            <Image
                              fill
                              src="/images/primaSatgebabyFood.jpg"
                              alt="black-friday"
                            />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">
                            ৳20,000
                          </strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <div className="quantity-increase-bg">
                              <button
                                type="button"
                                className="btn quantity-increase"
                              >
                                <Image
                                  fill
                                  src="/images/minusIcon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>

                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autoComplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readOnly
                            />
                            <div className="quantity-decrease-bg">
                              <button
                                className="btn quantity-decrease"
                                type="button"
                              >
                                <Image
                                  fill
                                  src="/images/+icon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-remov-btn-bg">
                            <button className="product-cart-remov-btn">
                              <Image
                                fill
                                src="/images/trash-bin.png"
                                alt="delete"
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-like-btn-bg">
                            <button className="product-cart-like-btn">
                              <Image
                                fill
                                src="/images/heart.png"
                                alt="heart image"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="cart-checkbox"
                            type="checkbox"
                            name="product-item"
                          />
                        </td>
                        <td>
                          <div className="product-cart-product-img">
                            <Image
                              fill
                              src="/images/DanfoodVanila Muffin.jpg"
                              alt="black-friday"
                            />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">
                            ৳20,000
                          </strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <div className="quantity-increase-bg">
                              <button
                                type="button"
                                className="btn quantity-increase"
                              >
                                <Image
                                  fill
                                  src="/images/minusIcon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>

                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autoComplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readOnly
                            />
                            <div className="quantity-decrease-bg">
                              <button
                                className="btn quantity-decrease"
                                type="button"
                              >
                                <Image
                                  fill
                                  src="/images/+icon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-remov-btn-bg">
                            <button className="product-cart-remov-btn">
                              <Image
                                fill
                                src="/images/trash-bin.png"
                                alt="delete"
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-like-btn-bg">
                            <button className="product-cart-like-btn">
                              <Image
                                fill
                                src="/images/heart.png"
                                alt="heart image"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="cart-checkbox"
                            type="checkbox"
                            name="product-item"
                          />
                        </td>
                        <td>
                          <div className="product-cart-product-img">
                            <Image
                              fill
                              src="/images/Dan foodMarble cake 300 gm.jpeg"
                              alt="black-friday"
                            />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">
                            ৳20,000
                          </strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <div className="quantity-increase-bg">
                              <button
                                type="button"
                                className="btn quantity-increase"
                              >
                                <Image
                                  fill
                                  src="/images/minusIcon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>

                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autoComplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readOnly
                            />
                            <div className="quantity-decrease-bg">
                              <button
                                className="btn quantity-decrease"
                                type="button"
                              >
                                <Image
                                  fill
                                  src="/images/+icon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-remov-btn-bg">
                            <button className="product-cart-remov-btn">
                              <Image
                                fill
                                src="/images/trash-bin.png"
                                alt="delete"
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-like-btn-bg">
                            <button className="product-cart-like-btn">
                              <Image
                                fill
                                src="/images/heart.png"
                                alt="heart image"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            className="cart-checkbox"
                            type="checkbox"
                            name="product-item"
                          />
                        </td>
                        <td>
                          <div className="product-cart-product-img">
                            <Image
                              fill
                              src="/images/dan-cake-chocolate-muffin-30g-24-pieces_550.jpeg"
                              alt="black-friday"
                            />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">
                            ৳20,000
                          </strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <div className="quantity-increase-bg">
                              <button
                                type="button"
                                className="btn quantity-increase"
                              >
                                <Image
                                  fill
                                  src="/images/minusIcon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>

                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autoComplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readOnly
                            />
                            <div className="quantity-decrease-bg">
                              <button
                                className="btn quantity-decrease"
                                type="button"
                              >
                                <Image
                                  fill
                                  src="/images/+icon.png"
                                  alt="black-friday"
                                />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-remov-btn-bg">
                            <button className="product-cart-remov-btn">
                              <Image
                                fill
                                src="/images/trash-bin.png"
                                alt="delete"
                              />
                            </button>
                          </div>
                        </td>
                        <td>
                          <div className="product-cart-like-btn-bg">
                            <button className="product-cart-like-btn">
                              <Image
                                fill
                                src="/images/heart.png"
                                alt="heart image"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>

                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row promo-code-section">
              <div className="col-12">
                <div className="d-flex gap-3 align-items-center">
                  <div className="discount-code-img">
                    <Image
                      fill
                      src="/images/discount-code.png"
                      alt="discount-code"
                    />
                  </div>
                  <h3 className="promo-code-title">I Have promo code</h3>
                </div>
                <div className="promo-code-input-area">
                  <input
                    type="text"
                    name="promo"
                    className="form-control"
                    placeholder="Enter promo code"
                  />
                  <button className="add-to-cart-link border border-0">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="row shopping-section">
              <div className="col-12">
                <div className="shopping-info-area">
                  <h3 className="shopping-title">Shopping Summary</h3>
                  <div className="d-flex gap-3 align-items-center justify-content-between shopping-price-area">
                    <p className="">Total</p>
                    <strong className="">৳35,000</strong>
                  </div>
                  <button className="add-to-cart-link border border-0 w-100">
                    CHECKOUT
                  </button>
                  <a className="shopping-back-btn" href="#">
                    Back to Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
