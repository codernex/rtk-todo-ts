import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  IActionType,
  TOGGLE_TODO
} from '../constant';

const counter = (state: number = 0, action: IActionType) => {
  switch (action.type) {
    case CREATE_TODO:
      return state + 1;
    case EDIT_TODO:
      return state + 1;

    case TOGGLE_TODO:
      return state + 1;

    case DELETE_TODO:
      return state + 1;
    default:
      return state;
  }
};

export default counter;
