
import styles from "./main.module.css";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const onMining = () => {
    document.getElementById("coinsCount").innerText = parseInt(document.getElementById("coinsCount").innerHTML) + 1;
}

const Main = () => {
    const tg = window.Telegram.WebApp;
    return (
        <>
            <MobileView>
                <div className={styles.main}>
                    <b className={styles.profile}>👤 {tg.initDataUnsafe?.user?.first_name}</b>
                    <img className={styles.iconSoFaq} alt="" src="/-icon-so-faq.svg"/>
                    <div className={styles.mines} id="coinsCount">0</div>
                    <div className={styles.mines1}>Your True Coins here:</div>
                    <div className={styles.groupParent} onClick={onMining}>
                        <img className={styles.groupChild} alt="" src="/group-1.svg"/>
                        <b className={styles.t}>T</b>
                    </div>
                    <b className={styles.energyu}>🔋 1500/1500</b>
                    <div className={styles.menuParent}>
                        <div className={styles.menu}/>
                        <div className={styles.iconFlash1Parent}>
                            <img className={styles.iconFlash1} alt="" src="/-icon-flash-1.svg"/>
                            <b className={styles.boost}>Boost</b>
                        </div>
                        <div className={styles.friendsParent}>
                            <b className={styles.boost}>Friends</b>
                            <img
                                className={styles.iconUserFriends}
                                alt=""
                                src="/-icon-user-friends.svg"
                            />
                        </div>
                        <div className={styles.missionsParent}>
                            <b className={styles.boost}>Missions</b>
                            <img className={styles.iconCoins} alt="" src="/-icon-coins.svg"/>
                        </div>
                    </div>
                </div>
            </MobileView>
            <BrowserView><h1 align="center">Desktop variant not supported))</h1></BrowserView>
        </>
    );
};
export default Main;
