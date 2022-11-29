import React, { useEffect } from "react";
import { useParams } from "react-router";

import "./Project.css";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import TargetBox from "./TargetBox";
import { statuses } from "./../../redux/todoReducer";

const tbKeys = {
  QUEUE: "QUEUE",
  DEVELOPMENT: "DEVELOPMENT",
  DONE: "DONE",
};
const Project = () => {
  const { projectID } = useParams();

  const projects = useSelector((state) => state.todoReducer);
  const currentTodos = projects.find((t) => t.id === projectID).todos;

  // useEffect(() => {
  //   getTodos(String(projectID));
  // }, [projectID]);

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__title">Проект: {projectID}</div>

        <div className="project__todos">
          {/* <div className="todos__column">
            <div className="column__title">В очереди</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
           
          </div> */}

          <TargetBox
            key={tbKeys.QUEUE}
            projectID={projectID}
            targetID={tbKeys.QUEUE}
            title={"В очереди"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.QUEUE
            )}
          />

          <TargetBox
            key={tbKeys.DEVELOPMENT}
            projectID={projectID}
            targetID={tbKeys.DEVELOPMENT}
            title={"В разработке"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.DEVELOPMENT
            )}
          />
          <TargetBox
            key={tbKeys.DONE}
            projectID={projectID}
            targetID={tbKeys.DONE}
            title={"Выполнены"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.DONE
            )}
          />
          {/* <TargetBox currentTodos={currentTodos} />
          <TargetBox currentTodos={currentTodos} /> */}
          {/* 
          <div className="todos__column">
            <div className="column__title">В работе</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
            <TargetBox />
          </div>

          <div className="todos__column">
            <div className="column__title">Завершенные</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
            <TargetBox />
          </div>
           */}
        </div>
      </div>
    </div>
  );
};

export default Project;
