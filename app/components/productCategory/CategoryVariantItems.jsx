"use client";
import { useCategoryDetailContext } from '@/app/context/CategoryDetailContext';
import { useEffect } from 'react';

const CategoryVariantItems = ({ brandItem, mergeId }) => {
    const { option, setOption } = useCategoryDetailContext();

    const handleBrandProduct = () => {
      const { title: value } = brandItem;
      const newOptions = { ...option, brand: value };
      setOption(newOptions);
    };
  
    useEffect(() => {
      handleBrandProduct();
    }, [brandItem, option, setOption]);
    
    const { title:value, id } = brandItem;
    return (
        <div className="form-check" onClick={handleBrandProduct}>
            <input className="form-check-input" type="checkbox" id={`inlineCheckbox1_${id}_${mergeId}`} value={`${value}`} />
            <label className="form-check-label" htmlFor={`inlineCheckbox1_${id}_${mergeId}`}>{value}</label>
        </div>
    )
}

export default CategoryVariantItems