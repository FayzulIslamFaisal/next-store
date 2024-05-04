import Link from "next/link"

const ViewMoreLink = ({ title = "View More", path = "#", setShowFullList }) => {
    const handleShowFullList = () => {
        setShowFullList(true);
        alert('setShowFullList', setShowFullList);
    };
    return (
        <div className="view-more-link-area">
            <Link href={path} onClick={handleShowFullList}><span>+</span> {title} </Link>
        </div>
    )
}

export default ViewMoreLink