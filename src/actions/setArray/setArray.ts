import {SET_ARRAY, SetArrayType} from './setArrayType';

export const setArray = (array: Array<number>): SetArrayType => {
    return {
        type: SET_ARRAY,
        payload: array
    }
};

