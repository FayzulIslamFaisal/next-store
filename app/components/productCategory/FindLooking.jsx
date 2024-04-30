import React from 'react'

const FindLooking = () => {
    return (
        <div className="product-category-pagination-col d-flex align-items-center">
            <div className="product-category-pagination-inner"><p>Did you find what you were looking for?</p> </div>
            <div className="product-category-pagination-inner">
                <form>
                    <div className="category-looking-form d-flex align-items-center">
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FindLooking