import styles from "./Header.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.logo}>
          <img width={100} height={100} src="./Img/logo.png" alt="logo" />
          <h1>React pizza</h1>
        </div>
        <button className={styles.cart}>
          <div style={{ borderRight: "solid 1px rgba(255, 255, 255, 0.5)" }}>
            {" "}
            523 ₽
          </div>
          <div>🛒</div>
        </button>
      </div>
    </header>
  );
}
