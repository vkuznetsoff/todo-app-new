import "./Todo.css";
import { useDrag } from "react-dnd";
import { TODO } from "../dnd/dndTypes";
import Modal from "../Modal/Modal";
import { useState } from "react";
import CommentFrom from "./../Comments/CommentForm";
import TodoForm from "./TodoForm";
import Comments from "../Comments/Comments";

const COMMENTS = "COMMENTS";
const EDIT_TODO = "EDIT_TODO";

const Todo = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: TODO,
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const todoButtonHandle = () => {
    debugger;
    setModalBody(EDIT_TODO);
    setShowModal(!showModal);
  };

  const commentsButtonHandle = () => {
    debugger;
    setModalBody(COMMENTS);
    setShowModal(!showModal);
  };
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className="todo"
    >
      <div class="todo__container">
        <div class="todo__body">
          <div class="todo__title">{todo.title}</div>
          {/* <div class="todo__button" >...</div> */}
          <div class="todo__button" onClick={todoButtonHandle}>
            ...
          </div>
        </div>

        <div class="todo__bottom">
          <div class="todo__comments" onClick={commentsButtonHandle}>
            💭 Комментарии
          </div>
        </div>
      </div>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setModalBody={setModalBody}
      >
        {/* <h2>Hello</h2>
        <div>YOYOY</div> */}
        {/* <CommentFrom /> */}

        {modalBody === COMMENTS && <CommentFrom currentTodoId={todo.id} />}
        {modalBody === EDIT_TODO && <TodoForm />}
      </Modal>
    </div>
  );
};

export default Todo;
