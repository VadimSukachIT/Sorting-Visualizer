import {connect} from 'react-redux'
import {changeArraySize} from '../../../../actions/changeArraySize';
import ArrayGenerator from '../array-generator/array-generator';
import ArrayRangeBar from './array-range-bar';

const mapDispatchToProps = dispatch => {
    return {
        changeArraySize: (event) => {
            dispatch(changeArraySize(event.target.value))
        }
    }
};

export default connect(null, mapDispatchToProps)(ArrayRangeBar);