function FlipClock() {
    return (
        <div className="nh-common-item d-flex align-items-center ">
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
        </div>
    );
}

export default FlipClock;
