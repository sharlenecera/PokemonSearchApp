import '../App.css';
import React, { useEffect } from 'react';
import AllPokemon from '../features/allPokemon/AllPokemon';
import SearchTerm from '../features/searchTerm/SearchTerm';
import PageNumber from '../features/pageNumber/PageNumber';
import { changeTotalPages } from "../features/pageNumber/pageNumberSlice";

const getFilteredPokemon = (pokemons, searchTerm) => {
  return pokemons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

function App({state, dispatch}) {
  const visiblePokemon = getFilteredPokemon(state.allPokemon, state.searchTerm);
  
  const onRerender = () => {
    dispatch(changeTotalPages((Math.floor((visiblePokemon.length - 1) / 10)+1)));
    console.log(`new total pages: ${(Math.floor((visiblePokemon.length - 1) / 10)+1)}`)
  }

  useEffect(onRerender, [state.searchTerm]);

  return (
    <main>
      <h1>Pokemon Search App</h1>
      <section>
        <h2>Search</h2>
        <SearchTerm 
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section>
      <section>
        <h2>All Pokemon</h2>
        <AllPokemon 
          allPokemon={visiblePokemon}
          dispatch={dispatch}
          pageNumber={state.pageNumber.currentPage}
        />
      </section>
      <PageNumber 
        pageNumber={state.pageNumber.currentPage}
        totalPageNumber={state.pageNumber.totalPageNumber}
        dispatch={dispatch}
      />
    </main>
  );
}

export default App;
