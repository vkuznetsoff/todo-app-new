import "./Comment.css";

const Comment = ({ comment, underComments }) => {
  console.log("underComments", underComments);
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
          <div className="comment__actions">
            <div className="comment__action">Reply</div>
            <div className="comment__action">Edit</div>
            <div className="comment__action">Delete</div>
          </div>
        </div>
      </div>

      <div className="comment__undercomments">
        {underComments.length > 0 &&
          underComments.map((c) => (
            <Comment key={c.id} comment={c} underComments={[]} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
