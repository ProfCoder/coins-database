import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
        return (
            <Link className="header-url" to='/'>
                <header className='header'>
                    <h1 className="header__title">
                        Homepage
                    </h1>
                </header>
            </Link>
        );
}
 
export default Header;