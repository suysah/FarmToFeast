import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logoContainer}>
        <img
          src="../../logo.svg"
          alt="FarmtoFeast logo"
          className={styles.logo}
        />
        <span>Farm2Feast</span>
      </div>
    </Link>
  );
}

export default Logo;
