import { useState } from "react";
import { useEffect } from "react";
import { getComments } from "./../../redux/api";
import Comment from "./Comment";

const Comments = ({ currentTodoId }) => {
  const [comments, setComments] = useState([]);

  const rootComments = comments.filter((c) => c.parentId === null);
  // console.log("comments", comments);
  // console.log("rootComments", rootComments);

  const getUnderComments = (commentID) => {
    debugger;
    return comments.filter((c) => c.parentID === commentID);
  };

  useEffect(() => {
    getComments().then((data) => setComments(data));
  }, []);

  return (
    <div className="comments">
      <div className="comments__title">
        <div className="comments__content">
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
    </div>
  );
};

export default Comments;
