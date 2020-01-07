import {connect} from 'react-redux'
import SortsList from './sorts';

import {setCurrentSortMethod} from '../../../../actions/setCurrentSortMethod';

const mapStateToProps = ({isSortRunning, currentSortMethod}) => {
    return {
        isSortRunning, currentSortMethod
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setCurrentSortMethod: (sortMethod) => {
            dispatch(setCurrentSortMethod(sortMethod))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SortsList);