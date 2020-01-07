import * as React from 'react';

interface ArrayGeneratorProps {
    generateArray: any
    sortArray: any
    array: any,
    speed: any,
    currentSortMethod: any
    isSortRunning: any
}

function ArrayGenerator({array, generateArray, sortArray, speed, isSortRunning, currentSortMethod}: ArrayGeneratorProps) {
    const cursor = isSortRunning ? 'default' : 'pointer';
    const color = isSortRunning ? 'rgb(255,0,24)' : 'rgb(255,253,234)';
    const isDisabled: any = isSortRunning ? 'disabled' : null;

    return (
        <div className="array-generator ">
            <div className="buttons">
                <div>
                    <button
                        className="generate-array-button"
                        type="button"
                        onClick={generateArray}
                        style={{color, cursor}}
                        disabled={isDisabled}>
                        Generate New Array
                    </button>
                </div>
                <div className="sort-button-block">
                    <button
                        className="sort-array-button"
                        type="button"
                        onClick={() => sortArray(array, speed, currentSortMethod)}
                        style={{color, cursor}}
                        disabled={isDisabled}>
                        Sort Array
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ArrayGenerator