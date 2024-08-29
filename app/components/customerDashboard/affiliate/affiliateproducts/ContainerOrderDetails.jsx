import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContainerOrderDetails = ({ 
    selectedProducts, 
    setSelectedProducts, 
    availableQuantity,
    availableValue
}) => {

    const getTotalQuantity = () => {
        return selectedProducts.reduce((acc, product) => acc + product.quantity, 0);
    };

    const handleIncrease = (productId) => {
        const totalQuantity = getTotalQuantity();
        if (totalQuantity < availableQuantity) {
            setSelectedProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === productId 
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            );
        } else {
            toast.error('Booked quantity cannot exceed the total quantity.')
        }
    };

    const handleDecrease = (productId) => {
        setSelectedProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === productId && product.quantity > 1 
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const handleQuantityChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        const totalQuantity = getTotalQuantity();
        const currentProduct = selectedProducts.find(product => product.id === productId);
        const remainingQuantity = availableQuantity - (totalQuantity - currentProduct.quantity);

        if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= remainingQuantity) {
            setSelectedProducts(prevProducts =>
                prevProducts.map(product =>
                    product.id === productId ? { ...product, quantity: newQuantity } : product
                )
            );
        } else {
            toast.error('Booked quantity cannot exceed the total quantity.')
        }
    };

    const handleDeleteSelectedProducts = (productId) => {
        const updatedProducts = selectedProducts.filter(product => product.id !== productId);
        setSelectedProducts(updatedProducts);
    };

    const calculateTotalPrice = () => {
        return selectedProducts.reduce((acc, product) => acc + product.pivot.mrp_price * product.quantity, 0);
    };

    const calculateDiscount = () => {
        return selectedProducts.reduce((acc, product) => acc + product.pivot.profit * product.quantity, 0);
    };

    const totalPrice = calculateTotalPrice();
    const discount = calculateDiscount();
    const finalTotal = totalPrice - discount;

    if (availableValue < finalTotal) {
        toast.error('Booked Pricr cannot exceed the total value.')
    }

    return (
        <>
            <ToastContainer />
            <div className="row gy-3 p-4">
                <div className="col-md-8 overflow-x-auto">
                    <div
                        className="container-booking-oder-table"
                        style={{ minWidth: "400px" }}
                    >
                        <h3>Order Details</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Details</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedProducts.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <Image
                                                height={50}
                                                width={50}
                                                src={`${NagadhatPublicUrl}/${product.product_thumbnail}`}
                                                alt={product.product_name}
                                            />
                                        </td>
                                        <td>
                                            {product.product_name}
                                        </td>
                                        <td className="align-middle">
                                            <div
                                                className="btn-group px-1 quantity-area container-booking-quantity-area"
                                                role="group"
                                                aria-label="Basic example"
                                            >
                                                <button
                                                    type="button"
                                                    className="quantity-decrease"
                                                    onClick={() => handleDecrease(product.id)}
                                                    style={{ fontSize: "16px" }}
                                                >
                                                    <FaMinus />
                                                </button>
                                                <input
                                                    className="quantity-fild py-1"
                                                    min="1"
                                                    max="500"
                                                    type="text"
                                                    style={{ width: "36px" }}
                                                    value={product.quantity}
                                                    onChange={(e) => handleQuantityChange(product.id, e)}
                                                    disabled={availableValue < finalTotal}
                                                    readOnly={availableValue < finalTotal ? true : false}
                                                />
                                                <button
                                                    className="quantity-increase"
                                                    type="button"
                                                    onClick={() => handleIncrease(product.id)}
                                                    style={{ fontSize: "16px" }}
                                                    disabled={availableValue < finalTotal}
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <strong>{product.pivot.mrp_price * product.quantity}৳</strong>
                                        </td>
                                        <td className="align-middle">
                                            <p
                                                onClick={()=>handleDeleteSelectedProducts(product.id)}
                                                className="text-danger"
                                                title="Delete"
                                                style={{cursor:"pointer"}}
                                            >
                                                <FaTrashAlt />
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container-booking-oder-table">
                        <h3>Order Amount</h3>
                        <table className="table table-borderless container-booking-oder-amount-table">
                            <tbody>
                                <tr>
                                    <td>Sub Total</td>
                                    <td className="text-end">{totalPrice}৳</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="text-end">{discount}৳</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td className="text-end">
                                        <strong>{finalTotal}৳</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="overflow-hidden">
                            <a className="add-to-cart-link rounded-bottom">
                                Booking Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContainerOrderDetails;
