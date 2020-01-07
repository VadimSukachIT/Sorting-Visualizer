import {connect} from 'react-redux';
import ArrayGenerator from './array-generator';
import {generateArray} from '../../../../actions/generateArray';
import bubbleSort from '../../../../sorts/bubble-sort';
import {setSortedElements} from '../../../../actions/setSortedElementsIndexes';
import heapSort from '../../../../sorts/heap-sort';


const mapStateToProps = ({array, speed, isSortRunning, currentSortMethod}) => {
    return {
        array,
        speed,
        isSortRunning,
        currentSortMethod
    }
};


const mapDispatchToProps = dispatch => {
    return {
        generateArray: () => {
            dispatch(setSortedElements(null));
            dispatch(generateArray())
        },
        sortArray: (array, speed, currentSortMethod) => {
            const sortMethod =
                currentSortMethod === 'bubble' ? bubbleSort :
                    currentSortMethod === 'heap' ? heapSort : null;

            sortMethod(array, dispatch, speed);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayGenerator);