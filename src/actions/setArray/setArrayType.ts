export const SET_ARRAY = 'SET_ARRAY';

interface SetArrayAction {
    type: typeof SET_ARRAY,
    payload: Array<number>
}

export type SetArrayType = SetArrayAction