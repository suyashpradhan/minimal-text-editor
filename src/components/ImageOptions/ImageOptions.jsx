import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Modal } from "../Modal";

export const ImageOptions = ({ editor }) => {
  const [showModal, setShowModal] = useState(false);

  const uploadImage = (url) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
    setShowModal(false);
  };

  return (
    <>
      <div className="editor-column editor-fourth-column">
        <button
          onClick={() => setShowModal(true)}
          className={
            editor.isActive({ textAlign: "center" })
              ? "editor-button active"
              : "editor-button"
          }
        >
          <BiImageAdd className="editor-icons"></BiImageAdd>
        </button>
      </div>

      {showModal && (
        <Modal
          cancelModal={() => setShowModal(false)}
          proceedOperation={uploadImage}
          label="Enter Image Url"
          modalTitle="Image Upload"
        />
      )}
    </>
  );
};
