import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/rootReducer";
import { IProject } from "../../redux/stroreTypes";
// import { IInitialState } from "../../redux/todoReducer";
//import "./App.css";

function ProjectList() {
  const dispatch = useDispatch();
  const state1 = useSelector((state: RootStateType) => state.todoReducer);
  debugger;
  console.log(state1);

  return (
    <div className="projectList">
      {(state1 as IProject[]).map((el) => (
        <div>
          <div>#id: {el.id}</div>
          <div>name: {el.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
