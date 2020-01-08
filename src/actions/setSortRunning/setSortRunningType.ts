export const SET_SORT_RUNNING = 'SET_SORT_RUNNING';

interface SetSortRunningAction {
    type: typeof SET_SORT_RUNNING,
    payload: boolean
}

export type SetSortRunningType = SetSortRunningAction