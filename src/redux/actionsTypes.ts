import { IProject } from "./stroreTypes";

export const ADD_PROJECT = "ADD_PROJECT";
export const GET_TODOS = "GET_TODOS";

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
