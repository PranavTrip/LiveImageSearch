import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [image, setImage] = useState("");

  const results = (event) => {
    const data = event.target.value;
    setImage(data);
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="Type here to search..."
          onChange={results}
          value={image}
        />
      </div>
      {image === "" ? <h1>Please type something in the SearchBox to see results !</h1> : <SearchResult name={image} />}
    </>
  );
};

export default Search;
