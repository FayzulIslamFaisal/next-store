"use client";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

function FlipClock() {
    return (
        <>
            {/* <div className="nh-common-item d-flex align-items-center ">
                <div className="flash-end-time">Ending in</div>

                <div className="flash-sale-end-time d-flex align-items-center">
                    <div className="flash-sale-end-time-box d-flex align-items-center justify-content-center">
                        <span>08</span>
                    </div>
                    <div className="flash-sale-end-time-dot">:</div>

                    <div className="flash-sale-end-time-box d-flex align-items-center justify-content-center">
                        <span>20</span>
                    </div>
                    <div className="flash-sale-end-time-dot">:</div>

                    <div className="flash-sale-end-time-box d-flex align-items-center justify-content-center">
                        <span>50</span>
                    </div>
                </div>
            </div> */}
            <div className="nh-common-item d-flex align-items-center justify-content-center">
                <div className="flash-end-time">Ending in</div>
                <FlipClockCountdown
                    to={new Date().getTime() + 3600 * 24 * 30 * 12 * 20}
                    digitBlockStyle={{
                        width: 30,
                        height: 30,
                        fontSize: 12,
                        backgroundColor: "#44BC9D",
                        borderRadius: 0,
                        border: "none",
                        borderRadius: 0,
                    }}
                    labelStyle={{
                        fontSize: 0,
                        color: "transparent",
                        display: "none",
                    }}
                    dividerStyle={{
                        color: "transparent",
                        height: 0,
                    }}
                    separatorStyle={{
                        color: "#000",
                        size: "2px",
                        marginBottom: "-20px",
                    }}
                />
            </div>
        </>
    );
}

export default FlipClock;
