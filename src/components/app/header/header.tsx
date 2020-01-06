import * as React from 'react'
import ArrayRangeBar from './array-range-bar'
import ArrayGenerator from './array-generator'
import SortsList from './sorts-list'

const Header: React.FunctionComponent = () => {
    return (
        <header>
            <ArrayGenerator/>
            <ArrayRangeBar/>
            <SortsList/>
        </header>
    )
};

export default Header