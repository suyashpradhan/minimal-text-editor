import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BiUnlink } from "react-icons/bi";
import { Modal } from "../Modal";

export const LinkOptions = ({ editor }) => {
  const [showModal, setShowModal] = useState(false);

  //sets the hyperlink to the text
  const setLink = (input) => {
    if (input) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: input })
        .run();
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="editor-column editor-third-column">
        <button
          onClick={() => setShowModal(true)}
          className={
            editor.isActive({ textAlign: "right" })
              ? "editor-button active"
              : "editor-button"
          }
        >
          <AiOutlineLink className="editor-icons"></AiOutlineLink>
        </button>

        {editor.isActive("link") && (
          <button
            className={
              editor.isActive({ textAlign: "left" })
                ? "editor-button active"
                : "editor-button"
            }
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            <BiUnlink className="editor-icons"></BiUnlink>
          </button>
        )}
      </div>

      {/* Modal to enter hyperlink */}
      {showModal && (
        <Modal
          cancelModal={() => setShowModal(false)}
          proceedOperation={setLink}
          label="Enter Hyperlink"
          modalTitle="Hyperlink"
        />
      )}
    </>
  );
};
