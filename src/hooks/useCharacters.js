import { useState, useEffect } from "react";

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, [url]);

  return characters;
};

export default useCharacters;
