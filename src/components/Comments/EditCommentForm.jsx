import { useState } from "react";
import "./EditCommentForm.css";

const EditCommentFrom = ({
  handleSubmit,
  submitLabel,
  addComment,
  setActiveReplyID,
}) => {
  const [text, setText] = useState("");
  const isButtonDisabled = text.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(text);
    setText("");
    setActiveReplyID(null);
  };
  return (
    <div className="editform">
      <div className="editform__title">Добавить комментарии:</div>
      <form onSubmit={onSubmit}>
        <textarea
          className="editform__textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        ></textarea>
        <button className="editform__button" disabled={isButtonDisabled}>
          {submitLabel}
        </button>
      </form>
    </div>
  );
};

export default EditCommentFrom;
