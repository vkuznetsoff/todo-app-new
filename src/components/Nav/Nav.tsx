import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/tasks" className={"navitem"}>
        Список проектов
      </NavLink>
      <NavLink to="/task" className={"navitem"}>
        Задача
      </NavLink>
    </div>
  );
};

export default Nav;
