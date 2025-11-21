import './Cta.scss';
import divPng from './div.png'
const Cta = () => {
    return (
        <section className="cta">
            <div className="cta__inner">

                <div className="cta__content">
                    <h2>Explore endless possibilities with FinanceFlow</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat nulla suspendisse tortor aenean.
                    </p>
                    <button className="cta__button">DOWNLOAD APP</button>
                </div>

                <div className="cta__image">
                    <img src={divPng} alt="FinanceFlow app mockup" />
                </div>

            </div>
        </section>
    )
}
export default Cta;