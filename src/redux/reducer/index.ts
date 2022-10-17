import { combineReducers } from '@reduxjs/toolkit';
import todos from './todos';
import selectedTodo from './selectTodo';
import counter from './counter';

export default combineReducers({
  todos,
  selectedTodo,
  counter
});
