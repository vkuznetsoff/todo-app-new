import { GET__COMMENTS } from "./actionsTypes";

const initState = {
  comments: [],
};
const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case GET__COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
