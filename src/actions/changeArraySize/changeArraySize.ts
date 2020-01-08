import {ChangeArraySizeType, CHANGE_ARRAY_SIZE} from './changeArraySizeType';

export function changeArraySize(size: number): ChangeArraySizeType {
    return {
        type: CHANGE_ARRAY_SIZE,
        payload: size
    }
}

