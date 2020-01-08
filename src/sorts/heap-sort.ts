import {setComparedElements} from '../actions/setComparedElements/setComparedElements';
import {setSortedElements} from '../actions/setSortedElements/setSortedElements';
import {setSortRunning} from '../actions/setSortRunning/setSortRunning';
import {setArray} from '../actions/setArray/setArray';
import {setSwappingElements} from '../actions/setSwappingElements/setSwappingElements';
import {handleDispatchPool} from '../utils/handleDispatchPool';

function heapSort(inputArray, dispatch, speed) {
    dispatch(setSortRunning(true));

    const dispatchPool = [];
    let array_length = inputArray.length;
    let array = inputArray.slice();
    let counter = 0;

    for (let i = Math.floor(array_length / 2); i >= 0; i -= 1) {
        heap_root(dispatchPool, array, array_length, i)
    }

    for (let i = array.length - 1; i > 0; i--) {
        swap(dispatchPool, array, 0, i);
        array_length--;
        dispatchPool.push({functionToDispatch: setSortedElements, payload: array.length - counter});
        dispatchPool.push({functionToDispatch: setArray, payload: array.slice()});
        counter++;
        heap_root(dispatchPool, array, array_length, 0);
    }


    handleDispatchPool(dispatchPool, dispatch, array, speed);
}

function heap_root(dispatchPool, array, array_length, i) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    dispatchPool.push({functionToDispatch: setComparedElements, payload: [left, right, max]});

    if (left < array_length && array[left] > array[max]) {
        max = left;
    }

    if (right < array_length && array[right] > array[max]) {
        max = right;
    }

    dispatchPool.push({functionToDispatch: setComparedElements, payload: []});

    if (max != i) {
        swap(dispatchPool, array, i, max);
        dispatchPool.push({functionToDispatch: setArray, payload: array.slice()});
        heap_root(dispatchPool, array, array_length, max);
    }
}

function swap(dispatchPool, array, index_A, index_B) {
    dispatchPool.push({functionToDispatch: setSwappingElements, payload: [index_A, index_B]});
    let temp = array[index_A];
    array[index_A] = array[index_B];
    array[index_B] = temp;
    dispatchPool.push({functionToDispatch: setSwappingElements, payload: []});

}


export default heapSort;