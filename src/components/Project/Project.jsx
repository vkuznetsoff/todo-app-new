import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Project.css";
import { useSelector } from "react-redux";
import TargetBox from "./TargetBox";
import { statuses } from "./../../redux/todoReducer";
import Modal from "../Modal/Modal";

const tbKeys = {
  QUEUE: "QUEUE",
  DEVELOPMENT: "DEVELOPMENT",
  DONE: "DONE",
};
const Project = () => {
  const { projectID } = useParams();
  // const [showModal, setShowModal] = useState(false);

  const projects = useSelector((state) => state.todoReducer);
  const currentTodos = projects.find((t) => t.id === projectID).todos;

  const handleAddButton = () => {};

  // useEffect(() => {
  //   getTodos(String(projectID));
  // }, [projectID]);

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__title">Проект: {projectID}</div>

        <div className="project__button" onClick={handleAddButton}>
          + Добавить задачу
        </div>

        <div className="project__todos">
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
        </div>

        {/* <button onClick={() => setShowModal(true)}>OPEN</button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <h2>Hello</h2>
          <div>YOYOY</div>
        </Modal> */}
      </div>
    </div>
  );
};

export default Project;
