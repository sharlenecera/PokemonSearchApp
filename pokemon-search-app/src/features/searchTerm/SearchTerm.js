import React from "react";

import {changeSearchTerm, clearSearchTerm} from './searchTermSlice';

export const SearchTerm = ({searchTerm, dispatch}) => {
    const onChangeSearchTermHandler = e => {
        const newSearchTerm = e.target.value;
        dispatch(changeSearchTerm(newSearchTerm));
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }

    return (
        <div id='searchbar-container'>
            <input 
                id='search'
                type='text'
                value={searchTerm}
                onChange={onChangeSearchTermHandler}
                placeholder='Search for a Pokemon'
            />
            {searchTerm.length > 0 && (<button type='button'
                onClick={onClearSearchTermHandler}
                id='clear-search-button'>
                Clear Search
            </button>)}
        </div>
    )
}

