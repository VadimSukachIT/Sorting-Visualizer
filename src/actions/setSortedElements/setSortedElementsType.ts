export const SET_SORTED_ELEMENTS = 'SET_SORTED_ELEMENTS';

interface SetSortedElementsAction {
    type: typeof SET_SORTED_ELEMENTS,
    payload: Array<number>
}

export type SetSortedElementsType = SetSortedElementsAction