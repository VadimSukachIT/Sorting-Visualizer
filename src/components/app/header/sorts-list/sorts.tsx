import * as React from 'react'

function SortsList({setCurrentSortMethod}) {
    return (
        <div className="sorts-bar block">
            <span className="sort" onClick={() => {setCurrentSortMethod('merge')}}>Merge Sort</span>
            <span className="sort" onClick={() => {setCurrentSortMethod('quick')}}>Quick Sort</span>
            <span className="sort" onClick={() => {setCurrentSortMethod('bubble')}}>Bubble Sort</span>
            <span className="sort"onClick={() => {setCurrentSortMethod('heap')}}>Heap Sort</span>
        </div>
    )
};

export default SortsList