import '../App.css';
import bitcoin from '../images/bitcoin.png'

const coin = () => {
    return (
        <div className='coin'>
            <img src={bitcoin} alt='bitcoin' className='coin-img'/>
            <div>
                <div className='coin-name'>Bitcoin</div>
                <div className='coin-value'>$10,000</div>
            </div>
            <button className='add-button'>Add to Cart</button>
        </div>
    )
};

export default coin;