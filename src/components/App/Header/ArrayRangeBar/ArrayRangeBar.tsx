import * as React from 'react';
import {ReactElement} from 'react';
import checkIfSortRunningAndGenerateColors from '../../../../utils/checkIfSortRunningAndGenerateColors';

interface ArrayRangeBarProps {
    changeArraySize: Function
    isSortRunning: boolean
}

function ArrayRangeBar({changeArraySize, isSortRunning}: ArrayRangeBarProps): ReactElement {
    const {cursor, color, isDisabled} = checkIfSortRunningAndGenerateColors(isSortRunning);

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
                style={{cursor, background: color}}
                onChange={(event) => changeArraySize(event)}
                disabled={isDisabled}/>
        </div>
    )
}

export default ArrayRangeBar