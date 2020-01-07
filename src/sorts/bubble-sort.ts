import {setArray} from '../actions/setArray';
import {setSwappingElements} from '../actions/setSwappingElements';
import {setSortedElements} from '../actions/setSortedElementsIndexes';
import {setSortRunning} from '../actions/setSortRunning';
import {setComparedElements} from '../actions/setComparedElements';

function bubbleSort(stateArray, dispatch, speed) {
    dispatch(setSortRunning(true));
    let array = stateArray.slice(0),
        dispatchPool = [],
        sorted = false,
        round = 0;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1 - round; i++) {
            dispatchPool.push({functionToDispatch: setComparedElements, payload: [i, i + 1]});
            if (array[i] > array[i + 1]) {
                dispatchPool.push({functionToDispatch: setComparedElements, payload:[]});
                dispatchPool.push({functionToDispatch: setSwappingElements, payload: [i, i + 1]});
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
                dispatchPool.push({functionToDispatch: setArray, payload: array.slice()});
                dispatchPool.push({functionToDispatch: setSwappingElements, payload: []});
            }
        }
        dispatchPool.push({functionToDispatch: setSortedElements, payload: array.length - 1 - round});
        round++;
    }
    handleDispatchPool(dispatchPool, dispatch, array, speed);
    return array;
}


function handleDispatchPool(dispatchPool, dispatch, array, speed) {
    if (!dispatchPool.length) {
        dispatch(setComparedElements(array.map((num, index) => index)));
        setTimeout(() => {

            dispatch(setComparedElements([]));
            dispatch(setSortedElements(array.map((num, index) => index)));
            dispatch(setSortRunning(false));
        }, 1000);
        return;
    }
    const {functionToDispatch, payload} = dispatchPool.shift();
    dispatch(functionToDispatch(payload));
    setTimeout(() => handleDispatchPool(dispatchPool, dispatch, array, speed), speed)

}


export default bubbleSort;
