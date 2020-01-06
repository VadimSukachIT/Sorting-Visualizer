import {connect} from 'react-redux'
import SortsList from './sorts';

import {setCurrentSortMethod} from '../../../../actions/setCurrentSortMethod';

const mapDispatchToProps = dispatch => {
    return {
        setCurrentSortMethod: (sortMethod) => {
            dispatch(setCurrentSortMethod(sortMethod))
        }
    }
};

export default connect(null, mapDispatchToProps)(SortsList);