import * as React from 'react'
import Header from './header';

import './app.less'
import SortingVisualizer from './sorting-visualizer';

const App: React.FunctionComponent = () => {
    return (
        <div className="main-page">
            <Header/>
            <SortingVisualizer/>
        </div>
    )
};

export default App;
