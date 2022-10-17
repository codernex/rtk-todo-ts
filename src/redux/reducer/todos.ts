import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  IActionType,
  TOGGLE_TODO
} from '../constant';
import { v1 as uuid } from 'uuid';

const initialState: Todo[] = [
  {
    id: uuid(),
    desc: 'Learn React',
    isComplete: true
  },
  {
    id: uuid(),
    desc: 'Learn Redux',
    isComplete: true
  },
  {
    id: uuid(),
    desc: 'Learn Redux-ToolKit',
    isComplete: false
  }
];

const todos = (state: Todo[] = initialState, action: IActionType) => {
  switch (action.type) {
    case CREATE_TODO: {
      const { payload } = action;
      return [...state, payload];
    }
    case EDIT_TODO: {
      const { payload } = action;
      return state.map(todo =>
        todo.id === payload?.id ? { ...todo, desc: payload?.desc } : todo
      );
    }

    case TOGGLE_TODO: {
      const { payload } = action;
      return state.map(todo =>
        todo.id === payload?.id
          ? { ...todo, isComplete: payload.isComplete }
          : todo
      );
    }
    case DELETE_TODO: {
      const { payload } = action;
      return state.filter(todo => todo.id !== payload?.id);
    }

    default:
      return state;
  }
};

export default todos;
