import { useState } from "react";

const URLScrapper = () => {
  const [value, setValue] = useState("");
  const [src, setSrc] = useState("");

  const fetchThumbnail = async (url: string) => {
    try {
      console.log(url);
      // const res = await supabase.functions.invoke("hello-world", {method: "POST", body: {name: "sheheem"}})
      const response = await fetch(`https://corsanywhere.herokuapp.com/${url}`);
      const res = await response.json();
      console.log("res", res);
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
