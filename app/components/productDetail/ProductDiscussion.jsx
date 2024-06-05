// components/ProductQuestions.js
import React from "react";
import { MdAddToPhotos } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import Collapse from "../Collapse";

const ProductQuestions = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="w-50">
          <h4 className="font-weight-bold">Questions (0)</h4>
        </div>
        <label
          type="button"
          className="d-flex gap-1 justify-content-center text-center align-items-center font-weight-bold rounded-lg addQuestionButton"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          <MdAddToPhotos /> Add Questions
        </label>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Your Question
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      Question:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="bg-primary-color text-light py-2 px-2 border-0 rounded-2"
                >
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-5 text-secondary">
          Have a question about this product? Get specific details about this
          product from an expert.
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <p className="d-flex justify-content-center align-items-center display-4 rounded-circle p-5 bg-light w-25 h-25 text-primary-color">
            <RiMessage2Line />
          </p>
        </div>
        <p className="mt-3 text-center ml-1 text-muted">
          There are no questions asked yet. Be the first one to ask a question.
        </p>
      </div>
      <div className="mt-5">
        <Collapse></Collapse>
      </div>
    </div>
  );
};

export default ProductQuestions;
