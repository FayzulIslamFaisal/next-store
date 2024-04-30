import React from 'react'

const ShotBy = () => {
    return (
        <div className="all-category-item">
            <div className="category-shot-area d-flex align-items-center">
                <p className=" text-capitalize">Shot By</p>
                <div className="category-shot-option">
                    <select className="form-select" >
                        <option>Best Match</option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default ShotBy