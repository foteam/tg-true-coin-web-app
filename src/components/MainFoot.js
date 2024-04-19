import styles from "./FrameComponent.module.css";

const MainHeader = () => {

  return (
    <section className={styles.mainInner}>
      <div className={styles.frameParent}>
        <div className={styles.energyuWrapper}>
          <b className={styles.energyu}>🔋 1500/1500</b>
        </div>
        <div className={styles.menuParent}>
          <div className={styles.menu} />
          <div className={styles.frameGroup}>
            <div className={styles.iconUserFriendsWrapper}>
              <img
                className={styles.iconUserFriends}
                alt=""
                src="/-icon-user-friends.svg"
              />
            </div>
            <b className={styles.friends}>Friends</b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.iconCoinsWrapper}>
              <img className={styles.iconCoins} alt="" src="/-icon-coins.svg" />
            </div>
            <b className={styles.missions}>Missions</b>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.iconFlash1Wrapper}>
              <img
                className={styles.iconFlash1}
                alt=""
                src="/-icon-flash-1.svg"
              />
            </div>
            <b className={styles.boost}>Boost</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
