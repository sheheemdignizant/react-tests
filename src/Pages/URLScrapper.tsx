import { useState } from "react";
import urlMetadata from "url-metadata";

const URLScrapper = () => {
  const [value, setValue] = useState("");
  const [src, setSrc] = useState("");

  const fetchThumbnail = async (url: string) => {
    try {
      console.log(url);

      const data = await urlMetadata("http://127.0.0.1:5173");
      console.log(data, "hi2");

      if (data.image) {
        // Use `data.image` to display the thumbnail
        setSrc(data.image);
      }
    } catch (error) {
      console.log("erro", error);
    }
  };

  const handleScrap = () => {
    setSrc("");
    if (value && value.trim()) {
      fetchThumbnail(value);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="paste link"
        />
        <button onClick={handleScrap}>Scrap</button>
      </div>
      {src && (
        <div>
          <img width={"200px"} src={src} />
          hi
        </div>
      )}
    </div>
  );
};

export default URLScrapper;
