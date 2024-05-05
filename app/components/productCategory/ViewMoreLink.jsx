
const ViewMoreLink = ({ title = "View More", handleViewMore }) => {
    return (
        <div className="view-more-link-area">
            <button onClick={handleViewMore}>
                <span>+</span> {title}
            </button>
        </div>
    );
};

export default ViewMoreLink;
