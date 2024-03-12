import '../App.css';
import { AllPokemon } from '../features/allPokemon/AllPokemon';
import PokemonDisplay from '../components/PokemonDisplay';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

const getFilteredPokemon = (pokemons, searchTerm) => {
  return pokemons.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

function App({state, dispatch}) {
  const visiblePokemon = getFilteredPokemon(state.allPokemon, state.searchTerm);
  
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
        <PokemonDisplay pokemons={visiblePokemon} />
        <AllPokemon 
          allPokemon={visiblePokemon}
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}

export default App;
