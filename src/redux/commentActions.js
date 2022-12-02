import { getComments } from "./api";
import uniqid from "uniqid";

export const GET__COMMENTS = "GET__COMMENTS";
export const ADD__COMMENT = "ADD__COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const getAllComments = (allComments) => {
  return {
    type: GET__COMMENTS,
    payload: { allComments },
  };
};

export const addComment = (todoID, parentID = null, text) => {
  const date = new Date();
  const newComment = {
    id: uniqid(),
    body: text,
    username: "anonymous",
    todoID: todoID,
    parentId: parentID,
    createdAt: new Date().toLocaleString(),
  };
  return {
    type: ADD__COMMENT,
    payload: newComment,
  };
};

export const deleteComment = (commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: commentId,
  };
};

/////////Thunk actions
export const fetchComments = () => {
  return (dispatch) => {
    getComments().then((data) => dispatch(getAllComments(data)));
  };
};
/////////////////
