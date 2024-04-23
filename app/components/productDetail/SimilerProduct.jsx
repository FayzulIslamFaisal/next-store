
import SectionTitle from '../SectionTitle';
import SimilerProductItems from './SimilerProductItems';

const SimilerProduct = ({ productData }) => {
    console.log(productData);
    return (
        <div className="similer-product-area">
            <div className="similer-product-title d-flex align-items-center">
                <h3>Similer Product</h3>
                <div className="similer-product-border"></div>
            </div>
            <div className="similer-product-box">
                {
                    productData.map((item) => {
                        return (<SimilerProductItems key={item.id} productItem={item} />)
                    })
                }
            </div>
        </div>
    )
}

export default SimilerProduct