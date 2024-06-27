import { useCategoryDetailContext } from "@/app/context/CategoryDetailContext";
import { useCategoryDetailProductContext } from "@/app/context/CategoryDetailProductContext";

const CategoryColorVariantItems = ({ colorItem }) => {
    const { id, value:bgColor } = colorItem;

    const { filters_option, category_all_products, setFilterOption } = useCategoryDetailContext();
    const { setProducts } = useCategoryDetailProductContext();

    const handleFilterColor = () => {
        if (!category_all_products || !Array.isArray(category_all_products)) {
            console.error("category_all_products is not an array or is undefined");
            return;
        }
        
        const filteredProducts = category_all_products.filter(product => product.color === bgColor);
        setProducts(filteredProducts);
        setFilterOption(prevState => ({
            ...prevState,
            filters_option: {
                ...prevState.filters_option,
                color: bgColor
            }
        }));

        console.log("Filtered products:", filteredProducts);
    };
    return (
        <div onClick={handleFilterColor} className="product-details-inner-color product-details-variant-item" style={{ background: `${bgColor}` }}>
            <input readOnly type="checkbox" name="color" id={`color-variant_${id}`} />
            <label htmlFor={`color-variant_${id}`}></label>
        </div>
    )
}

export default CategoryColorVariantItems