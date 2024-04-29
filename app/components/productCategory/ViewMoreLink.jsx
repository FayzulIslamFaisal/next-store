import Link from "next/link"

const ViewMoreLink = ({ title = "View More", path = "#" }) => {
    return (
        <div className="view-more-link-area">
            <Link href={path}><span>+</span> {title} </Link>
        </div>
    )
}

export default ViewMoreLink