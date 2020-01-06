import {connect} from 'react-redux';
import ArrayGenerator from './array-generator';
import {generateArray} from '../../../../actions/generateArray';
import bubbleSort from '../../../../sorts/bubble-sort';


const mapStateToProps = ({array, speed}) => {
    return {
        array,
        speed
    }
};


const mapDispatchToProps = dispatch => {
    return {
        generateArray: () => {
            dispatch(generateArray())
        },
        sortArray: (array, speed) => {
            bubbleSort(array, dispatch, speed);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayGenerator);