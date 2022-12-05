import { useState } from "react";

const TodoForm = ({ todo, ...props }) => {
  // const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="todoform" onSubmit={onSubmit}>
      <div className="todoform__header">{todo.title} </div>
      <div className="todoform__container">Форма задач</div>
      {/* <input
        type={"text"}
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input> */}

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
