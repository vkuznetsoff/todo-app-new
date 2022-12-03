import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addComment, deleteComment } from "../../redux/commentActions";
import { getComments } from "./../../redux/api";
import Comment from "./Comment";
import EditCommentFrom from "./EditCommentForm.jsx";

const Comments = ({ currentTodoId }) => {
  const allComments = useSelector((state) => state.commentReducer.comments);
  const dispatch = useDispatch();

  // const [comments, setComments] = useState([allComments]);

  const rootComments = allComments.filter(
    (c) => c.parentId === null && c.todoID === currentTodoId
  );
  console.log("comments", allComments);
  // console.log("rootComments", rootComments);

  const getUnderComments = (commentId) => {
    return allComments.filter((c) => c.parentId === commentId);
  };

  // const addCommentHandle = (todoID = currentTodoId, parentID, text) => {
  const addCommentHandle = (text, parentID = null) => {
    // debugger;
    dispatch(addComment(currentTodoId, parentID, text));
  };

  const deleteCommentHandle = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  const [activeReplyID, setActiveReplyID] = useState(null);

  useEffect(() => {
    // getComments().then((data) => setComments(data));
  }, []);

  return (
    <div className="comments">
      <div className="comments__title">
        <div className="comments__content">
          <EditCommentFrom
            currentTodoId={currentTodoId}
            handleSubmit={addCommentHandle}
            submitLabel={"Оставить комментарий"}
            addComment={addCommentHandle}
          />
        </div>
        {rootComments.map((c) => (
          <Comment
            key={c.id}
            comment={c}
            underComments={getUnderComments(c.id)}
            getUnderComments={getUnderComments}
            addComment={addCommentHandle}
            deleteComment={deleteCommentHandle}
            parentID={c.parentId}
            activeReplyID={activeReplyID}
            setActiveReplyID={setActiveReplyID}
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
