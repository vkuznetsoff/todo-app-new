import Comments from "./Comments";

const CommentFrom = ({ currentTodoId }) => {
  return (
    <div>
      <div className="comment__form">
        <div className="comment__form__title">Комментарии:</div>

        <Comments currentTodoId={currentTodoId} />
      </div>
    </div>
  );
};

export default CommentFrom;
