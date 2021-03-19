import React from "react";
import favorite from "../assets/favorite.svg";
import addToFavorite from "../assets/add-to-favorite.svg";

const AddFavorite = (props) => {
  let { handleClick } = props;
  let { character } = props.character;

  console.log(character);
  return (
    <div>
      {props.stateFav === false ? (
        <img
          className="favorite"
          src={favorite}
          alt="agregar a favoritos"
          onClick={() => handleClick(character)}
        />
      ) : (
        <img
          className="favorite"
          src={addToFavorite}
          alt="agregar a favoritos"
          onClick={() => handleClick(character)}
        />
      )}
    </div>
  );
};

export default AddFavorite;
