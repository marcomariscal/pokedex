import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ characters }) => (
  <>
    {characters.map((character) => (
      <Pokecard
        key={character.id}
        id={character.id}
        name={character.name}
        type={character.type}
        base_experience={character.base_experience}
      />
    ))}
  </>
);

export default Pokedex;
