import Link from "next/link";
import React from "react";

function LinkItem({ title, path }) {
    return (
        <li>
            <Link href={path}>{title}</Link>
        </li>
    );
}

export default LinkItem;
