import React, {useEffect} from "react";
import { nextPage, previousPage } from "./pageNumberSlice";
import './pageNumber.app.css';

const PageNumber = ({pageNumber, totalPageNumber, dispatch}) => {
    const onPrevPageClickHandler = () => {
        dispatch(previousPage());
    }
    const onNextPageClickHandler = () => {
        dispatch(nextPage());
    }

    return (
        <div className="pagination">
            <button 
                id='previous'
                disabled={pageNumber === 1 ? true: false}
                onClick={onPrevPageClickHandler}
            >Back</button>
            <p>Page {pageNumber} of {totalPageNumber}</p>
            <button
                id='next'
                disabled={pageNumber === totalPageNumber ? true: false} 
                onClick={onNextPageClickHandler}
            >Next</button>
        </div>
    );
}

export default PageNumber;