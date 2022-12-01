import Comments from "./Comments";

const CommentFrom = ({ currentTodoId, comments }) => {
  return (
    <div>
      <div className="comment__form">
        <div className="comment__form__title">Комментарии:</div>

        <Comments currentTodoId={currentTodoId} comments={comments} />
      </div>
    </div>
  );
};

export default CommentFrom;
