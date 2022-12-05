import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Project.css";
import { useSelector } from "react-redux";
import TargetBox from "./TargetBox";
import { statuses } from "./../../redux/todoReducer";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../redux/commentActions";
import AddTodoForm from "../Todo/AddTodoForm/AddTodoForm";
import { addTodoAction } from "../../redux/actions";

const tbKeys = {
  QUEUE: "QUEUE",
  DEVELOPMENT: "DEVELOPMENT",
  DONE: "DONE",
};
const Project = () => {
  const { projectID } = useParams();
  const [showAddForm, setShowAddForm] = useState(false);

  const projects = useSelector((state) => state.todoReducer);
  const currentTodos = projects.find((t) => t.id === projectID).todos;

  const allComments = useSelector((state) => state.commentReducer.comments);

  // const currentComments = allComments.filter((c) => c.todoID === todo.id);

  const dispatch = useDispatch();

  //   const allComments = useSelector((state) => state.commentReducer.comments);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  // console.log("allComments", allComments);

  const handleAddTodoButton = () => {
    setShowAddForm(!showAddForm);
  };

  const addTodo = (text, title) => {
    dispatch(addTodoAction(text, title, projectID));
  };

  return (
    <div className="project">
      <div className="project__container">
        <div className="project__title">Проект: {projectID}</div>

        <div className="project__button" onClick={handleAddTodoButton}>
          + Добавить задачу
        </div>

        {showAddForm && (
          <AddTodoForm
            addTodo={addTodo}
            showAddForm={showAddForm}
            setShowAddForm={setShowAddForm}
          />
        )}

        <div className="project__todos">
          <TargetBox
            key={tbKeys.QUEUE}
            projectID={projectID}
            targetID={tbKeys.QUEUE}
            title={"В очереди"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.QUEUE
            )}
            allComments={allComments}
          />

          <TargetBox
            key={tbKeys.DEVELOPMENT}
            projectID={projectID}
            targetID={tbKeys.DEVELOPMENT}
            title={"В разработке"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.DEVELOPMENT
            )}
            allComments={allComments}
          />
          <TargetBox
            key={tbKeys.DONE}
            projectID={projectID}
            targetID={tbKeys.DONE}
            title={"Выполнены"}
            currentTodos={currentTodos.filter(
              (f) => f.status === statuses.DONE
            )}
            allComments={allComments}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
