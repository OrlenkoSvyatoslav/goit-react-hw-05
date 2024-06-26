import { NavLink } from "react-router-dom";
import css from "../../components/Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={css.navContainer}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </nav>
      <hr />
    </div>
  );
};
export default Navigation;
