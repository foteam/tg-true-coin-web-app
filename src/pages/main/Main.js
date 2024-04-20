import MainHeader from "./frames/main.header";
import MainFoot from "./frames/main.foot";
import styles from "./main.module.css";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
const onMining = () => {
    document.getElementById("coinsCount").innerText = parseInt(document.getElementById("coinsCount").innerHTML) + 1;
}

const Main = () => {
  return (
      <>
          <MobileView>
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
          </MobileView>
          <BrowserView><h1 style={}>Desktop variant not supported!</h1></BrowserView>
          </>
  );
};

export default Main;
