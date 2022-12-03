import { useDrop } from "react-dnd";
import { TODO } from "./../dnd/dndTypes";
import "./Project";
import Todo from "./../Todo/Todo";
import { SymbolDisplayPartKind } from "typescript";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "./../../redux/actions";

const TargetBox = ({
  projectID,
  targetID,
  title,
  currentTodos,
  allComments,
}) => {
  const dispatch = useDispatch();

  const onDrop = (item) => {
    dispatch(changeTodoStatus(projectID, item, targetID));
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: TODO,
    drop: (item, monitor) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const style = {
    backgroundColor: isOver ? "yellow" : undefined,
    height: "auto",
    border: "3px solid",
  };

  return (
    <div ref={drop} style={style}>
      <div className="todos__column">
        <div className="column__title">{title}</div>
        {currentTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            currentComments={allComments.filter((c) => c.todoID === todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TargetBox;
