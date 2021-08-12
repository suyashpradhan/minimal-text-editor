import "./Meme.css";
import { fetchMeme } from "../../utils/fetch-util";

//Meme Component
export const Meme = ({ editor }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  //Upload Meme Function
  const uploadMeme = async () => {
    try {
      let regex = "";
      let editorContent = editor.getHTML();

      editorContent = editorContent.replace(
        /\{\{(.+?)_meme\}\}/,
        (_, keyword) => {
          regex = keyword;
          return "";
        }
      );

      const { data } = await fetchMeme({ meme: regex, API_KEY });

      //Appending Meme to Editor Content
      if (data) {
        editorContent += `<img className="memeImage" src="${data}" />`;

        // Sets Editor To Default State
        editor.commands.setContent(editorContent);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="editor-column editor-fifth-column">
        <button className="button button-primary" onClick={uploadMeme}>
          Add Meme
        </button>
      </div>
    </>
  );
};
