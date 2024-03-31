import React from "react";

function LinkItem({ title, path }) {
    return (
        <li>
            <a href={path}>{title}</a>
        </li>
    );
}

export default LinkItem;
