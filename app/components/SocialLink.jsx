import SocialLinkItems from "./SocialLinkItems"

const SocialLink = ({ socialLinkItem = [] }) => {

    return (
        <div className="nh-social-link d-flex align-items-center">

            {
                socialLinkItem.map((item) => {
                    const { image, alt, path } = item;
                    return (
                        <SocialLinkItems key={alt} img={image} alt={alt} path={path} />
                    )
                })
            }

        </div>
    )
}

export default SocialLink