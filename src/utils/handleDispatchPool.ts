import {setComparedElements} from '../actions/setComparedElements/setComparedElements';
import {setSortedElements} from '../actions/setSortedElements/setSortedElements';
import {setSortRunning} from '../actions/setSortRunning/setSortRunning';
import {Dispatch} from 'redux';

export function handleDispatchPool(dispatchPool: any, dispatch: Dispatch, array: Array<number>, speed: number) {
    if (!dispatchPool.length) {
        dispatch(setComparedElements(array.map((num, index) => index)));
        setTimeout(() => {
            dispatch(setComparedElements([]));
            dispatch(setSortedElements(array.map((num, index) => index)));
            dispatch(setSortRunning(false));
        }, 1500);
        return;
    }
    const {functionToDispatch, payload} = dispatchPool.shift();
    dispatch(functionToDispatch(payload));
    setTimeout(() => handleDispatchPool(dispatchPool, dispatch, array, speed), speed)
}
