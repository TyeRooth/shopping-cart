import '../App.css';
import { Link } from 'react-router-dom';
import { mdiCart } from '@mdi/js';
import Icon from '@mdi/react';

const NavBar = (props) => {
    return (
        <header>
            <div className='header-div'>
                <Link to='/' className='link' id='logo-link'>
                    <h1 className='logo'>Crazy<br/>Cryptos</h1>
                </Link>
                <nav>
                    <Link to='/' className='link grow'>Home</Link>
                    <Link to='/coins' className='link grow'>Coins</Link>
                    <Link to='/contact' className='link grow'>Contact</Link>
                    <button id='cart-button' className='grow'>
                        <div id='cart-amount' aria-label='cart-amount'>{props.totalItems}</div>
                        <Icon path={mdiCart}
                            size={1.5} color='white'/>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;