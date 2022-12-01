import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  todoReducer,
  commentReducer,
});

// export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
