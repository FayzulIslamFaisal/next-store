import Image from "next/image";
import Link from "next/link";

const SocialLinkItems = ({ img, alt, path }) => {
  return (
    <>
      <a href={path} target="_blank" rel="noopener noreferrer">
        <Image src={img} alt={alt} width={30} height={30} />
      </a>
    </>
  );
};

export default SocialLinkItems;
