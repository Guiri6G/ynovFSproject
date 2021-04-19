import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';

const Nav = () => {
    return(
        <nav className={navStyles.nav}>
            <div>
                <ul>
                    {/* <li>
                        <Link href='/eshop'>E-shop</Link>
                    </li> */}
                    <li>
                        <Link href='/about'>à propos</Link>
                    </li>
                    <li>
                        <Link href='/account'>Compte</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <ul>
                <li>
                    <Link href='/login'>Se connecter</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav