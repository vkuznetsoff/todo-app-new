import "./Todo.css";
import { useDrag } from "react-dnd";
import { TODO } from "../dnd/dndTypes";

const Todo = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TODO,
    item: todo,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const todoButtonHandle = () => {};
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className="todo"
      onClick={todoButtonHandle}
    >
      <div class="todo__title">{todo.title}</div>
      <div class="todo__button">...</div>
    </div>
  );
};

export default Todo;
