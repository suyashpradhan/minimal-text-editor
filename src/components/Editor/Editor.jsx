import "./Editor.css";
import { MenuBar } from "../MenuBar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Placeholder, Underline, TextAlign, Link, Image],
    autofocus: "end",
  });

  return (
    <>
      <div className="container">
        <div className="editor-wrapper">
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  );
};
