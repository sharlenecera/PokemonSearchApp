import React from "react";
import Pokemon from "./Pokemon";
import './pokemon.app.css';

const pokemonsToDisplay = (pokemons, pageNumber)=>{
    const total = pokemons.length;
    const startIndex = (pageNumber-1)*10;
    let indexToAdd = startIndex;
    let toDisplay = [];
    let count = 0;
    while(indexToAdd<total && count <10){
        toDisplay.push(pokemons[indexToAdd]);
        count ++;
        indexToAdd++;
    }
    return toDisplay;
}

const PokemonDisplay = ({pokemons, pageNumber}) => {
    // add logic for showing only 10 at a time depending on page number
    // assume we are given just the page number to calculate what pokemons to display from the visiblePokemons passed in as a prop
    // assume pageNumber is always valid
    const pokemonsOnPage = pokemonsToDisplay(pokemons, pageNumber);
    return (
        <div className="pokemon-display">
            {pokemonsOnPage.map(p => (<Pokemon pokemon={p}/>))}
        </div>
    )
}

export default PokemonDisplay;