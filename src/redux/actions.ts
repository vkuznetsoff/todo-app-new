import { ADD_PROJECT } from "./actionsTypes";

export const addProject = (id: String, name: String, data: String) => {
  return {
    type: ADD_PROJECT,
    payload: { id, name, data },
  };
};
