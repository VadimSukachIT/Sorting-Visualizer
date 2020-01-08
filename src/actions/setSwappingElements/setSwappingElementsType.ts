export const SET_SWAPPING_ELEMENTS = 'SET_SWAPPING_ELEMENTS ';

interface SetSwappingElementsAction {
    type: typeof SET_SWAPPING_ELEMENTS,
    payload: Array<number>
}

export type SetSwappingElementsType = SetSwappingElementsAction