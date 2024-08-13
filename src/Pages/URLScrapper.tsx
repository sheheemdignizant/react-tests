import { useState } from "react";
import urlMetadata from "url-metadata";

const URLScrapper = () => {
  const [value, setValue] = useState("");
  const [src, setSrc] = useState("");

  const fetchThumbnail = async (url: string) => {
    try {
      console.log(url);

      const options = {
        // custom request headers
        // requestHeaders: {
        //   'User-Agent': 'url-metadata/3.0 (npm module)',
        //   'From': 'example@example.com'
        // },
      
        // `fetch` API cache setting for request
        cache: 'no-cache',
      
        // `fetch` API mode (ex: 'cors', 'no-cors', 'same-origin', etc)
        mode: 'cors',
      
        // charset to decode response with (ex: 'auto', 'utf-8', 'EUC-JP')
        // defaults to auto-detect in `Content-Type` header or meta tag
        // if none found, default `auto` option falls back to `utf-8`
        // override by passing in charset here (ex: 'windows-1251'):
        decode: 'auto',
      
        // timeout in milliseconds, default is 10 seconds
        timeout: 10000,
      
        // number of characters to truncate description to
        descriptionLength: 750,
      
        // force image urls in selected tags to use https,
        // valid for images & favicons with full paths
        ensureSecureImageRequest: true,
      
        // return raw response body as string
        includeResponseBody: false,
      
        // alternate use-case: pass in `Response` object here to be parsed
        // see example below
        parseResponseObject: undefined,
      };

      const data = await urlMetadata(url, options);
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