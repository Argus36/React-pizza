import styles from "./Footer.module.scss";
import { GitHub, Gmail, Telegram, YouTube } from "../../assets/Footer";

export function Footer() {
  return (
    <footer>
      <div className={styles.foot_container}>
        <a
          className={styles.five}
          href="https://www.youtube.com/@Argus_36"
          target="_blank"
          rel="noreferrer">
          <img className={styles.five} src={YouTube} alt="logo" />
        </a>
        <a
          className={styles.six}
          href="https://t.me/Argus_36"
          target="_blank"
          rel="noreferrer">
          <img className={styles.six} src={Telegram} alt="logo" />
        </a>
        <a
          className={styles.six}
          href="https://github.com/Argus36"
          target="_blank"
          rel="noreferrer">
          <img className={styles.six} src={GitHub} alt="logo" />
        </a>
        <a
          className={styles.five}
          href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=jobartemsolomakha@gmail.com&tf=1"
          target="_blank"
          rel="noreferrer">
          <img className={styles.five} src={Gmail} alt="logo" />
        </a>
      </div>
    </footer>
  );
}
