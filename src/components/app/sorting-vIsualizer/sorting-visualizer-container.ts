import {connect} from 'react-redux';
import SortingVisualizer from './sorting-vizualizer';

const mapStateToProps = state => {
    return {
        array: state.array,
        swappingElements: state.swappingElements,
        sortedElements: state.sortedElements,
        isSortRunning: state.isSortRunning,
        comparedElements: state.comparedElements
    }
};


export default connect(mapStateToProps, {})(SortingVisualizer);