import { IProject } from "./stroreTypes";

export const ADD_PROJECT = "ADD_PROJECT";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS";
export const CHANGE_PROJECT_STATUS = "CHANGE_PROJECT_STATUS";
export const GET__COMMENTS = "GET__COMMENTS";

interface IAddProjectPayload {
  project: IProject;
}

interface IAddProjectAction {
  type: typeof ADD_PROJECT;
  payload: IAddProjectPayload;
}

interface IGetTodosPayload {
  id: String;
}
interface IGetTodosAction {
  type: typeof GET_TODOS;
  payload: IAddProjectPayload;
}

export type ActionProjectType = IAddProjectAction | IGetTodosAction;
