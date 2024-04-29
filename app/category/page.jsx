"use client"
import { useState, useEffect } from 'react';
import Image from "next/image"
import Breadcrumb from "../components/productDetail/Breadcrumb"
import Link from "next/link"
import SectionTitle from "../components/SectionTitle"
import ProductCategories from "../components/ProductCategories"
import Service from "../components/Service"

const ProductCategory = () => {
    const categoryProductData = [
        {
            imageurl: "/images/meril.svg",
            altText: "category image 1",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 2",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 3",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 4",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 5",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 6",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 7",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 8",
            path: "#",
            title: "Bedding Accessories",
        },

        {
            imageurl: "/images/meril.svg",
            altText: "category image 9",
            path: "#",
            title: "Wardrobe Organisers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 10",
            path: "#",
            title: "Washing Powder",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 11",
            path: "#",
            title: "Women",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 12",
            path: "#",
            title: "LED Strip Lighting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 13",
            path: "#",
            title: "Wireless Earbud",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 14",
            path: "#",
            title: "Humidifiers",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 15",
            path: "#",
            title: "Modelling & Sculpting",
        },
        {
            imageurl: "/images/meril.svg",
            altText: "category image 16",
            path: "#",
            title: "Bedding Accessories",
        },
    ];
    const serviceItems = [
        {
            imageurl: "/images/pickup.svg",
            altText: "pickup image",
            title: " Fast Delivery",
            subTitle: "Free For All Type Order",
        },
        {
            imageurl: "/images/gift-cart.svg",
            altText: "gift cart",
            title: " Best Quality",
            subTitle: "Best Product Peices",
        },
        {
            imageurl: "/images/gift-box.svg",
            altText: "gift box",
            title: " Exchange Offer",
            subTitle: "One Day To Changes",
        },
        {
            imageurl: "/images/headphone.svg",
            altText: "headphone",
            title: "  Help Center",
            subTitle: "Support System 24/7",
        },
    ];

    const [sliderOne, setSliderOne] = useState(0);
    const [sliderTwo, setSliderTwo] = useState(1000);
    const [sliderMaxValue, setSliderMaxValue] = useState(1000);
    const [minGap, setMinGap] = useState(0);

    useEffect(() => {
        slideOne();
        slideTwo();
    }, []);

    function slideOne() {
        if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
            setSliderOne(parseInt(sliderTwo) - minGap);
        }
        fillColor();
    }

    function slideTwo() {
        if (parseInt(sliderTwo) - parseInt(sliderOne) <= minGap) {
            setSliderTwo(parseInt(sliderOne) + minGap);
        }
        fillColor();
    }

    function fillColor() {
        const percent1 = (sliderOne / sliderMaxValue) * 100;
        const percent2 = (sliderTwo / sliderMaxValue) * 100;
        // Update slider track style
        const sliderTrack = document.querySelector(".slider-track");
        if (sliderTrack) {
            sliderTrack.style.background = `linear-gradient(to right, var(--color-FC7024) ${percent1}% , var(--color-FC7024) ${percent1}% , var(--color-FC7024) ${percent2}%, var(--color-FC7024) ${percent2}%)`;
        }
    }


    return (
        <>
            <section className="product-category-wrapper">
                <div className="container">
                    <Breadcrumb />
                    <div className="row product-category-details-row">
                        <div className="col-md-12">
                            <div className="product-category-details">
                                <aside className="product-category-left-Side">
                                    <div className="category-left-Side-info">
                                        <div className="category-left-section-title">
                                            <h2>Sub Categories</h2>
                                        </div>
                                        <div className="product-sub-category-area sub-category-pb40">
                                            <ul>
                                                <li><Link href="#">Women's Shoes Accessories </Link></li>
                                                <li><Link href="#">Bras</Link></li>
                                                <li><Link href="#">Women's Socks & Tights</Link></li>
                                                <li><Link href="#">Women's Hats & Caps</Link></li>
                                                <li><Link href="#">Women's Hair Accessories</Link></li>
                                                <li><Link href="#">Sarees</Link></li>
                                                <li><Link href="#">Women Belts</Link></li>
                                                <li><Link href="#">Panties</Link></li>
                                                <li><Link href="#">Blouses & Shirts</Link></li>
                                                <li><Link href="#">Sleep & Loungewear</Link></li>
                                                <li><Link href="#">Women's Gloves</Link></li>
                                            </ul>
                                        </div>
                                        <div className="category-left-section-title">
                                            <h2>Price Range</h2>
                                        </div>
                                        <div className="product-category-range-area sub-category-pb40">
                                            <div className="product-category-range">
                                                <div className="slider-track"></div>
                                                <input type="range" min="0" max="1000" value={sliderOne} id="slider-1" onChange={slideOne} />
                                                <input type="range" min="0" max="1000" value={sliderTwo} id="slider-2" onChange={slideTwo} />
                                            </div>
                                            <div className="product-category-rang-info d-flex align-items-center justify-content-between">
                                                <div className="product-category-rang-value" id="range1">৳ {sliderOne}</div>
                                                <div className="product-category-rang-value" id="range2">৳ {sliderTwo}</div>
                                            </div>
                                        </div>
                                        <div className="category-left-section-title">
                                            <h2>Brand</h2>
                                        </div>
                                        <div className="product-brand-category-area sub-category-pb40">
                                            <div className="product-brand-category-list">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox1">Women's Shoes Accessories</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox2">Bras</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox3">Women's Socks & Tights</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox4">Women's Hats & Caps</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox5" value="option4" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox5">Women's Hair Accessories</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox6">Sarees</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox7">Women Belts</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox8" value="option8" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox8">Panties</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox9" value="option9" />
                                                    <label className="form-check-label" htmlFor="inlineCheckbox9">Blouses & Shirts</label>
                                                </div>
                                            </div>
                                            <div className="view-more-link-area">
                                                <Link href="#"><span>+</span> View More</Link>
                                            </div>
                                        </div>
                                        <div className="category-left-section-title">
                                            <h2>Color</h2>
                                        </div>
                                        <div className="product-color-category-area sub-category-pb40">
                                            <div className="product-details-inner-quantity d-flex align-items-center">
                                                <div className="product-details-inner-color product-details-variant-item" style={{ background: '#D9D9D9' }}>
                                                    <input readOnly type="checkbox" name="color" id="color-variant1" />
                                                    <label htmlFor="color-variant1"></label>
                                                </div>
                                                <div className="product-details-inner-color product-details-variant-item" style={{ background: '#FF0000' }}>
                                                    <input readOnly type="checkbox" name="color" id="color-variant2" />
                                                    <label htmlFor="color-variant2"></label>
                                                </div>
                                                <div className="product-details-inner-color product-details-variant-item" style={{ background: '#321313' }}>
                                                    <input readOnly type="checkbox" name="color" id="color-variant3" />
                                                    <label htmlFor="color-variant3"></label>
                                                </div>
                                                <div className="product-details-inner-color product-details-variant-item" style={{ background: '#4200FF' }}>
                                                    <input readOnly type="checkbox" name="color" id="color-variant4" />
                                                    <label htmlFor="color-variant4"></label>
                                                </div>
                                                <div className="product-details-inner-color product-details-variant-item" style={{ background: '#A0CF1B' }}>
                                                    <input readOnly type="checkbox" name="color" id="color-variant5" />
                                                    <label htmlFor="color-variant5"></label>
                                                </div>
                                            </div>
                                            <div className="view-more-link-area">
                                                <Link href="#"><span>+</span> View More</Link>
                                            </div>
                                        </div>
                                        <div className="category-left-section-title">
                                            <h2>Size</h2>
                                        </div>
                                        <div className="product-brand-category-area sub-category-pb40">
                                            <div className="product-brand-category-list">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox1" value="option1" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox1">37</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox2" value="option2" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox2">38</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox3" value="option3" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox3">39</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox4" value="option4" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox4">40</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox5" value="option4" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox5">41</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox6" value="option6" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox6">42</label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="sizeCheckbox7" value="option7" />
                                                    <label className="form-check-label" htmlFor="sizeCheckbox7">43</label>
                                                </div>

                                            </div>
                                            <div className="view-more-link-area">
                                                <Link href="#"><span>+</span> View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <main className="product-category-right-Side">
                                    <div className="category-right-Side">
                                        <div className="all-category-item-area d-flex align-items-center justify-content-between">
                                            <div className="all-category-item">
                                                <p>145 Itmes found “Women’s Shoes Accessories”</p>
                                            </div>
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
                                        </div>
                                        <div className="product-category-grid-area">

                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flash-sale-content-item">
                                                <div className="flash-sale-content-bg nh-hover-box-shadow">
                                                    <div className="product-category-image">
                                                        <div className="flash-sale-content-img image-hover-effect">
                                                            <Image
                                                                fill
                                                                security="100vw"
                                                                src="/images/flash-img4.jpg"
                                                                className="img-fluid"
                                                                alt="Fashion"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flash-sale-content-info text-hover-effect">
                                                        <h4>
                                                            <Link href="#">Maggi Masala 620gm (8Pcs) Free 2 pcs (Nestle) </Link>
                                                        </h4>
                                                        <div className="category-product-price d-flex align-items-center justify-content-between  ">
                                                            <strong>৳ 560</strong>
                                                            <div className="category-product-rating d-flex align-items-center">
                                                                <div className="category-product-rating-item d-flex align-items-center">
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                    <div className="category-product-rating-img">
                                                                        <Image src="/images/category-Star .svg" width={13} height={13} alt="star" />
                                                                    </div>
                                                                </div>
                                                                <span>(15)</span>
                                                            </div>
                                                        </div>
                                                        <div className="add-to-cart-holder d-flex align-items-center justify-content-center ">
                                                            <Link href="#" className="add-to-cart-link category-product-add-btn">Add to Cart</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row product-category-pagination-row">
                                            <div className="col-md-12">
                                                <div className="product-category-pagination-area d-flex  align-items-center justify-content-between">
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
                                                    <div className="product-category-pagination-col">
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination align-items-center">
                                                                <li className="page-item">
                                                                    <Link className="page-link" href="#" aria-label="Previous">
                                                                        <span aria-hidden="true">&#60;</span>
                                                                    </Link>
                                                                </li>
                                                                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                                                <li className="page-item"><Link className="page-link active" href="#">2</Link></li>
                                                                <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                                                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                                                <li className="page-item"><Link className="page-link page-link-dotted" href="#">...</Link></li>
                                                                <li className="page-item"><Link className="page-link" href="#">10</Link></li>
                                                                <li className="page-item">
                                                                    <Link className="page-link" href="#" aria-label="Next">
                                                                        <span aria-hidden="true">&#62;</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <SectionTitle title="Featured Brands" />
                                        <ProductCategories categoryProductData={categoryProductData} isHome={false} />
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                    <Service serviceItems={serviceItems} />
                </div>
            </section>

        </>

    )
}

export default ProductCategory