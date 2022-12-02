import { ADD__COMMENT, DELETE_COMMENT, GET__COMMENTS } from "./commentActions";

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
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case DELETE_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments.filter(
            (comments) => comments.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default commentReducer;
