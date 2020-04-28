import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience: exp }) => {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h5>{name}</h5>
      <img src={image} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {exp}</p>
    </div>
  );
};

export default Pokecard;
