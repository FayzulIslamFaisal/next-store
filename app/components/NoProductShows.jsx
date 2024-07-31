import React from "react";

const NoProductShows = ({ text }) => {
    return (
        <div
            style={{
                color: "#f2f2f2",
                width: "100%",
                height: "200px",
                textAlign: "center",
                width: "700",
                fontSize: "40px",
                marginTop: "100px",
                opacity: "50%",
            }}
        >
            <p>{text}</p>
        </div>
    );
};

export default NoProductShows;
