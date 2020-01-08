export const SET_CURRENT_SORT_METHOD = 'SET_CURRENT_SORT_METHOD';

interface SetCurrentSortMethodAction {
    type: typeof SET_CURRENT_SORT_METHOD,
    payload: string
}

export type SetCurrentSortMethodType = SetCurrentSortMethodAction