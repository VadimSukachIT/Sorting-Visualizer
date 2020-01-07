import * as React from 'react'
import './sorting-visualizer.less'

interface SortingVisualizerProps {
    array: Array<number>,
    swappingElements: Array<number>,
    sortedElements: Array<number>,
    comparedElements: Array<number>,

    isSortRunning: boolean
}

function SortingVisualizer({array, swappingElements, sortedElements, comparedElements}: SortingVisualizerProps) {
    const numWidth = Math.floor(window.outerWidth / (array.length * 3));

    return (
        <div className="sorting-visualizer">
            {
                array.map((number, index) => {
                    const backgroundColor =
                            comparedElements.includes(index) ? 'rgba(0,237,58,0.8)' :
                                sortedElements.includes(index) ? 'rgba(169, 92, 232, 0.8)' :
                                    'rgba(66, 134, 244, 0.8)';
                    return <div
                        className="arrayNumber"
                        key={index}
                        style={{height: `${number}px`, width: numWidth, backgroundColor}}>
                    </div>
                })
            }
        </div>
    )
}

export default SortingVisualizer