import {loadData} from './allPokemonSlice';
import React, { useEffect } from 'react';
import PokemonDisplay from '../../components/PokemonDisplay';

//allPokemon is all the viisble pokemon
export default function AllPokemon ({allPokemon, dispatch, pageNumber}) {

    const onFirstRender = () => {
        dispatch(loadData());
    }

    useEffect(onFirstRender, []);

    return (
        
        <div id='all-pokemon-container'>
            {/* {allPokemon.map(p=>(<Pokemon pokemon={p} >

            </Pokemon>))} */}
            <PokemonDisplay pokemons={allPokemon} pageNumber={pageNumber}/>
        </div>
    )
}