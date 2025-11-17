import './Header.scss';
import logo from '../header/logo.png';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='header__navigation'>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                        <span className="pc__logo">FinanceFlow</span>
                        <span className="mobile__logo">Crypto</span>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">PRICING</a></li>
                            <li><a href="#">TOKENS</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </nav>
                </div>
                <button className="btn-download">DOWNLOAD APP</button>
                <button className="btn-toggle">☰</button>
            </div>
        </header >
    )
}

export default Header;