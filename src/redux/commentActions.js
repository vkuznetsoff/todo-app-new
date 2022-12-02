import { getComments } from "./api";
import uniqid from "uniqid";

export const GET__COMMENTS = "GET__COMMENTS";
export const ADD__COMMENT = "ADD__COMMENT";

export const getAllComments = (allComments) => {
  return {
    type: GET__COMMENTS,
    payload: { allComments },
  };
};

export const addComment = (todoID, parentID = null, text) => {
  debugger;
  const date = new Date();
  const newComment = {
    id: uniqid(),
    body: text,
    username: "anonymous",
    todoID: todoID,
    parentId: parentID,
    createdAt: new Date().toISOString(),
  };
  return {
    type: ADD__COMMENT,
    payload: newComment,
  };
};

/////////Thunk actions
export const fetchComments = () => {
  return (dispatch) => {
    getComments().then((data) => dispatch(getAllComments(data)));
  };
};
/////////////////
