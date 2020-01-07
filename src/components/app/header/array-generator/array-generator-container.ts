import {connect} from 'react-redux';
import ArrayGenerator from './array-generator';
import {generateArray} from '../../../../actions/generateArray';
import bubbleSort from '../../../../sorts/bubble-sort';
import {setSortedElements} from '../../../../actions/setSortedElementsIndexes';


const mapStateToProps = ({array, speed, isSortRunning}) => {
    return {
        array,
        speed,
        isSortRunning
    }
};


const mapDispatchToProps = dispatch => {
    return {
        generateArray: () => {
            dispatch(setSortedElements(null));
            dispatch(generateArray())
        },
        sortArray: (array, speed) => {
            bubbleSort(array, dispatch, speed);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayGenerator);