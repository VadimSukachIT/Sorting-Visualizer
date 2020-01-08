export const SET_COMPARED_ELEMENTS = 'SET_COMPARED_ELEMENTS';

interface SetComparedElementsAction {
    type: typeof SET_COMPARED_ELEMENTS,
    payload: Array<number>
}

export type SetComparedElementsType = SetComparedElementsAction