import "./FrameComponent.css";

const FrameComponent = () => {
    return (
        <section className="frame-section">
            <div className="menu-parent">
                <div className="menu" />
                <div className="user-friends-and-coins">
                    <div className="duck-icon-user-friends">
                        <div className="coins-and-flash">
                            <img
                                className="icon-user-friends"
                                loading="lazy"
                                alt=""
                                src="/-icon-user-friends.svg"
                            />
                        </div>
                        <b className="friends">Friends</b>
                    </div>
                </div>
                <div className="line-wrapper">
                    <div className="frame-item" />
                </div>
                <div className="user-friends-and-coins1">
                    <div className="frame-group">
                        <div className="icon-coins-wrapper">
                            <img
                                className="icon-coins"
                                loading="lazy"
                                alt=""
                                src="/-icon-coins.svg"
                            />
                        </div>
                        <b className="missions">Missions</b>
                    </div>
                </div>
                <div className="frame-inner" />
                <div className="user-friends-and-coins2">
                    <div className="frame-container">
                        <div className="icon-flash-1-wrapper">
                            <img
                                className="icon-flash-1"
                                loading="lazy"
                                alt=""
                                src="/-icon-flash-1.svg"
                            />
                        </div>
                        <b className="boost">Boost</b>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FrameComponent;
