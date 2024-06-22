import React from "react";
import { FaMessage } from "react-icons/fa6";
import moment from "moment";

const QuestionCard = ({ question = true, message, author, date }) => {
    return (
        <div className="d-flex align-items-start gap-3 reviewCardContainer">
            <p
                className={`fs-3 position-relative ${
                    question ? "text-primary-color" : "reviewAns"
                }`}
            >
                <FaMessage />
                <span className="questionLetter">{question ? "Q" : "A"}</span>
            </p>
            <div>
                <p className="fs-6 fw-medium">{message}</p>
                <p className="fs-6 reviewAuthor">
                    {author} - {moment(date, "YYYYMMDD hh:mm").fromNow()}
                </p>
            </div>
        </div>
    );
};

export default QuestionCard;
