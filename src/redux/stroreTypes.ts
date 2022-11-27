export interface ITodo {
  id: String;
  title: String;
}

export interface IProject {
  id: String;
  name: String;
  todos: ITodo[];
}
