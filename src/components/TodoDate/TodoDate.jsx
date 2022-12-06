import { DatePicker } from "@y0c/react-datepicker";
import "@y0c/react-datepicker/assets/styles/calendar.scss";

const TodoDate = ({ setDoneAt, doneAt }) => {
  const onChangeValue = (date) => {
    const dateValue = date.toDate();
    console.log(dateValue, "dateValue");
    setDoneAt(dateValue);
  };

  return (
    <div>
      <DatePicker
        value={doneAt}
        onChange={onChangeValue}
        locale="Ru"
        placeholder="Срок выполнения"
        showDefaultIcon
        includeTime
      />
    </div>
  );
};

export default TodoDate;
