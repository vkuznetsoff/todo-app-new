import { useState } from "react";
import { useEffect } from "react";
import { getComments } from "./../../redux/api";
import Comment from "./Comment";
import EditCommentFrom from "./EditCommentForm";

const Comments = ({ currentTodoId }) => {
  const [comments, setComments] = useState([]);

  const rootComments = comments.filter(
    (c) => c.parentId === null && c.todoID === currentTodoId
  );
  // console.log("comments", comments);
  // console.log("rootComments", rootComments);

  const getUnderComments = (commentId) => {
    return comments.filter((c) => c.parentId === commentId);
  };

  const addComment = (todoID, parentID) => {};

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);

  return (
    <div className="comments">
      <div className="comments__title">
        <div className="comments__content">
          <EditCommentFrom
            currentTodoId={currentTodoId}
            handleSubmit={addComment}
            submitLabel={"Оставить комментарий"}
          />
        </div>
        {rootComments.map((c) => (
          <Comment
            key={c.id}
            comment={c}
            underComments={getUnderComments(c.id)}
          />
          // <div key={c.id}>
          //   {c.username}: {c.body}
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
