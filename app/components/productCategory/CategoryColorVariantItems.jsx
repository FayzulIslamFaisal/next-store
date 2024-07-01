import { useCategoryDetailContext } from "@/app/context/CategoryDetailContext";
import { useCategoryDetailProductContext } from "@/app/context/CategoryDetailProductContext";

const CategoryColorVariantItems = ({ colorItem, searchParams }) => {
    const { id, value: bgColor } = colorItem;

    const { filters_option, category_all_products, setFilterOption } =
        useCategoryDetailContext();
    const { setProducts } = useCategoryDetailProductContext();

    const handleFilterColor = () => {
        if (!category_all_products || !Array.isArray(category_all_products)) {
            console.error(
                "category_all_products is not an array or is undefined"
            );
            return;
        }

        const filteredProducts = category_all_products.filter(
            (product) => product.color === bgColor
        );
        setProducts(filteredProducts);
        setFilterOption((prevState) => ({
            ...prevState,
            filters_option: {
                ...prevState.filters_option,
                color: bgColor,
            },
        }));

        console.log("Filtered products:", filteredProducts);
    };
    return (
        <div
            onClick={handleFilterColor}
            className="product-details-inner-color product-details-variant-item"
            style={{ background: `${bgColor}` }}
        >
            <input
                type="checkbox"
                name="color"
                id={`color-variant_${id}`}
                value={id}
                checked={id === searchParams?.color}
                onChange={(e) => {
                    let url = window.location.href;
                    if (url.includes("?")) {
                        window.location.href = `${url}&color=${id}`;
                    } else {
                        window.location.href = `${url}?color=${id}`;
                    }
                }}
            />
            <label htmlFor={`color-variant_${id}`}></label>
        </div>
    );
};

export default CategoryColorVariantItems;
