import dynamic from "next/dynamic";

function SectionTitle({ title, path = "#", children, isSale = false }) {
    const { width } = dynamic(() => import("../hooks/useScreenSize"), {
        ssr: false,
    });
    const MAX_SCREEN_SIZE = 430;
    return (
        <div className="row nh-common-title-area">
            <div className="col-md-12">
                <div
                    className={`nh-common-title d-flex align-items-center justify-content-between ${
                        isSale && width < MAX_SCREEN_SIZE ? "flex-column" : ""
                    }`}
                >
                    <div className="nh-common-item d-flex align-items-center">
                        <h3>{title}</h3>
                        <div className="common-border"></div>
                    </div>
                    {children}
                    <div className="nh-common-item">
                        <a href={path}>View All</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTitle;
