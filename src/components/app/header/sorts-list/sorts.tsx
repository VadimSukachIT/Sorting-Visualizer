import * as React from 'react'

function SortsList({setCurrentSortMethod, isSortRunning, currentSortMethod}) {
    const color = isSortRunning ? 'rgb(255,0,24)' : 'rgb(255,253,234)';
    const cursor = isSortRunning ? 'default' : 'pointer';
    const isDisabled: any = isSortRunning ? 'disabled' : null;
    const currentSortColor = '#000';
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