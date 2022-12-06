import { useState } from "react";
import TodoDate from "../../TodoDate/TodoDate";
import "./AddTodoForm.css";

const AddTodoForm = ({
  addTodo,
  showAddForm,
  setShowAddForm,
  setDoneAt,
  doneAt,
}) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const isButtonDisabled = title.length === 0;

  const addButtonHandle = () => {
    addTodo(title, text);
    setShowAddForm(!showAddForm);
    setTitle("");
    setText("");
  };
  return (
    <div className="add__form">
      <div className="addform__content">
        <textarea
          className="addform__title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите заголовок задачи..."
        />
        <textarea
          className="addform__text text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите описание задачи..."
        />
        <TodoDate setDoneAt={setDoneAt} doneAt={doneAt} />
      </div>

      <div className="buttons">
        <div
          className="button cancel"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          Отмена
        </div>
        <div
          className={
            isButtonDisabled ? "button submit disabled" : "button submit"
          }
          onClick={addButtonHandle}
        >
          Добавить
        </div>
      </div>
    </div>
  );
};

export default AddTodoForm;
