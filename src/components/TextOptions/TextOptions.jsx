import { AiOutlineBold, AiOutlineItalic } from "react-icons/ai";
import { BsTypeUnderline } from "react-icons/bs";

//Text Styling Component
export const TextOptions = ({ editor }) => {
  return (
    <>
      <div className="editor-column editor-first-column">
        <button
          className={
            editor.isActive("bold") ? "editor-button active" : "editor-button"
          }
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <AiOutlineBold className="editor-icons"></AiOutlineBold>
        </button>
        <button
          className={
            editor.isActive("italic") ? "editor-button active" : "editor-button"
          }
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <AiOutlineItalic className="editor-icons"></AiOutlineItalic>
        </button>
        <button
          className={
            editor.isActive("underline")
              ? "editor-button active"
              : "editor-button"
          }
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <BsTypeUnderline className="editor-icons"></BsTypeUnderline>
        </button>
      </div>
    </>
  );
};
