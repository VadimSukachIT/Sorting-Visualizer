import {connect} from 'react-redux'
import SortsList from './SortsList';

import {setCurrentSortMethod} from '../../../../actions/setCurrentSortMethod/setCurrentSortMethod';

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