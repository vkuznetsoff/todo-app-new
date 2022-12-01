import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getComments } from "./../../redux/api";
import Comment from "./Comment";
import EditCommentFrom from "./EditCommentForm";

const Comments = ({ currentTodoId }) => {
  const allComments = useSelector((state) => state.commentReducer.comments);
  debugger;

  // const [comments, setComments] = useState([allComments]);

  const rootComments = allComments.filter(
    (c) => c.parentId === null && c.todoID === currentTodoId
  );
  console.log("comments", allComments);
  // console.log("rootComments", rootComments);

  const getUnderComments = (commentId) => {
    return allComments.filter((c) => c.parentId === commentId);
  };

  const addComment = (todoID, parentID) => {};

  useEffect(() => {
    // getComments().then((data) => setComments(data));
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
