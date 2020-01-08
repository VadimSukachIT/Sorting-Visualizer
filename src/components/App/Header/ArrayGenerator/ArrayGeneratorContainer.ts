import {connect} from 'react-redux';
import ArrayGenerator from './ArrayGenerator';
import {generateArray} from '../../../../actions/generateArray/generateArray';
import bubbleSort from '../../../../sorts/bubble-sort';
import {setSortedElements} from '../../../../actions/setSortedElements/setSortedElements';
import heapSort from '../../../../sorts/heap-sort';
import quickSort from '../../../../sorts/quick-sort';
import mergeSort from '../../../../sorts/merge-sort';


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
                    currentSortMethod === 'heap' ? heapSort :
                        currentSortMethod === 'quick' ? quickSort :
                            currentSortMethod === 'merge' ? mergeSort : null;

            sortMethod(array, dispatch, speed);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayGenerator);