import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { RootStateType } from "../../redux/rootReducer";
import { IProject } from "../../redux/stroreTypes";
import Project from "../Project/Project";
// import { IInitialState } from "../../redux/todoReducer";
//import "./App.css";

function ProjectList() {
  const { projectID } = useParams();
  const dispatch = useDispatch();
  const state1 = useSelector((state: RootStateType) => state.todoReducer);
  console.log(state1);

  return (
    <div className="projectList">
      {(state1 as IProject[]).map((el) => (
        <div>
          {/* <div>#id: {el.id}</div>
          <div>name: {el.name}</div> */}
          <NavLink to={"/project/:projectID"} className={"navitem"}>
            <Project />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
