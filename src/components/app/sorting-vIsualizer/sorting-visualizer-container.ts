import {connect} from 'react-redux';
import SortingVisualizer from './sorting-vizualizer';

const mapStateToProps = state => {
    return {
        array: state.array
    }
};


export default connect(mapStateToProps, {})(SortingVisualizer);