import * as React from 'react'
import {ReactElement} from 'react';
import ArrayRangeBar from './ArrayRangeBar'
import ArrayGenerator from './ArrayGenerator'
import SortsList from './SortsList'

const Header: React.FunctionComponent = (): ReactElement => {
    return (
        <header>
            <ArrayGenerator/>
            <ArrayRangeBar/>
            <SortsList/>
        </header>
    )
};

export default Header