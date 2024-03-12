import React from "react";

export default function Pokemon({pokemon,children}) {
    return (
        <div key={pokemon.id} className="pokemon" tabIndex={0}>
            <span className="pokemon-container">
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <h4 className="pokemon-height">{pokemon.height}</h4>
                <h4 className="pokemon-mass">{pokemon.mass}</h4>
                <h4 className="pokemon-hair-color">{pokemon.hairColor}</h4>
                <h4 className="pokemon-skin-color">{pokemon.skinColor}</h4>
                <h4 className="pokemon-eye-color">{pokemon.eyeColor}</h4>
                <h4 className="pokemon-birth-year">{pokemon.birthYear}</h4>
                <h4 className="pokemon-gender">{pokemon.gender}</h4>
               
               
            </span>
            {children}
        </div>
    );
}
