import ServiceItems from "./ServiceItems";

const Service = ({ serviceItems = [] }) => {
    return (
        <>
            <div className="nh-service-area">
                <div className="row">
                    <div className="col-md-12">
                        <div className="nh-service-box">
                            {
                                serviceItems.map((item) => {
                                    const { imageurl, altText, title, subTitle } = item;
                                    return (
                                        <ServiceItems key={title} imageurl={imageurl} altText={altText} title={title} subTitle={subTitle} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service