import "./Todo.css";
import { useDrag } from "react-dnd";

const Todo = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "BOX",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragPreview}
      style={{
        opacity: isDragging ? 0.1 : 1,
        background: isDragging ? "green" : "none",
      }}
    >
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          background: isDragging ? "blue" : "none",
        }}
        className="todo"
      >
        Hello
      </div>
    </div>
  );
};

export default Todo;
