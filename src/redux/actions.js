import {
  ActionProjectType,
  ADD_PROJECT,
  ADD_TODO,
  CHANGE_PROJECT_STATUS,
  CHANGE_TODO_STATUS,
  GET_TODOS,
  GET__COMMENTS,
  REMOVE_TODO,
} from "./actionsTypes";

import uniqid from "uniqid";
import { getComments } from "./api";
import { statuses } from "./todoReducer";

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

export const addTodoAction = (title, text, projectID) => {
  const newTodo = {
    id: uniqid(),
    title: title,
    status: statuses.QUEUE,
    number: "",
    text: text,
    createdAt: new Date().toLocaleString(),
    timeInProgress: "",
    doneAt: "",
    priority: null,
    attachments: "",
    subtodos: [],
    done: false,
  };

  return {
    type: ADD_TODO,
    payload: { newTodo, projectID },
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
  return {
    type: CHANGE_TODO_STATUS,
    payload: { projectID, todo, newStatus },
  };
};
