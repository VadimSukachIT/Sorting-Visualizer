import {SetSortedElementsType} from './setSortedElementsType';

export const SET_SORTED_ELEMENTS = 'SET_SORTED_ELEMENTS';

export const setSortedElements = (sortedElements: Array<number>): SetSortedElementsType => {
    return {
        type: SET_SORTED_ELEMENTS,
        payload: sortedElements
    }
};

