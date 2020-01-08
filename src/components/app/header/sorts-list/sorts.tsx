import * as React from 'react'
import checkIfSortRunningAndGenerateColors from '../../../../utils/checkIfSortRunningAndGenerateColors';

function SortsList({setCurrentSortMethod, isSortRunning, currentSortMethod}) {
    const {cursor, color, isDisabled} = checkIfSortRunningAndGenerateColors(isSortRunning);
    const currentSortColor = 'red';
    return (
        <div className="sorts-bar block">
            <button className="sort"
                    onClick={() => {
                        setCurrentSortMethod('merge')
                    }}
                    style={{color: currentSortMethod === 'merge' ? currentSortColor : color, cursor}}
                    disabled={isDisabled}>
                Merge Sort
            </button>
            <button className="sort"
                    onClick={() => {
                        setCurrentSortMethod('quick')
                    }}
                    style={{color: currentSortMethod === 'quick' ? currentSortColor : color, cursor}}
                    disabled={isDisabled}>
                Quick Sort
            </button>
            <button className="sort"
                    onClick={() => {
                        setCurrentSortMethod('bubble')
                    }}
                    style={{color: currentSortMethod === 'bubble' ? currentSortColor : color, cursor}}
                    disabled={isDisabled}>
                Bubble Sort
            </button>
            <button className="sort"
                    onClick={() => {
                        setCurrentSortMethod('heap')
                    }}
                    style={{color: currentSortMethod === 'heap' ? currentSortColor : color, cursor}}
                    disabled={isDisabled}>
                Heap Sort
            </button>
        </div>
    )
};

export default SortsList