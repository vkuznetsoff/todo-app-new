import React, { FC } from "react";
import { useParams } from "react-router";
import { IProject } from "../../redux/stroreTypes";
import "./Project.css";
import Todo from "./../Todo/Todo";

// const Project: FC<{ project: IProject }> = ({ project }) => {
const Project = () => {
  const { projectID } = useParams();
  console.log(projectID);

  return (
    <div className="project">
      <div className="projectcontainer">
        <div>{projectID}</div>
        <div className="todos">
          <Todo />
        </div>
      </div>
    </div>
  );
};

export default Project;
