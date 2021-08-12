import {
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlignCenter,
} from "react-icons/ai";

export const AlignOptions = ({ editor }) => {
  return (
    <>
      <div className="editor-second-column">
        <button
          className={
            editor.isActive({ textAlign: "left" })
              ? "editor-button active"
              : "editor-button"
          }
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AiOutlineAlignLeft className="editor-icons"></AiOutlineAlignLeft>
        </button>
        <button
          className={
            editor.isActive({ textAlign: "center" })
              ? "editor-button active"
              : "editor-button"
          }
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AiOutlineAlignCenter className="editor-icons"></AiOutlineAlignCenter>
        </button>
        <button
          className={
            editor.isActive({ textAlign: "right" })
              ? "editor-button active"
              : "editor-button"
          }
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AiOutlineAlignRight className="editor-icons"></AiOutlineAlignRight>
        </button>
      </div>
    </>
  );
};
