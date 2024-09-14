// import { useEffect, useState } from "react";

// const ClaimRewardModal = ({ show, handleClose }) => {
//     const [fadeEffect, setFadeEffect] = useState(false);
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         if (show) {
//             setVisible(true);
//             setTimeout(() => setFadeEffect(true), 10);
//         } else {
//             setFadeEffect(false);
//             setTimeout(() => setVisible(false), 300);
//         }
//     }, [show]);

//     const handleOutsideClick = (e) => {
//         if (e.target.classList.contains("modal")) {
//             closeModalWithFade();
//         }
//     };

//     const closeModalWithFade = () => {
//         setFadeEffect(false);
//         setTimeout(() => handleClose(), 300);
//     };

//     if (!visible) return null;
//     console.log("rankList", rankList);

//     return (
//         <div
//             className={`modal fade ${fadeEffect ? "show" : ""}`}
//             tabIndex="-1"
//             role="dialog"
//             style={{
//                 display: visible ? "block" : "none",
//                 background: "rgba(0,0,0,.5)",
//                 transition: "opacity 0.3s ease",
//             }}
//             aria-modal="true"
//             onMouseDown={handleOutsideClick}
//         >
//             <div className="modal-dialog modal-dialog-centered" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">
//                             Claim Your Rewards for being Executive
//                         </h5>
//                         <button
//                             type="button"
//                             className="btn-close"
//                             onClick={closeModalWithFade}
//                         ></button>
//                     </div>
//                     <div className="modal-body">
//                         <p>
//                             Congratulations on reaching a new rank! Claim your
//                             reward now.
//                         </p>
//                     </div>
//                     <div className="modal-footer d-flex align-items-center justify-content-between ">
//                         <h4>
//                             {rankList?.rewards_details ||
//                                 "No rewards details available"}
//                         </h4>
//                         <button
//                             type="button"
//                             className="btn btn-secondary"
//                             onClick={closeModalWithFade}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ClaimRewardModal;

import Image from "next/image";
import { useEffect, useState } from "react";

const ClaimRewardModal = ({ show, handleClose, rewardDetails }) => {
    const [fadeEffect, setFadeEffect] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
            setTimeout(() => setFadeEffect(true), 10);
        } else {
            setFadeEffect(false);
            setTimeout(() => setVisible(false), 300);
        }
    }, [show]);

    const handleOutsideClick = (e) => {
        if (e.target.classList.contains("modal")) {
            closeModalWithFade();
        }
    };

    const closeModalWithFade = () => {
        setFadeEffect(false);
        setTimeout(() => handleClose(), 300);
    };

    if (!visible) return null;

    return (
        <div
            className={`modal fade ${fadeEffect ? "show" : ""}`}
            tabIndex="-1"
            role="dialog"
            style={{
                display: visible ? "block" : "none",
                background: "rgba(0,0,0,.5)",
                transition: "opacity 0.3s ease",
            }}
            aria-modal="true"
            onMouseDown={handleOutsideClick}
        >
            <div
                className="modal-dialog modal-dialog-centered modal-lg"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Claim Your Rewards {rewardDetails?.level}{" "}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={closeModalWithFade}
                        ></button>
                    </div>
                    <div className="modal-body ">
                        <div className="row gap-4">
                            <div className="rewards-gif-image-item col">
                                <div className="">
                                    <Image
                                        width={350}
                                        height={350}
                                        src={`/images/Taka.png`}
                                        alt={`${rewardDetails?.level}`}
                                    />
                                </div>
                            </div>
                            <div className="rewards-gif-image-item col">
                                <h4 style={{ color: "44bc9d" }}>
                                    {rewardDetails?.rewards_details ||
                                        "No rewards details available"}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex align-items-center justify-content-between">
                        <h4 style={{ color: "#44bc9d", fontSize: "16px" }}>
                            {rewardDetails?.rewards_details ||
                                "No rewards details available"}
                        </h4>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={closeModalWithFade}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClaimRewardModal;
