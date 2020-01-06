import * as React from 'react';



function ArrayRangeBar({changeArraySize}) {
    console.log(changeArraySize);
    return (
        <div className="array-range-bar">
            <span className="array-range-text">Change Array Size → </span>
            <input type="range" min="2" max="100" defaultValue="50" onChange={changeArraySize}/>
        </div>
    )
};

export default ArrayRangeBar