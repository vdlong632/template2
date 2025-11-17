import './Header.scss';
import logo from '../header/logo.png';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className='header__navigation'>
                    <div className="header__logo">
                        <img src={logo} alt=""/>
                        <span>FinanceFlow</span>
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
                <button>DOWNLOAD APP</button>
            </div>
        </header >
    )
}

export default Header;