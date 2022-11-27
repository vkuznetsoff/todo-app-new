import { IProject } from "./stroreTypes";

export const ADD_PROJECT = "ADD_PROJECT";

interface IAddProjectPayload {
  project: IProject;
}

interface IAddProject {
  type: typeof ADD_PROJECT;
  payload: IAddProjectPayload;
}

export type ActionProjectType = IAddProject;
