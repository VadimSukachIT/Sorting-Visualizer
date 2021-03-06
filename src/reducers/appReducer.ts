import generateArray from '../utils/generateArray';
import {GENERATE_ARRAY} from '../actions/generateArray/generateArrayType';
import {CHANGE_ARRAY_SIZE} from '../actions/changeArraySize/changeArraySizeType';
import {SET_CURRENT_SORT_METHOD} from '../actions/setCurrentSortMethod/setCurrentSortMethodType';
import {SET_ARRAY} from '../actions/setArray/setArrayType';
import {SET_SWAPPING_ELEMENTS} from '../actions/setSwappingElements/setSwappingElementsType';
import {SET_SORTED_ELEMENTS} from '../actions/setSortedElements/setSortedElementsType';
import {SET_SORT_RUNNING} from '../actions/setSortRunning/setSortRunningType';
import {SET_COMPARED_ELEMENTS} from '../actions/setComparedElements/setComparedElementsType';
import {AppState} from './appState';
import {AppReducerActionType} from './appReducerActionType';


const initialState: AppState = {
    array: generateArray(50),
    arrayLength: 50,
    currentSortMethod: 'bubble',
    isSortRunning: false,
    speed: 300 - 50 * 4 > 0 ? 400 - 50 * 4 : 0,
    comparedElements: [],
    swappingElements: [],
    sortedElements: []
};


const appReducer = (state = initialState, action: AppReducerActionType): AppState => {
    switch (action.type) {
        case GENERATE_ARRAY: {
            return Object.assign({}, state, {
                array: generateArray(state.arrayLength)
            });
        }
        case CHANGE_ARRAY_SIZE: {
            const arrayLength = action.payload;

            return Object.assign({}, state, {
                array: generateArray(arrayLength),
                arrayLength: arrayLength,
                speed: 400 - arrayLength * 4 - 50 > 0 ? 400 - arrayLength * 4 - 50 : 0
            });
        }
        case SET_CURRENT_SORT_METHOD: {
            if (action.payload === state.currentSortMethod) {
                return state;
            }
            return Object.assign({}, state, {
                currentSortMethod: action.payload
            });
        }
        case SET_ARRAY: {
            return Object.assign({}, state, {
                array: action.payload
            });
        }
        case SET_SWAPPING_ELEMENTS: {
            return Object.assign({}, state, {
                swappingElements: action.payload
            });
        }
        case SET_SORTED_ELEMENTS: {
            return Object.assign({}, state, {
                sortedElements: action.payload === null ? [] : state.sortedElements.concat(action.payload)
            });

        }
        case SET_SORT_RUNNING: {
            return Object.assign({}, state, {
                isSortRunning: action.payload
            });
        }
        case SET_COMPARED_ELEMENTS: {
            return Object.assign({}, state, {
                comparedElements: action.payload
            });
        }
        default:
            return state;
    }
};

export default appReducer;

