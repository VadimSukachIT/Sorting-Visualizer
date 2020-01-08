import {SetSortRunningType} from './setSortRunningType';

export const SET_SORT_RUNNING = 'SET_SORT_RUNNING';

export const setSortRunning = (isSortRunning: boolean): SetSortRunningType => {
    return {
        type: SET_SORT_RUNNING,
        payload: isSortRunning
    }
};

