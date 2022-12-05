import Comments from "../Comments/Comments";

const TodoForm = ({ currentTodoId, comments, ...props }) => {
  debugger;
  return (
    <div>
      <div className="comment__form">
        <div className="comment__form__title">Комментарии:</div>
        {props.children}
        {/* <Comments currentTodoId={currentTodoId} comments={comments} /> */}
      </div>
    </div>
  );
};

export default TodoForm;
