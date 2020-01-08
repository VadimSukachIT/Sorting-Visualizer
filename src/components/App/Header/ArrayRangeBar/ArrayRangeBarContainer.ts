import {connect} from 'react-redux'
import {changeArraySize} from '../../../../actions/changeArraySize/changeArraySize';
import {setSortedElements} from '../../../../actions/setSortedElements/setSortedElements';
import ArrayRangeBar from './ArrayRangeBar';

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