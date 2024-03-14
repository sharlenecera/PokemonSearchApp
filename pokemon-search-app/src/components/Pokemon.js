import React from "react";
import './pokemon.app.css';

export default function Pokemon({pokemon}) {
    return (
        <div key={pokemon.id} className="pokemon" tabIndex={0}>
            <span className="pokemon-container">
                <h3 className="pokemon-name" id='name'>Name: {pokemon.name}</h3>
                <h4 className="pokemon-height" id='height'>Height: {pokemon.height}</h4>
                <h4 className="pokemon-mass" id='mass'>Mass: {pokemon.mass} kg</h4>
                <h4 className="pokemon-hair-color"id='hair-color'>Hair color: {pokemon.hair_color}</h4>
                <h4 className="pokemon-skin-color" id='skin-color'>Skin color: {pokemon.skin_color}</h4>
                <h4 className="pokemon-eye-color" id='eye-color'>Eye color: {pokemon.eye_color}</h4>
                <h4 className="pokemon-birth-year" id='birth-year'>Birth year: {pokemon.birth_year}</h4>
                <h4 className="pokemon-gender" id='gender'>Gender: {pokemon.gender}</h4>
            </span>
        </div>
    );
}
