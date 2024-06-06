import React from "react";
import { MdRateReview } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi2";

const ReviewFrom = () => {
  return (
    <div>
      <div>
        <p className="mt-2 text-muted">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="mt-5">
          <div>
            <p className="text-dark">Your rating *</p>
            <div className="d-flex align-items-center text-primary mt-3">
              <span className="me-2">
                <HiOutlineStar />
              </span>
              <span className="me-2">
                <HiOutlineStar />
              </span>
              <span className="me-2">
                <HiOutlineStar />
              </span>
              <span className="me-2">
                <HiOutlineStar />
              </span>
              <span className="me-2">
                <HiOutlineStar />
              </span>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-dark">Your review *</p>
            <div className="mt-3">
              <textarea
                className="form-control"
                id="review"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-dark">Name *</p>
            <div className="mt-3">
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-dark">Email *</p>
            <div className="mt-3">
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <div className="mt-5">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="saveInfo"
              />
              <label htmlFor="saveInfo" className="form-check-label text-muted">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div>
          <button className="btn btn-primary d-flex align-items-center gap-2 mt-4">
            <MdRateReview className="text-light fs-4" />
            <span className="fw-bold text-light">Sign Up</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewFrom;
