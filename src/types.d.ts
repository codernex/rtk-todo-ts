interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}