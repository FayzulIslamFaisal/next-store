

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
                    <label for="select-all">Select All</label>
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
                            <img src="/images/black-friday.jpg" alt="" />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">৳20,000</strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button type="button" className="btn quantity-increase">
                              <img src="/images/-icon.png" alt="" />
                            </button>
                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autocomplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readonly
                            />
                            <button className="btn quantity-increase" type="button">
                              <img src="/images/+icon.png" alt="" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="product-cart-remov-btn">
                            <img
                              src="/images/trash-bin.png"
                              alt="delete"
                            />
                          </button>
                        </td>
                        <td>
                          <button className="product-cart-like-btn">
                            <img
                              src="/images/heart.png"
                              alt="heart image"
                            />
                          </button>
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
                            <img src="/images/black-friday.jpg" alt="" />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">৳20,000</strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button type="button" className="btn quantity-increase">
                              <img src="/images/-icon.png" alt="" />
                            </button>
                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autocomplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readonly
                            />
                            <button className="btn quantity-increase" type="button">
                              <img src="/images/+icon.png" alt="" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="product-cart-remov-btn">
                            <img
                              src="/images/trash-bin.png"
                              alt="delete"
                            />
                          </button>
                        </td>
                        <td>
                          <button className="product-cart-like-btn">
                            <img
                              src="/images/heart.png"
                              alt="heart image"
                            />
                          </button>
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
                            <img src="/images/black-friday.jpg" alt="" />
                          </div>
                        </td>
                        <td>
                          <h2 className="product-cart-text">
                            LED Monitor With High Quality In The World
                          </h2>
                          <strong className="product-cart-price">৳20,000</strong>
                        </td>

                        <td>
                          <div
                            className="btn-group quantity-area"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button type="button" className="btn quantity-increase">
                              <img src="/images/-icon.png" alt="" />
                            </button>
                            <input
                              className="quantity-fild"
                              min="1"
                              max="5"
                              step="1"
                              autocomplete="off"
                              type="text"
                              height="100%"
                              defaultValue="1"
                              readonly
                            />
                            <button className="btn quantity-increase" type="button">
                              <img src="/images/+icon.png" alt="" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="product-cart-remov-btn">
                            <img
                              src="/images/trash-bin.png"
                              alt="delete"
                            />
                          </button>
                        </td>
                        <td>
                          <button className="product-cart-like-btn">
                            <img
                              src="/images/heart.png"
                              alt="heart image"
                            />
                          </button>
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
                  <div>
                    <img src="/images/discount-code.png" alt="" />
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
                  <div
                    className="d-flex gap-3 align-items-center justify-content-between shopping-price-area"
                  >
                    <p className="">Total</p>
                    <strong className="">৳35,000</strong>
                  </div>
                  <button className="add-to-cart-link border border-0 w-100">
                    CHECKOUT
                  </button>
                  <a className="shopping-back-btn" href="#">Back to Shopping</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage