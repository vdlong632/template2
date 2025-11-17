import './Rewards.scss';
import Group2 from './Group2.png';
import AppleComputers2 from './AppleComputers2.png';

const Rewards = () => {
    return (
        <div className="rewards">
            <section className="rewards__top">
                <div className="rewards__image">
                    <img
                        src={Group2}
                        alt="Crypto app interface on phone"
                    />
                </div>

                <div className="rewards__content">
                    <h2>Earn daily rewards on your idle tokens</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aene.
                    </p>

                    <ul className="rewards__list">
                        <li>
                            <span className="icon">💰</span>
                            <span>Lowest fees in market</span>
                        </li>
                        <li>
                            <span className="icon">⚡</span>
                            <span>Fast and secure transactions</span>
                        </li>
                        <li>
                            <span className="icon">🔒</span>
                            <span>256-bit secure encryption</span>
                        </li>
                    </ul>
                </div>

            </section>

            <section className="rewards__bottom">
                <div className="rewards__content">
                    <h2>Earn daily rewards on your idle tokens</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aene.
                    </p>

                    <ul className="rewards__list">
                        <li>
                            <span className="icon">💰</span>
                            <span>100% Private data</span>
                        </li>
                        <li>
                            <span className="icon">⚡</span>
                            <span>99.99% Uptime guarantee</span>
                        </li>
                        <li>
                            <span className="icon">🔒</span>
                            <span>24/7 Delicated support </span>
                        </li>
                    </ul>
                </div>
                <div className="rewards__image">
                    <img
                        src={AppleComputers2}
                        alt="Crypto app interface on phone"
                    />
                </div>
            </section>
        </div>
    );
};

export default Rewards;
