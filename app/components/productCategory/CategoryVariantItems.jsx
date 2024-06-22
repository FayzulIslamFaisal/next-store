import React from 'react'

const CategoryVariantItems = ({ brandItem, mergeId }) => {
    const { title:value, id } = brandItem;
    return (
        <div className="form-check">
            <input className="form-check-input" type="checkbox" id={`inlineCheckbox1_${id}_${mergeId}`} value={`${value}`} />
            <label className="form-check-label" htmlFor={`inlineCheckbox1_${id}_${mergeId}`}>{value}</label>
        </div>
    )
}

export default CategoryVariantItems