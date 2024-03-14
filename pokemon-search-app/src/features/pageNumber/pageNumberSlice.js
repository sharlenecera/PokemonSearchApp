
export const nextPage = () => {
    return {
        type: 'pageNumber/nextPage'
    }
}
export const previousPage = () => {
    return {
        type: 'pageNumber/previousPage'
    }
}

export const changeTotalPages = newTotalValue => {
    return {
        type: 'pageNumber/changeTotalPages',
        payload: newTotalValue
    }
}

const initialState = {
    currentPage: 1,
    totalPageNumber: 3
};
export const pageNumberReducer = (state=initialState, action) => {
    switch(action.type){
        case 'pageNumber/nextPage':
            return {
                ...state,
                currentPage: state.currentPage + 1, 
                };
        case 'pageNumber/previousPage':
            return {
                ...state,
                currentPage: state.currentPage - 1, 
                };
        case 'pageNumber/changeTotalPages':
            return {
                ...state,
                totalPageNumber: action.payload
            };
        default:
            return state;
    }
}