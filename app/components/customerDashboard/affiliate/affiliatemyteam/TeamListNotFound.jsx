import { FaFaceFrown } from "react-icons/fa6";
const TeamListNotFound = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column gap-3 p-4">
                <FaFaceFrown style={{ fontSize: "30px" }} />
                <p className="fs-5">Nothing Found</p>
            </div>
        </>
    );
};

export default TeamListNotFound;
