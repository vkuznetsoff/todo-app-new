import { ActionProjectType, ADD_PROJECT, GET_TODOS } from "./actionsTypes";

export const addProject = (id: String, name: String, todos: []) => {
  return {
    type: ADD_PROJECT,
    payload: { id, name, todos },
  };
};

export const getTodos = (id: String) => {
  return {
    type: GET_TODOS,
    payload: id
  }
}
