import { NagadhatPublicUrl } from "@/app/utils";
import Image from "next/image";
const MultipleProductSlider = ({ multipleImage }) => {
    const { path, altText } = multipleImage;
    return (
        <>
            <div className="product-multiple-photo-item">
                <Image
                    className="img-fluid object-fit-cover"
                    src={`${NagadhatPublicUrl}/${path}`}
                    fill={true}
                    alt=" product gallery Image "
                />
            </div>
        </>
    );
};

export default MultipleProductSlider;
