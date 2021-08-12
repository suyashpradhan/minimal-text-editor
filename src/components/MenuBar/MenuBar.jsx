import "./MenuBar.css";
import { TextOptions } from "../TextOptions";
import { LinkOptions } from "../LinkOptions";
import { ImageOptions } from "../ImageOptions";
import { Meme } from "../Meme";

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="editor-header">
        <TextOptions editor={editor} />
        <LinkOptions editor={editor} />
        <ImageOptions editor={editor} />
        <Meme editor={editor} />
      </div>
    </>
  );
};
