import React from "react";
import { FaMessage } from "react-icons/fa6";

const QuestionCard = ({ question = true }) => {
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
        <p className="fs-5 fw-medium">Ajke deya jabe</p>
        <p className="fs-6 reviewAuthor">1***9 - 7 days ago</p>
      </div>
    </div>
  );
};

export default QuestionCard;
