import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/commentActions";
import "./Comment.css";
import EditCommentFrom from "./EditCommentForm";

const Comment = ({
  comment,
  parentID = null,
  underComments,
  getUnderComments,
  addComment,
  deleteComment,
  replyID,
  activeReplyID,
  setActiveReplyID,
}) => {
  // console.log("underComments", underComments);
  const [showReplyForm, setshowReplyForm] = useState(false);

  const isReply = comment.id === activeReplyID;
  // const replyID = parentID ? parentID : comment.id;

  // const isReplying =
  // activeComment &&
  // activeComment.id === comment.id &&
  // activeComment.type === "replying";

  const dispatch = useDispatch();

  const deleteCommentHandle = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  const replyButtonHandle = () => {
    setActiveReplyID(comment.id);
  };

  const addReplyHandle = (text, todoID, commentID) => {};

  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__logo">
          <img alt="author" src="/user-logo.png" width={30} />
        </div>

        <div className="comment__right">
          <div className="comment__details">
            <div className="comment__author">{comment.username}</div>
            <div>{comment.createdAt}</div>
          </div>

          <div className="comment__text">{comment.body}</div>

          {isReply && (
            <EditCommentFrom
              currentTodoId={comment.todoID}
              addComment={(text) => addComment(text, comment.id)}
              submitLabel={"Ответить"}
              setActiveReplyID={setActiveReplyID}
            />
          )}

          <div className="comment__actions">
            <div
              className="comment__action"
              onClick={() => replyButtonHandle()}
            >
              Reply
            </div>
            {/* <div className="comment__action">Edit</div> */}
            <div
              className="comment__action"
              onClick={() => deleteCommentHandle(comment.id)}
            >
              Delete
            </div>
          </div>
        </div>
      </div>

      <div className="comment__undercomments">
        {underComments.length > 0 &&
          underComments.map((c) => (
            <Comment
              key={c.id}
              comment={c}
              underComments={getUnderComments(c.id)}
              activeReplyID={activeReplyID}
              setActiveReplyID={setActiveReplyID}
              addComment={addComment}
              deleteComment={deleteComment}
              getUnderComments={getUnderComments}
              parentID={c.parentId}
            />
          ))}
      </div>
    </div>
  );
};

export default Comment;
