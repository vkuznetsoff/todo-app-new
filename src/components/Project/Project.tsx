import React, { FC } from "react";
import { useParams } from "react-router";
import { IProject } from "../../redux/stroreTypes";
import "./Project.css";

// const Project: FC<{ project: IProject }> = ({ project }) => {
const Project = () => {
  const params = useParams();

  return (
    <div className="project">
      <div className="projectcontainer">
        <div>{params}</div>
      </div>
    </div>
  );
};

export default Project;
