import { useState } from "react";
import { useEffect } from "react";
import { getComments } from "./../../redux/api";

const Comments = ({ currentTodoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((data) => setComments(data));
    console.log(comments);
  }, []);

  return <div>Comments</div>;
};

export default Comments;
