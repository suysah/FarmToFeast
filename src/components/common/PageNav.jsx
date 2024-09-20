import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "../ui/Logo";
// import Logo from "./Logo";

const PageNav = () => {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/farmer-dashboard">Farmer</NavLink>
        </li>
        <li>
          <NavLink to="/consumer-dashboard">Consumer</NavLink>
        </li>
        <li>
          <NavLink to="/products">Product</NavLink>
        </li>

        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.ctaLink}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
