import axios from "axios";

//Fetch Meme From Server
export const fetchMeme = async ({ meme, key }) => {
  const API_URL = `https://g.tenor.com/v1/search?q=${meme}&key=${key}&limit=1`;

  if (meme) {
    const {
      data: { results },
    } = await axios.get(API_URL);
    const data = results[0].media[0]?.gif?.preview;
    return { data };
  }
  return { data: null };
};
