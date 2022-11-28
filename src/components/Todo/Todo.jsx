import "./Todo.css";
import { useDrag } from "react-dnd";
import { TODO } from "../dnd/dndTypes";

const Todo = ({ todo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: TODO,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className="todo"
    >
      {todo.title}
    </div>
  );
};

export default Todo;
