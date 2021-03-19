import React, {
  useState,
  useContext,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import ThemeContext from "../context/ThemeContext";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [search, setSearch] = useState("");
  const [stateFav, setStateFav] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const searchInput = useRef(null);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
    setStateFav(!stateFav);
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filteredUsers = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      <div className="Characters">
        {favorites.favorites.map((favorite) => {
          return <li key={favorite.id}>{favorite.name}</li>;
        })}
        {filteredUsers.map((character, index) => {
          return (
            <div
              key={character.id}
              className={
                theme === "bg-light"
                  ? `card-container shadow-light`
                  : `card-container shadow-dark`
              }
            >
              <img width="100%" src={character.image} alt={character.name} />
              <div className="card-info">
                <h2>{character.name}</h2>
                <p>{character.species}</p>
                <p> {character.origin.name} </p>
                <button type="button" onClick={() => handleClick(character)}>
                  agregar
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
