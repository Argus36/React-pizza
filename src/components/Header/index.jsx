import { Search } from "../Search";

import styles from "./Header.module.scss";
import logo from "../../assets/Header/logo.png";
import { Link, useLocation } from "react-router";
import { useRef } from "react";
import { useSelector } from "react-redux";

export function Header() {
  const widths = useRef(window.innerWidth);

  const location = useLocation();

  const { allPrice, amount } = useSelector((state) => state.cart);

  return (
    <header>
      <div className={styles.header_container}>
        <Link to={"/React-pizza"} style={{ textDecoration: "none" }}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <h1>React pizza</h1>
          </div>
        </Link>
        {location.pathname === "/React-pizza" && widths.current >= 1280 && (
          <Search />
        )}
        <Link to={"/React-pizza/Basket"} style={{ textDecoration: "none" }}>
          <button className={styles.cart}>
            <div style={{ borderRight: "solid 1px rgba(255, 255, 255, 0.5)" }}>
              {" "}
              <span>{allPrice} ₽</span>
            </div>
            <div>🛒 {amount}</div>
          </button>
        </Link>
      </div>
    </header>
  );
}
