import {SetComparedElementsType} from './setComparedElementsType';

export const SET_COMPARED_ELEMENTS = 'SET_COMPARED_ELEMENTS';

export const setComparedElements = (compared: Array<number>) : SetComparedElementsType => {
    return {
        type: SET_COMPARED_ELEMENTS,
        payload: compared
    }
};

