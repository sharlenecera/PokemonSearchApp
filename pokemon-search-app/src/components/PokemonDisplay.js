import React from "react";
import Pokemon from "./Pokemon";

const PokemonDisplay = ({pokemons}) => {
    // add logic for showing only 10 at a time depending on page number
    return (
        <div className="pokemon-display">
            {pokemons.map(p => (<Pokemon pokemon={p}/>))}
        </div>
    )
}

export default PokemonDisplay;