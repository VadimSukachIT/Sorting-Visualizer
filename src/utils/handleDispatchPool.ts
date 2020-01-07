import {setComparedElements} from '../actions/setComparedElements';
import {setSortedElements} from '../actions/setSortedElementsIndexes';
import {setSortRunning} from '../actions/setSortRunning';

export function handleDispatchPool(dispatchPool, dispatch, array, speed) {
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
