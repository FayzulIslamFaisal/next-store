"use client";

import { NagadhatPublicUrl, VercerUrl } from "@/app/utils";
import { useState } from "react";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";

const AffiliateReferFriend = ({ affiliateData }) => {
    // const referralLink = `http://localhost:3000/ref/${affiliateData?.reffer_a_friend_link}`;
    const referralLink = `${VercerUrl}/ref/${affiliateData?.reffer_a_friend_link}`;

    console.log("affiliateData------+++++>>>>", affiliateData);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        setCopied(true);

        let timerInterval;
        Swal.fire({
            title: "Referral Link Copied!",
            html: `Closing in <b></b> milliseconds.<br>${referralLink}`,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
            }
        });
    };

    return (
        <div className="affiliate-dashboard-refer-section">
            <div className="affiliate-dashboard-refer-item">
                <p>Refer A Friend</p>
            </div>
            <div className="affiliate-dashboard-refer-item">
                <p>{referralLink}</p>
            </div>
            <CopyToClipboard text={referralLink} onCopy={handleCopy}>
                <button className="affiliate-dashboard-refer-item focus-ring">
                    {copied ? "Referral Link Copied!" : "Copy"}
                </button>
            </CopyToClipboard>
            <Link
                href={`/registration?sponsored=${affiliateData?.user_id}`}
                className="affiliate-dashboard-refer-item focus-ring"
            >
                New SignUp
            </Link>
        </div>
    );
};

export default AffiliateReferFriend;
