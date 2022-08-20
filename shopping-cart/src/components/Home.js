import '../App.css';
import { Link } from 'react-router-dom';
import { mdiBitcoin } from '@mdi/js';
import Icon from '@mdi/react';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-section'>
                <div className='catchphrase'>Since crypto only ever goes up, we always have the best deals on your favorite coins</div>
                <Link to='/coins' className='link grow'>
                    <div className='shop-now'>
                        Shop Now
                    </div>
                </Link>
            </div>
            <div className='home-section'>
                <Icon path={mdiBitcoin} size={20} color='gold'/>
            </div>
        </div>
    )
};

export default Home;