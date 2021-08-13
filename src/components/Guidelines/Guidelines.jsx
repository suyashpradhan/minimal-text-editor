import "./Guidelines.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiCheck } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { BiImageAdd } from "react-icons/bi";

//Guidelines Component
export const Guidelines = ({ modalTitle, setShowModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">{modalTitle}</h1>
              <AiOutlineClose
                onClick={() => {
                  setShowModal(false);
                }}
                className="close-modal"
              />
            </div>
            <div className="modal-body">
              <h1 className="guidelines-header">Here are some guidelines </h1>
              <ul className="guidelines-collection">
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add/remove bold styling click on <span>B</span> button.{" "}
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add/remove italic styling click on <span>I</span> button.{" "}
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add/remove underline styling click on <span>U</span>{" "}
                    button.{" "}
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add/remove hyperlink from the text click on{" "}
                    <span>
                      <AiOutlineLink />
                    </span>{" "}
                    button.
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add and image click on{" "}
                    <span>
                      <BiImageAdd />
                    </span>{" "}
                    button.
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To add meme type e.g. {`{{dog_meme}}`} click on <br />
                    <span>Add Meme</span> button.
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    To delete image or meme just press <span>delete</span> or{" "}
                    <span>backspace</span> on keyboard.
                  </p>
                </li>
                <li className="guidelines-list">
                  <BiCheck className="check-icon" />
                  <p className="guidelines-text">
                    Drag and drop image to change its sequence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
