export const CHANGE_ARRAY_SIZE = 'CHANGE_ARRAY_SIZE';

interface ChangeArraySizeAction {
    type: typeof CHANGE_ARRAY_SIZE
    payload: number
}

export type ChangeArraySizeType = ChangeArraySizeAction