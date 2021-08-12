import { BiImageAdd } from "react-icons/bi";

export const ImageOptions = ({ editor }) => {
  return (
    <>
      <div className="editor-fourth-column">
        <button
          className={
            editor.isActive({ textAlign: "center" })
              ? "editor-button active"
              : "editor-button"
          }
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <BiImageAdd className="editor-icons"></BiImageAdd>
        </button>
      </div>
    </>
  );
};
