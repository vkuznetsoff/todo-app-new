import { useState } from "react";
import { statuses, statusesRU } from "../../redux/todoReducer";

import "./TodoForm.css";

const TodoForm = ({ todo, ...props }) => {
  // const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const setStatusClass = (status) => {
    switch (status) {
      case statuses.QUEUE:
        return "queue";
      case statuses.DEVELOPMENT:
        return "development";
      case statuses.DONE:
        return "done";
      default:
        return "";
    }
  };

  return (
    <form className="todoform" onSubmit={onSubmit}>
      <div className="todoform__header">
        <div class="header__content">
          <div className={`header__status ${setStatusClass(todo.status)}`}>
            {statusesRU[todo.status]}
          </div>
          {todo.doneAt && <div class="todoform__details">{todo.doneAt}</div>}
        </div>

        {/* <div className="header__column">12</div> */}

        <div className="header__column">
          <div className="todoform__title">{todo.title} </div>
          <div className="todoform__details ">
            Дата создания: {todo.createdAt}
          </div>
        </div>
      </div>

      <div className="todoform__text">{todo.text}</div>
      <div className="todoform__title"></div>
      <div className="todoform_text"></div>

      <div className="todoform__footer">{props.children}</div>
    </form>
  );
};

export default TodoForm;

// Номер задачи
// Заголовок
// Описание
// Дата создания
// Время в работе
// Дата окончания
// Приоритет
// Вложенные файлы
// Текущий статус
// Возможность добавлять подзадачи;

// id: "1-1",
// title: "Todo 1-1",
// status: statuses.QUEUE,
// number: "",
// text: "",
// createdAt: "2022-12-03",
// timeInProgress: "",
// doneAt: "",
// priority: priority.HIGH,
// attachments: "",
// subtodos: [],
// done: false,
// },
