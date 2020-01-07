import * as React from 'react';


function ArrayRangeBar({changeArraySize, isSortRunning}) {
    const cursor = isSortRunning ? 'default' : 'pointer';
    const color = isSortRunning ? 'rgb(255,0,24)' : 'rgb(255,253,234)';
    const isDisabled: any = isSortRunning ? 'disabled': null;
    return (
        <div className="array-range-bar">
            <span
                className="array-range-text"
                style={{color, cursor: 'default'}}>
                Change Array Size →
            </span>
            <input
                type="range"
                min="2"
                max="100"
                defaultValue="50"
                style={{cursor, background:color}}
                onChange={changeArraySize}
                disabled={isDisabled}/>
        </div>
    )
};

export default ArrayRangeBar