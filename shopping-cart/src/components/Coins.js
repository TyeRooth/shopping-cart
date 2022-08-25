import '../App.css';
import Coin from './Coin';

const Coins = (props) => {
    const coins = props.coins;
    const coinComponents = coins.map((coin) => {
        return <Coin src={coin.src} name={coin.name} value={coin.value} key={coin.name} addCoin={props.addItem} />
    });
    return (
        <div className='coins-page'>
            <div className='coins-div'>
                {coinComponents}
            </div>
        </div>
    )
}

export default Coins;