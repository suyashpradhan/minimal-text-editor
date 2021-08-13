import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { Modal } from "../Modal";

//Image Component
export const ImageOptions = ({ editor }) => {
  const [showModal, setShowModal] = useState(false);

  //Function to upload image
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

      {/*Modal to upload image*/}
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
