import styles from "./FrameComponent1.module.css";
import React from "react"

const MainHeader = () => {
    const tg = window.Telegram.WebApp;
  return (
    <section className={styles.frameParent}>
      <div className={styles.profileParent}>
        <b className={styles.profile}>👤 {tg.initDataUnsafe?.user.first_name}</b>
        <div className={styles.iconSoFaqWrapper}>
          <img className={styles.iconSoFaq} alt="" src="/-icon-so-faq.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.minesWrapper}>
          <div className={styles.mines}>Your True Coins here:</div>
        </div>
        <div className={styles.mines1} id="coinsCount">2 500</div>
      </div>
    </section>
  );
};

export default MainHeader;
