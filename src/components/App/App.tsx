import * as React from 'react'
import {ReactElement} from 'react';
import SortingVisualizer from './sorting-visualizer';
import Header from './header';
import './App.less'


const App: React.FunctionComponent = (): ReactElement => {
    return (
        <div className="main-page">
            <Header/>
            <SortingVisualizer/>
        </div>
    )
};

export default App;
