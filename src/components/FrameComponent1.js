import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.profileParent}>
        <b className={styles.profile}>👤 USERNAME</b>
        <div className={styles.iconSoFaqWrapper}>
          <img className={styles.iconSoFaq} alt="" src="/-icon-so-faq.svg" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.minesWrapper}>
          <div className={styles.mines}>Your True Coins here:</div>
        </div>
        <div className={styles.mines1} id="coinsCount">1 507 999</div>
      </div>
    </section>
  );
};

export default FrameComponent1;