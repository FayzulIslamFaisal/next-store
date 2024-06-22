import Image from "next/image";
const MultipleProductSlider = ({ multipleImage }) => {
  const { imageUrl, altText } = multipleImage;
  return (
    <>
      <div className="product-multiple-photo-item">
        <Image className="img-fluid" src={imageUrl} fill={true} alt={altText} />
      </div>
    </>
  );
};

export default MultipleProductSlider;
