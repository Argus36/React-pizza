import styles from "./CartBlock.module.scss";
import checkbox from "../../assets/Basket/Agree checkbox.png";
import close from "../../assets/Basket/Close.svg";

export function BasketBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <h2>Корзина</h2>
        <div className={styles.basket}>
          <div className={styles.item}>
            <div className={styles.top}>
              <div className={styles.left}>
                <img src="/React-pizza/Img/Терияки.avif" alt="item" />
                <div className={styles.flex}>
                  <h2 className={styles.name}>Терияки</h2>
                  <p className={styles.dough}>традиционное тесто</p>
                  <p className={styles.size}>30 см.</p>
                </div>
              </div>
              <div className={styles.right}>
                <img src={close} alt="close" />
              </div>
            </div>
            <div className={styles.bottom}>
              <h3 className={styles.price}>{379} ₽</h3>
              <div className={styles.amount}>
                <span className={styles.minus}>-</span>
                <span className={styles.num}>1</span>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <div className={styles.left}>
                <img src="/React-pizza/Img/Терияки.avif" alt="item" />
                <div className={styles.flex}>
                  <h2 className={styles.name}>Терияки</h2>
                  <p className={styles.dough}>традиционное тесто</p>
                  <p className={styles.size}>30 см.</p>
                </div>
              </div>
              <div className={styles.right}>
                <img src={close} alt="close" />
              </div>
            </div>
            <div className={styles.bottom}>
              <h3 className={styles.price}>{379} ₽</h3>
              <div className={styles.amount}>
                <span className={styles.minus}>-</span>
                <span className={styles.num}>1</span>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.top}>
              <div className={styles.left}>
                <img src="/React-pizza/Img/Терияки.avif" alt="item" />
                <div className={styles.flex}>
                  <h2 className={styles.name}>Терияки</h2>
                  <p className={styles.dough}>традиционное тесто</p>
                  <p className={styles.size}>30 см.</p>
                </div>
              </div>
              <div className={styles.right}>
                <img src={close} alt="close" />
              </div>
            </div>
            <div className={styles.bottom}>
              <h3 className={styles.price}>{379} ₽</h3>
              <div className={styles.amount}>
                <span className={styles.minus}>-</span>
                <span className={styles.num}>1</span>
                <span className={styles.plus}>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_container}>
        <h3>Товары, {} шт.</h3>
        <div className={styles.total}>
          <h3>Итого: </h3>
          <h3>{0} ₽</h3>
        </div>
        <button>Заказать</button>
        <div className={styles.agree}>
          <img src={checkbox} alt="checkbox" />
          <p>
            Соглашаюсь с{" "}
            <a
              href="https://dodofranchise.ru/useragreement.html?ysclid=mgquwpy6ir979252354"
              rel="noreferrer">
              правилами пользования торговой площадкой
            </a>{" "}
            и{" "}
            <a
              href="https://dodofranchise.ru/useragreement.html?ysclid=mgquwpy6ir979252354"
              rel="noreferrer">
              возврата
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
