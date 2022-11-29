import {
  ActionProjectType,
  ADD_PROJECT,
  ADD_TODO,
  CHANGE_PROJECT_STATUS,
  CHANGE_TODO_STATUS,
  GET_TODOS,
  REMOVE_TODO,
} from "./actionsTypes";

export const addProject = (id, name, todos) => {
  return {
    type: ADD_PROJECT,
    payload: { id, name, todos },
  };
};

export const getTodos = (id) => {
  return {
    type: GET_TODOS,
    payload: id,
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (todoID, projectFROM) => {
  return {
    type: REMOVE_TODO,
    payload: { todoID, projectFROM },
  };
};

export const changeProjectStatus = (project_id) => {
  return {
    type: CHANGE_PROJECT_STATUS,
    payload: project_id,
  };
};

export const changeTodoStatus = (projectID, todo, newStatus) => {
  debugger;
  return {
    type: CHANGE_TODO_STATUS,
    payload: { projectID, todo, newStatus },
  };
};
