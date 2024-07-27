const OrderViewDetail = () => {
    return (
        <>
            <div className="card mt-3">
                <div className="card-header">
                    <b className="fs-15">Order Details</b>
                </div>
                <div className="card-body pb-0">
                    <div className="table-responsive">
                        <table className="table table-borderless table-responsive">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th width="30%">Product</th>
                                    <th>Quantity</th>
                                    <th>Vendor Name</th>
                                    <th>Delivery Partner</th>
                                    <th>Price</th>
                                    <th>Refund</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            className="rounded"
                                            src="https://nagadhat.com.bd/storage/media/products/images/1709628514_IMG_4228.jpg"
                                            width="60"
                                        />
                                    </td>
                                    <td>
                                        <a
                                            href="/product/------20----65e6dc62df79a"
                                            target="_blank"
                                        >
                                            ওয়াও স্টাফড ডেটস গিফট বক্স 20পিস
                                            প্রিমিয়াম স্টাফড ডেটস
                                        </a>
                                    </td>
                                    <td>1</td>
                                    <td>Nagadhat</td>
                                    <td>--</td>
                                    <td>৳ 1500</td>
                                    <td>
                                        <b>--</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderViewDetail;
