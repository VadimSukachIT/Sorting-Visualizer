import {ChangeArraySizeType} from '../actions/changeArraySize/changeArraySizeType';
import {GenerateArrayType} from '../actions/generateArray/generateArrayType';
import {SetArrayType} from '../actions/setArray/setArrayType';
import {SetComparedElementsType} from '../actions/setComparedElements/setComparedElementsType';
import {SetCurrentSortMethodType} from '../actions/setCurrentSortMethod/setCurrentSortMethodType';
import {SetSortedElementsType} from '../actions/setSortedElements/setSortedElementsType';
import {SetSortRunningType} from '../actions/setSortRunning/setSortRunningType';
import {SetSwappingElementsType} from '../actions/setSwappingElements/setSwappingElementsType';


export type AppReducerActionType =
    ChangeArraySizeType
    | GenerateArrayType
    | SetArrayType
    | SetComparedElementsType
    | SetCurrentSortMethodType
    | SetSortedElementsType
    | SetSortRunningType
    | SetSwappingElementsType