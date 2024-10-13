import Image from "next/image";

const PrivilegeProductDetailModal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="pivilegeProDetails"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">
                                Product Details
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body py-5">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 pb-md-4">
                                    <div
                                        className="w-100 position-relative"
                                        style={{ height: "400px" }}
                                    >
                                        <Image
                                            src={`/images/DanishFoodsCondensed Milk 397.g.png`}
                                            alt="image"
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="pb-3 border-bottom">
                                        <h1 className="fs-4 mb-3">
                                            Maggi Masala 620gm (8Pcs) Free 2 pcs
                                        </h1>
                                        <span className="add-to-cart-link text-capitalize rounded-5 d-inline-block ">
                                            In stock
                                        </span>
                                    </div>
                                    <ul className="py-4">
                                        <li className="pb-2 fs-6">
                                            {" "}
                                            SKU: 8941100294840
                                        </li>
                                        <li className="pb-2 fs-6">
                                            Price: <strong>৳ 175</strong>
                                        </li>
                                        <li className="pb-2 fs-6">
                                            Brand: Nestle
                                        </li>
                                        <li className="pb-2 fs-6">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Consequatur rerum animi aperiam
                                            ducimus ipsum mollitia accusamus
                                            maiores adipisci commodi error
                                            inventore optio quibusdam, alias
                                            fuga praesentium aliquam officia
                                            perspiciatis! Ut?
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivilegeProductDetailModal;
