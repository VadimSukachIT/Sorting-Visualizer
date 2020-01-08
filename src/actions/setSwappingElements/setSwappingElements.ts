import {SetSwappingElementsType} from './setSwappingElementsType';

export const SET_SWAPPING_ELEMENTS = 'SET_SWAPPING_ELEMENTS ';

export const setSwappingElements = (swappers: Array<number>): SetSwappingElementsType => {
    return {
        type: SET_SWAPPING_ELEMENTS,
        payload: swappers
    }
};

