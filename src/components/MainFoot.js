import styles from "./FrameComponent.module.css";

const MainHeader = () => {

  return (
    <section className={styles.mainInner}>
      <div className={styles.frameParent}>
        <div className={"energyBar"}>
          <b className={"energyLimit"}>🔋 1500/1500</b>
        </div>
        <div className={"menuBar"}>
          <div className={styles.menu} />
          <div className={"friendsButton"}>
            <div className={styles.iconUserFriendsWrapper}>
              <img
                className={styles.iconUserFriends}
                alt=""
                src="/-icon-user-friends.svg"
              />
            </div>
            <b className={styles.friends}>Friends</b>
          </div>
          <div className={"missionsButton"}>
            <div className={styles.iconCoinsWrapper}>
              <img className={styles.iconCoins} alt="" src="/-icon-coins.svg" />
            </div>
            <b className={styles.missions}>Missions</b>
          </div>
          <div className={"boostButton"}>
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
