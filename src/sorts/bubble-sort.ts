import {setArray} from '../actions/setArray/setArray';
import {setSwappingElements} from '../actions/setSwappingElements/setSwappingElements';
import {setSortedElements} from '../actions/setSortedElements/setSortedElements';
import {setSortRunning} from '../actions/setSortRunning/setSortRunning';
import {setComparedElements} from '../actions/setComparedElements/setComparedElements';
import {handleDispatchPool} from '../utils/handleDispatchPool';
import {Dispatch} from 'redux';

function bubbleSort(stateArray: Array<number>, dispatch: Dispatch, speed: number) {
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
                dispatchPool.push({functionToDispatch: setComparedElements, payload: []});
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

export default bubbleSort;
