import '../App.css';
import Coin from './Coin';

const Coins = () => {
    return (
        <div className='coins-page'>
            <div className='coins-div'>
                <Coin/>
                <Coin/>
                <Coin/>
            </div>
        </div>
    )
}

export default Coins;