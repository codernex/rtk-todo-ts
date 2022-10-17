import {
  CreateTodoActionType,
  CREATE_TODO,
  DeleteTodoActionType,
  DELETE_TODO,
  EditTodoActionType,
  EDIT_TODO,
  SelectTodoActionType,
  SELECT_TODO,
  ToggleTodoActionType,
  TOGGLE_TODO
} from '../constant';
import { v1 as uuid } from 'uuid';

export const createTodo = (data: { desc: string }): CreateTodoActionType => {
  const { desc } = data;

  return {
    type: CREATE_TODO,
    payload: {
      id: uuid(),
      desc,
      isComplete: false
    }
  };
};

export const editTodo = (data: {
  id: string;
  desc: string;
}): EditTodoActionType => {
  const { id, desc } = data;

  return {
    type: EDIT_TODO,
    payload: {
      id,
      desc
    }
  };
};

export const toggleTodo = (data: {
  id: string;
  isComplete: boolean;
}): ToggleTodoActionType => {
  const { id, isComplete } = data;
  return {
    type: TOGGLE_TODO,
    payload: { id, isComplete }
  };
};

export const deleteTodo = (data: { id: string }): DeleteTodoActionType => {
  const { id } = data;

  return {
    type: DELETE_TODO,
    payload: { id }
  };
};

export const selectTodo = (data: { id: string }): SelectTodoActionType => {
  const { id } = data;

  return {
    type: SELECT_TODO,
    payload: { id }
  };
};
