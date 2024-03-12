import {loadData} from './allPokemonSlice';
import React, { useEffect } from 'react';
import Pokemon from '../../components/Pokemon';


export const AllPokemon = ({allPokemon, dispatch}) => {
    const onFirstRender = () => {
        dispatch(loadData());
    }

    useEffect(onFirstRender, []);
    

    return (
        <div id='all-pokemon-container'>
            {allPokemon.map(p=>(<Pokemon pokemon={p} >

            </Pokemon>))}
        </div>
    )
}