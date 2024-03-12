const initialState = '';
export const searchTermReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchTerm/changeSearchTerm':
            return action.payload;
        case 'searchTerm/clearSearchTerm':
            return '';
        default:
            return state;
    }
};

export function changeSearchTerm(newSearchTerm) {
    return {
        type: 'searchTerm/changeSearchTerm',
        payload: newSearchTerm,
    };
}

export function clearSearchTerm() {
    return {
        type: 'searchTerm/clearSearchTerm',
    };
}
