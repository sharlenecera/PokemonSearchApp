import data from './data';

export const loadData = () => {
    console.log('loading data: ');
    console.log(data);

    return {
        type: 'allPokemon/loadData',
        payload: data
    }
}

const initialState = [];
export const allPokemonReducer = (state=initialState, action) => {
    switch(action.type){
        case 'allPokemon/loadData':
            return action.payload;
        case 'allPokemon/nextPage':
            return state;
        case 'allPokemon/PreviousPage':
            return state;
        default:
            return state;
    }
}