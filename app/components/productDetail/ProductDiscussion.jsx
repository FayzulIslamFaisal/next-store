// components/ProductQuestions.js
import React, { useEffect, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import Collapse from "../Collapse";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import QuestionCard from "../QuestionCard";
import { getQuestionAndAns } from "@/app/services/getQuestionAndAns";

const ProductQuestions = ({ productInfo }) => {
  const [userQuestion, setUserQuestion] = useState("");
  const [questionResponse, setQuestionResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://v3.nagadhat.com/api/question/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_id: 1,
          user_id: 1,
          question: userQuestion,
        }),
      });

      if (!res.ok) {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
          title: <p>HTTP error! status: ${res.status}</p>,
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        title: <p>Your Answer Send Successfully</p>,
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      console.error("Error:", err);
    }
  };
  productInfo;
  useEffect(() => {
    const fetchQuestion = async () => {
      const questions = await getQuestionAndAns();
      const filterQuestion = questions?.results.filter(
        (question) => question.product_id === productInfo.id
      );
    };
    fetchQuestion();
  }, [productInfo]);

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
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      Question:
                    </label>
                    <textarea
                      value={userQuestion}
                      onChange={(e) => {
                        setUserQuestion(e.target.value);
                      }}
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
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
                    type="submit"
                    data-bs-dismiss="modal"
                    className="bg-primary-color text-light py-2 px-2 border-0 rounded-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
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
        <QuestionCard></QuestionCard>
      </div>
      <div className="mt-5">
        <QuestionCard question={false}></QuestionCard>
      </div>
    </div>
  );
};

export default ProductQuestions;
