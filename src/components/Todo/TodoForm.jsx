const TodoForm = ({ todo }) => {
  return (
    <div className="todoform">
      <div className="todoform__header">{todo.title} </div>
      <div className="todoform__container">Форма задач</div>
      <div className="todoform__footer"></div>
    </div>
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
