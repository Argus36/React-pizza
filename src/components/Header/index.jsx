import { Search } from "../Search";

import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.png";
import { Link } from "react-router";
import { useRef } from "react";

export function Header({ searchValue, setSearchValue }) {
  const widths = useRef(window.innerWidth);

  return (
    <header>
      <div className={styles.header_container}>
        <Link to={"/React-pizza"} style={{ textDecoration: "none" }}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h1>React pizza</h1>
          </div>
        </Link>
        {widths.current >= 1280 ? (
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        ) : (
          ``
        )}
        <Link to={"/React-pizza/Basket"} style={{ textDecoration: "none" }}>
          <button className={styles.cart}>
            <div style={{ borderRight: "solid 1px rgba(255, 255, 255, 0.5)" }}>
              {" "}
              <span>523 ₽</span>
            </div>
            <div>🛒</div>
          </button>
        </Link>
      </div>
    </header>
  );
}
