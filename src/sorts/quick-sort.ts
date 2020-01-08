import {handleDispatchPool} from '../utils/handleDispatchPool';
import {setSwappingElements} from '../actions/setSwappingElements/setSwappingElements';
import {setArray} from '../actions/setArray/setArray';
import {setSortedElements} from '../actions/setSortedElements/setSortedElements';
import {setComparedElements} from '../actions/setComparedElements/setComparedElements';
import {setSortRunning} from '../actions/setSortRunning/setSortRunning';

function quickSort(stateArray, dispatch, speed) {
    dispatch(setSortRunning(true));
    let array = stateArray.slice(0);
    let toDispatch = [];
    quickSortHelper(array, 0, array.length - 1, toDispatch);
    handleDispatchPool(toDispatch, dispatch, array, speed);
    return array;
}

function quickSortHelper(array, start, end, toDispatch) {
    if (start >= end) {
        toDispatch.push({functionToDispatch: setSortedElements, payload: start});
        return;
    }
    let pivot = start,
        left = start + 1,
        right = end;
    toDispatch.push({functionToDispatch: setComparedElements, payload: [left, right]});
    while (right >= left) {
        if (array[right] < array[pivot] && array[left] > array[pivot]) {
            toDispatch.push({functionToDispatch: setSwappingElements, payload: [left, right]});

            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            toDispatch.push({functionToDispatch: setArray, payload: array.slice()});
            toDispatch.push({functionToDispatch: setComparedElements, payload: []});
            toDispatch.push({functionToDispatch: setSwappingElements, payload: []});
        }
        if (array[right] >= array[pivot]) {
            right--;
        }
        if (array[left] <= array[pivot]) {
            left++;
        }
        if (right >= left) {
            toDispatch.push({functionToDispatch: setComparedElements, payload: [left, right]});
        }
    }
    if (pivot !== right) {
        toDispatch.push({functionToDispatch: setSwappingElements, payload: [pivot, right]});
        let temp = array[right];
        array[right] = array[pivot];
        array[pivot] = temp;
        toDispatch.push({functionToDispatch: setSwappingElements, payload: []});
        toDispatch.push({functionToDispatch: setComparedElements, payload: []});
        toDispatch.push({functionToDispatch: setArray, payload: array.slice()});

        toDispatch.push({functionToDispatch: setSortedElements, payload: right});
    }
    quickSortHelper(array, start, right - 1, toDispatch);
    quickSortHelper(array, right + 1, end, toDispatch);
}


export default quickSort;