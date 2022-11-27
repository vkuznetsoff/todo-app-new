import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IInitialState } from "../../redux/todoReducer";
//import "./App.css";

const getState = (state: IInitialState) => state;

function ProjectList() {
  const dispatch = useDispatch();
  const state1 = useSelector(getState);
  console.log(state1);

  return (
    <div className="projectList">
      {state1.map((el) => (
        <div>{el.name}</div>
      ))}
    </div>
  );
}

export default ProjectList;
