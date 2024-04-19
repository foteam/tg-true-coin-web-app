import MainHeader from "../components/MainHeader";
import MainFoot from "../components/MainFoot";
import styles from "./MAIN.module.css";

const onMining = () => {
    document.getElementById("coinsCount").innerText = parseInt(document.getElementById("coinsCount").innerHTML) + 1;
}

const MAIN = () => {
  return (
    <div className={styles.main}>
      <MainHeader />
      <section className={styles.mainInner} onClick={onMining}>
        <div className={styles.frameParent}>
          <img className={styles.frameChild}  alt="" src="/group-1.svg"/>
          <b className={styles.t}>T</b>
        </div>
      </section>
      <MainFoot />
    </div>
  );
};

export default MAIN;
