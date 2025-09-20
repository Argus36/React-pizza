import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <div className={styles.foot_container}>
        <a
          className={styles.five}
          href="https://www.youtube.com/@Argus_36"
          target="_blank"
          rel="noreferrer">
          <img
            className={styles.five}
            src="./Img/YouTube logo.png"
            alt="logo"
          />
        </a>
        <a
          className={styles.six}
          href="https://t.me/Argus_36"
          target="_blank"
          rel="noreferrer">
          <img
            className={styles.six}
            src="./Img/Telegram logo.png"
            alt="logo"
          />
        </a>
        <a
          className={styles.six}
          href="https://github.com/Argus36"
          target="_blank"
          rel="noreferrer">
          <img className={styles.six} src="./Img/GitHub logo.png" alt="logo" />
        </a>
        <a
          className={styles.five}
          href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=jobartemsolomakha@gmail.com&tf=1"
          target="_blank"
          rel="noreferrer">
          <img className={styles.five} src="./Img/Gmail logo.png" alt="logo" />
        </a>
      </div>
    </footer>
  );
}
