import AppleComputers from './AppleComputers.png'
import Laptop from './Laptop.png'
import './Banner.scss'
const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner__content">
                <h1>Buy, trade, and hold 350+ cryptocurrencies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>
                <div className="contents__buttons">
                    <button className="btn btn--download">DOWNLOAD APP</button>
                    <button className="btn btn--view">VIEW PRICING</button>
                </div>
            </div>

            <div className='banner__img'>
                <img src={AppleComputers} alt="" />
            </div>
            <div className="banner__img__mobile">
                <img src={Laptop} alt=""/>
            </div>
        </section>
    )
}
export default Banner;