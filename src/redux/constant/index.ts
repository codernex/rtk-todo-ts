export const CREATE_TODO = 'CREATE_TODO';

export const EDIT_TODO = 'EDIT_TODO';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const DELETE_TODO = 'DELETE_TODO';

export const SELECT_TODO = 'SELECT_TODO';

//Actions & Action Type

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload?: Todo;
}

export interface EditTodoActionType {
  type: typeof EDIT_TODO;
  payload?: { id: string; desc: string };
}

export interface ToggleTodoActionType {
  type: typeof TOGGLE_TODO;
  payload?: { id: string; isComplete: boolean };
}

export interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload?: {
    id: string;
  };
}

export interface SelectTodoActionType {
  type: typeof SELECT_TODO;
  payload?: {
    id: string;
  };
}

export type IActionType =
  | CreateTodoActionType
  | EditTodoActionType
  | DeleteTodoActionType
  | ToggleTodoActionType;
