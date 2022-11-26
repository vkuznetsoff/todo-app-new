import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/projects" className={"navitem"}>
        Список проектов
      </NavLink>
      <NavLink to="/project" className={"navitem"}>
        Проект
      </NavLink>
    </div>
  );
};

export default Nav;
