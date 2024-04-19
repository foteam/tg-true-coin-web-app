import FrameComponent from "../components/FrameComponent";
import "./App.css";

const tg = window.Telegram.WebApp;

const App = () => {
    return (
        <div className="main">
            <section className="main-inner">
                <div className="profile-parent">
                    <h2 className="profile">👤 {tg.initDataUnsafe?.user?.first_name}</h2>
                    <div className="question-mark-icon">
                        <img
                            className="icon-so-faq"
                            loading="lazy"
                            alt=""
                            src="/-icon-so-faq.svg"
                        />
                    </div>
                </div>
            </section>
            <div className="mines-wrapper">
                <h2 className="mines">Your True Coins here:</h2>
            </div>
            <section className="mines-container">
                <div className="mines1">1 507 999</div>
            </section>
            <section className="main-child">
                <div className="frame-parent">
                    <img
                        className="frame-child"
                        loading="lazy"
                        alt=""
                        src="/group-1.svg"
                    />
                    <h1 className="t">T</h1>
                </div>
            </section>
            <div className="energy-u-i">
                <b className="energyu">🔋 1500/1500</b>
            </div>
            <FrameComponent />
        </div>
    );
};

export default App;