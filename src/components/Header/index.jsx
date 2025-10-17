import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router";

export function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <Link to={""} style={{ textDecoration: "none" }}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h1>React pizza</h1>
          </div>
        </Link>
        <Link to={"/Basket"} style={{ textDecoration: "none" }}>
          <button className={styles.cart}>
            <div style={{ borderRight: "solid 1px rgba(255, 255, 255, 0.5)" }}>
              {" "}
              523 ₽
            </div>
            <div>🛒</div>
          </button>
        </Link>
      </div>
    </header>
  );
}
