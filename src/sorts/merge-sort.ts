import {setSwappingElements} from '../actions/setSwappingElements/setSwappingElements';
import {setArray} from '../actions/setArray/setArray';
import {setSortedElements} from '../actions/setSortedElements/setSortedElements';
import {setComparedElements} from '../actions/setComparedElements/setComparedElements';
import {setSortRunning} from '../actions/setSortRunning/setSortRunning';
import {Dispatch} from 'redux';

function mergeSort(stateArray: Array<number>, dispatch: Dispatch, speed: number) {
    dispatch(setSortRunning(true));
    let array = stateArray.slice(0),
        toDispatch = [];
    let finalArray = mergeSortHelper(array.map((num, idx) => [num, idx]), toDispatch, 0, array.length - 1, {array: array.slice(0)});
    handleDispatch(toDispatch, dispatch, finalArray, speed);
}

function mergeSortHelper(array: Array<any>, toDispatch: Array<any>, start: number, end: number, obj: any) {
    if (array.length === 1) {
        return array;
    }
    let half = Math.floor(array.length / 2),
        first = array.slice(0, half),
        second = array.slice(half),
        indexHalf = Math.floor((end + 1 + start) / 2),
        actualFirst = mergeSortHelper(first, toDispatch, start, indexHalf - 1, obj),
        actualSecond = mergeSortHelper(second, toDispatch, indexHalf, end, obj),
        isFinalMerge = false;
    if (actualFirst.length + actualSecond.length === obj.array.length) isFinalMerge = true;
    return actualSort(actualFirst, actualSecond, toDispatch, obj, start, end, isFinalMerge);
}

function actualSort(first: any, second: any, toDispatch: Array<any>, obj: any, start: any, end: any, isFinalMerge: any) {
    let sortedArray = [];
    let indexToPush = start;
    while (first.length && second.length) {
        toDispatch.push({functionToDispatch: setComparedElements, payload: [first[0][1], second[0][1]]});
        if (first[0][0] <= second[0][0]) {
            indexToPush++;
            sortedArray.push(first.shift());
        } else {
            toDispatch.push({functionToDispatch: setComparedElements, payload: []});

            toDispatch.push({functionToDispatch: setSwappingElements, payload: [first[0][1], second[0][1]]});
            second[0][1] = indexToPush++;
            sortedArray.push(second.shift());
            first.forEach(subArr => subArr[1]++);
            if (start === 0) {
                obj.array = sortedArray.map(subArr => subArr[0]).concat(first.map(subArr => subArr[0])).concat(second.map(subArr => subArr[0])).concat(obj.array.slice(end + 1));
            } else {
                obj.array = obj.array.slice(0, start).concat(sortedArray.map(subArr => subArr[0])).concat(first.map(subArr => subArr[0])).concat(second.map(subArr => subArr[0])).concat(obj.array.slice(end + 1));
            }
            toDispatch.push({functionToDispatch: setArray, payload: obj.array.concat([indexToPush - 1, indexToPush])});
            toDispatch.push({functionToDispatch: setSwappingElements, payload: []});
        }
        if (isFinalMerge) toDispatch.push({functionToDispatch: setSortedElements, payload: [indexToPush - 1]});

    }
    return sortedArray.concat(first).concat(second);
}

function handleDispatch(toDispatch, dispatch, array, speed) {
    if (!toDispatch.length) {
        dispatch(setComparedElements(array.map((num, index) => index)));
        setTimeout(() => {
            dispatch(setComparedElements([]));
            dispatch(setSortedElements(array.map((num, index) => index)));
            dispatch(setSortRunning(false));
        }, 900);
        return;
    }
    const {functionToDispatch, payload} = toDispatch.shift();

    if (functionToDispatch === setArray) {
        let currentToDispatch = payload;
        dispatch(functionToDispatch(currentToDispatch.slice(0, currentToDispatch.length - 2)));
        dispatch(setSwappingElements([]));
        dispatch(setComparedElements([]));
        dispatch(setSwappingElements([currentToDispatch[currentToDispatch.length - 2], currentToDispatch[currentToDispatch.length - 1]]));
        dispatch(setComparedElements([currentToDispatch[currentToDispatch.length - 2], currentToDispatch[currentToDispatch.length - 1]]));
    } else {
        dispatch(functionToDispatch(payload));
    }

    setTimeout(() => {
        handleDispatch(toDispatch, dispatch, array, speed);
    }, speed);
}


export default mergeSort;
