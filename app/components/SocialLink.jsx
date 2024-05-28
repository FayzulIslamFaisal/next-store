import SocialLinkItems from "./SocialLinkItems";
const socialLinkItem = [
  {
    image: "/images/facbook.svg",
    alt: "Facebook",
    path: "https://www.facebook.com/sharer/sharer.php?u=https://next-store-self-five.vercel.app/&title=Welcome%20to%20the%20Product%20Page&description=Check%20out%20this%20product&picture=https://nagadhat.com.bd/storage/media/project_images/1674733711_Discount-Partners-Web-Slider.jpg",
  },
  {
    image: "/images/twitter.svg",
    alt: "Twitter",
    path: "https://twitter.com/intent/tweet?url=https://next-store-self-five.vercel.app/&text=Welcome%20to%20the%20Product%20Page",
  },
  {
    image: "/images/linkedin.svg",
    alt: "LinkedIn",
    path: "https://www.linkedin.com/shareArticle?mini=true&url=https://nagadhat.com.bd/&title=Welcome%20to%20the%20Product%20Page&summary=Check%20out%20this%20product&source=LinkedIn",
  },
  {
    image: "/images/youtube.svg",
    alt: "YouTube",
    path: "https://www.youtube.com",
  },
  {
    image: "/images/instagram.svg",
    alt: "Instagram",
    path: "https://www.instagram.com",
  },
];

const SocialLink = ({ children }) => {
  //   console.log(socialLinkItem);

  return (
    <div className="nh-social-link d-flex align-items-center">
      {socialLinkItem.map((item) => {
        const { image, alt, path } = item;
        return <SocialLinkItems key={alt} img={image} alt={alt} path={path} />;
      })}
    </div>
  );
};

export default SocialLink;
