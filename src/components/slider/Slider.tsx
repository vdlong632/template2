import './Slider.scss';
const Slider = () => {
    return (
        <section className="slider">
            <div className="heading">
                <h2 className="slider__title">What our users say?</h2>
                <button className="btn--download">DOWNLOAD APP</button>
            </div>
            <div className="slider__wrapper">
                <div className="slide active">
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                    <div className="user">
                        <div className="avatar"></div>
                        <h4>JOHN CARTER</h4>
                        <span>ROLE, COMPANY</span>
                    </div>
                </div>

                <div className="slide">
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                    <div className="user">
                        <div className="avatar"></div>
                        <h4>EMMA WILSON</h4>
                        <span>CEO, TECHFLOW</span>
                    </div>
                </div>

                <div className="slide">
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                    <div className="user">
                        <div className="avatar"></div>
                        <h4>MICHAEL LEE</h4>
                        <span>DESIGNER, STUDIO X</span>
                    </div>
                </div>
                <div className="slide">
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                    <div className="user">
                        <div className="avatar"></div>
                        <h4>MICHAEL LEE</h4>
                        <span>DESIGNER, STUDIO X</span>
                    </div>
                </div>
                <div className="slide">
                    <p>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in”
                    </p>
                    <div className="user">
                        <div className="avatar"></div>
                        <h4>MICHAEL LEE</h4>
                        <span>DESIGNER, STUDIO X</span>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Slider