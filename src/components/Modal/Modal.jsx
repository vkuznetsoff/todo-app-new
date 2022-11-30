import cn from "classnames";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, ...props }) => {
  const closeModalHandler = () => {
    setShowModal(!showModal);
  };

  const submitModalHandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div
      className={cn("modal", {
        modal__none: showModal ? undefined : "none",
      })}
    >
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title">Заголовок</div>
        </div>

        <div class="modal__content">{props.children}</div>

        <div class="modal__footer">
          <button onClick={closeModalHandler}>Закрыть</button>
          <button onClick={submitModalHandler}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
