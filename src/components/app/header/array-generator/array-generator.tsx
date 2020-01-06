import * as React from 'react';
import {sortArray} from '../../../../actions/sortArray';

interface ArrayGeneratorProps {
    generateArray: any
    sortArray: any
    array: any,
    speed: any
}

function ArrayGenerator({array, generateArray, sortArray, speed}: ArrayGeneratorProps) {
    return (
        <div className="array-generator ">
            <div className="buttons">
                <div>
                    <button
                        className="generate-array-button"
                        type="button"
                        onClick={generateArray}>
                        Generate New Array
                    </button>
                </div>
                <div className="sort-button-block">
                    <button
                        className="sort-array-button"
                        type="button"
                        onClick={ () => sortArray(array, speed)}>
                        Sort Array
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ArrayGenerator