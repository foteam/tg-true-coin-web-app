
import FrameComponent from "../components/FrameComponent";
import styles from "./MAIN.module.css";

const MAIN = () => {
    return (
        <div className={styles.main}>
            <FrameComponent />
            <section className={styles.mainInner}>
                <div className={styles.frameParent}>
                    <img className={styles.frameChild} alt="" src="/group-1.svg" />
                    <b className={styles.t}>T</b>
                </div>
            </section>
            <FrameComponent />
        </div>
    );
};

export default MAIN;
