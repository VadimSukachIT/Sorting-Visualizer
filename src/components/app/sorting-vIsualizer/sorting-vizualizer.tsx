import * as React from 'react'
import generateID from '../../../utils/generateID';
import './sorting-visualizer.less'

interface SortingVisualizerProps {
    array: Array<number>
}

function SortingVisualizer ({array}: SortingVisualizerProps) {
    const numWidth = Math.floor(window.outerWidth / (array.length * 3));
    return (
        <div className="sorting-visualizer">
            {
                array.map(number => {
                    return <div
                        className="arrayNumber"
                        key={generateID()}
                        style={{height: `${number}px`, width: numWidth}}>
                    </div>
                })
            }
        </div>
    )
}

export default SortingVisualizer