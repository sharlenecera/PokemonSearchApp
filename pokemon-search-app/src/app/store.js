import { configureStore } from '@reduxjs/toolkit';

//import reducers from the slice files
import {allPokemonReducer} from '../features/allPokemon/allPokemonSlice';
import {searchTermReducer} from '../features/searchTerm/searchTermSlice';

export const store = configureStore({
    reducer: {
        allPokemon: allPokemonReducer,
        searchTerm: searchTermReducer
    }
})
    
    