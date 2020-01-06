import generateArray from '../utils/generateArray';
import {GENERATE_ARRAY} from '../actions/generateArray';
import {SORT_ARRAY} from '../actions/sortArray';
import {CHANGE_ARRAY_SIZE} from '../actions/changeArraySize';
import {SET_CURRENT_SORT_METHOD} from '../actions/setCurrentSortMethod';
import {SET_ARRAY} from '../actions/setArray';

const initialState = {
    array: generateArray(50),
    arrayLength: 50,
    currentSortMethod: 'bubble',
    isSortRunning: false,
    speed: 400 - 50 * 4 > 0 ? 400 - 50 * 4 : 0

}
;

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATE_ARRAY: {
            return Object.assign({}, state, {
                array: generateArray(state.arrayLength)
            });
        }
        case SORT_ARRAY: {
            console.log('sort array');
            return state;
        }
        case CHANGE_ARRAY_SIZE: {
            const arrayLength = action.size;
            const speed = 400 - arrayLength * 4 - 50 > 0 ? 400 - arrayLength * 4 - 50 : 0;
            return Object.assign({}, state, {
                array: generateArray(arrayLength),
                arrayLength: arrayLength,
                speed
            });
        }
        case SET_CURRENT_SORT_METHOD: {
            if (action.sortMethod === state.currentSortMethod) {
                return state;
            }
            return Object.assign({}, state, {
                currentSortMethod: action.sortMethod
            });
        }
        case SET_ARRAY: {
            return Object.assign({}, state, {
                array: action.array
            });
        }
        default:
            return state;
    }
};