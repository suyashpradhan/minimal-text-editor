import "./MenuBar.css";
import { TextOptions } from "../TextOptions";
import { AlignOptions } from "../AlignOptions";
import { LinkOptions } from "../LinkOptions";
import { ImageOptions } from "../ImageOptions";

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="editor-header">
        <TextOptions editor={editor} />
        <AlignOptions editor={editor} />
        <LinkOptions editor={editor} />
        <ImageOptions editor={editor} />
      </div>
    </>
  );
};
