import { useState } from "react";

const EditTodoForm = ({ todo, ...props }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="todoform" onSubmit={onSubmit}>
      <input
        type={"text"}
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </div>
  );
};

export default EditTodoForm;

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
