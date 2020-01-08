import {SetCurrentSortMethodType} from './setCurrentSortMethodType'

export const SET_CURRENT_SORT_METHOD = 'SET_CURRENT_SORT_METHOD';

export const setCurrentSortMethod = (sortMethod: string)  : SetCurrentSortMethodType=> {
    return {
        type: SET_CURRENT_SORT_METHOD,
        payload: sortMethod
    }
};

