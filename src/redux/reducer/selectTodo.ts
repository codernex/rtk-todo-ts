import { SelectTodoActionType, SELECT_TODO } from '../constant';

type SelectTodoType = SelectTodoActionType;

const selectTodo = (state: string | null = null, action: SelectTodoType) => {
  switch (action.type) {
    case SELECT_TODO:
      return action.payload?.id;
    default:
      return state;
  }
};

export default selectTodo;
