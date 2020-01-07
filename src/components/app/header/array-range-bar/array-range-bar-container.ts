import {connect} from 'react-redux'
import {changeArraySize} from '../../../../actions/changeArraySize';
import ArrayGenerator from '../array-generator/array-generator';
import ArrayRangeBar from './array-range-bar';
import {setSortedElements} from '../../../../actions/setSortedElements';

const mapDispatchToProps = dispatch => {
    return {
        changeArraySize: (event) => {
            dispatch(setSortedElements(null));
            dispatch(changeArraySize(event.target.value))
        }
    }
};

const mapStateToProps = ({isSortRunning}) => {
    return {
        isSortRunning
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArrayRangeBar);