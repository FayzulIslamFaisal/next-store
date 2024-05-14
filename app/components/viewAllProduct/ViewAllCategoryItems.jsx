import Image from "next/image";
import Link from "next/link";

const ViewAllCategoryItems = ({ items }) => {
    let imageUrl = "/images/flash-img1.jpg";
    const { title: altText, title, slug: path, logo } = items;
    if (logo) {
        imageUrl = `https://v3.nagadhat.com/${logo}`;
    }
    return (
        <div className="nh-categories-item">
            <div className="nh-categories-item-bg nh-hover-box-shadow">
                <div className="nh-categories-img image-hover-effect">
                    <Image
                        src={imageUrl}
                        className="img-fluid"
                        alt={altText}
                        fill={true}
                    />
                </div>
                <div className="nh-categories-info text-hover-effect text-capitalize text-center">
                    <h4>
                        <Link href={path}>{title}</Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default ViewAllCategoryItems;
