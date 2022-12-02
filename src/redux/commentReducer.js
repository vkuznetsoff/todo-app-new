import { ADD__COMMENT, GET__COMMENTS } from "./commentActions";

const initState = {
  comments: [],
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case GET__COMMENTS:
      return {
        ...state,
        comments: action.payload.allComments,
      };

    case ADD__COMMENT:
      debugger;
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

export default commentReducer;
