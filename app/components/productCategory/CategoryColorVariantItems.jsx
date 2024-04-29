
const CategoryColorVariantItems = ({ colorItem }) => {
    const { id, bgColor } = colorItem;
    return (
        <div className="product-details-inner-color product-details-variant-item" style={{ background: `${bgColor}` }}>
            <input readOnly type="checkbox" name="color" id={`color-variant_${id}`} />
            <label htmlFor={`color-variant_${id}`}></label>
        </div>
    )
}

export default CategoryColorVariantItems