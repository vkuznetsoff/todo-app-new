import Comments from "./Comments";

const CommentFrom = ({ currentTodoId }) => {
  return (
    <div>
      <div>CommentFrom</div>
      <div>{currentTodoId}</div>
      <Comments currentTodoId={currentTodoId} />
    </div>
  );
};

export default CommentFrom;
