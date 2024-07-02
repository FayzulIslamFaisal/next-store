const CategoryVariantItems = ({ brandItem, mergeId, type, searchParams }) => {
    const { title: value, id } = brandItem;

    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                id={`inlineCheckbox1_${id}_${mergeId}`}
                value={`${value}`}
                checked={id == searchParams[type]}
                onChange={() => {
                    let url = window.location.href;
                    if (url.includes("?")) {
                        window.location.href = `${url}&${type}=${id}`;
                    } else {
                        window.location.href = `${url}?${type}=${id}`;
                    }
                }}
            />
            <label
                className="form-check-label"
                htmlFor={`inlineCheckbox1_${id}_${mergeId}`}
            >
                {value}
            </label>
        </div>
    );
};

export default CategoryVariantItems;
