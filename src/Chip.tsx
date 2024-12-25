import React from "react";

export const POKEMON_TYPES = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const Chip = ({ label, textColor = "#000000", style = {}, className = "" }) => {
  const [type1, type2] = label.split("/");

  const chipStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 12px",
    color: textColor,
    border: "1.5px solid whitesmoke",
    borderRadius: "16px",
    fontSize: "14px",
    margin: "4px",
    marginRight: "0px",
    maxWidth: "100%",
    ...style,
  };

  return (
    <>
      <div
        style={{
          ...chipStyle,
          backgroundColor:
            POKEMON_TYPES[type1.toLowerCase()] || POKEMON_TYPES.normal,
        }}
        className={className}
      >
        <span>{type1}</span>
      </div>
      {type2 && (
        <div
          style={{
            ...chipStyle,
            backgroundColor:
              POKEMON_TYPES[type2.toLowerCase()] || POKEMON_TYPES.normal,
          }}
          className={className}
        >
          <span>{type2}</span>
        </div>
      )}
    </>
  );
};

export default Chip;
