import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  todoReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
