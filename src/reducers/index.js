import {combineReducers } from 'redux';
import TodoList from './TodoList';
import Cars from './Cars';

const reducer = combineReducers({
    list:TodoList,
    cars:Cars
});

export default reducer;