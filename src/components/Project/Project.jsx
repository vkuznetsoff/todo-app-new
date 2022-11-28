import React, { useEffect } from "react";
import { useParams } from "react-router";
import "./Project.css";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

const Project = () => {
  const { projectID } = useParams();

  const projects = useSelector((state) => state.todoReducer);
  const currentTodos = projects.find((t) => t.id === projectID).todos;
  console.log(currentTodos);

  // useEffect(() => {
  //   getTodos(String(projectID));
  // }, [projectID]);

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__title">Проект: {projectID}</div>

        <div className="project__todos">
          <div className="todos__column">
            <div className="cloumn__title">В очереди</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>

          <div className="todos__column">
            <div className="cloumn__title">В работе</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>

          <div className="todos__column">
            <div className="cloumn__title">Завершенные</div>
            {currentTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
