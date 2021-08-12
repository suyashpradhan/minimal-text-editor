import "./Modal.css";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

//<AiOutlineClose />

//Modal Component for URLs
export const Modal = ({ modalTitle, cancelModal, proceedOperation, label }) => {
  const [input, setInput] = useState("");
  return (
    <>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">{modalTitle}</h1>
              <button
                type="button"
                className="button"
                onClick={() => {
                  cancelModal();
                }}
              >
                <AiOutlineClose className="close-modal" />
              </button>
            </div>
            <div className="modal-body">
              <label className="label">{label}</label>
              <input
                className="form-field"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />

              <div className="button-row">
                <button
                  className="button button-primary"
                  onClick={() => proceedOperation(input)}
                >
                  Submit
                </button>
                <button
                  className="button button-danger"
                  onClick={() => {
                    setInput("");
                    cancelModal();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
