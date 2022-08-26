import '../App.css';
import Item from './Item';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const {hide, increment, decrement, reset} = props.funcs;
    const visibility = props.visible ? 'cart-visible' : 'cart-hidden';

    const totalCost = props.coins.reduce(
        (prevTotal, currCoin) => prevTotal + currCoin.quantity * currCoin.value,
        0
    );

    const checkout = () => {
        hide();
        reset();
    }
    
    const items = props.coins.map((coin) => {
        return <Item coin={coin} key={coin.name} addItem={increment} removeItem={decrement}/>
    })

    return (
        <div className={visibility} data-testid="cart">
            <h1>Crypto Cart</h1>
            <div className='items'>
                {items}
            </div>
            <div><b>Total: ${totalCost}</b></div>
            <button className='cart-button' id='checkout' onClick={checkout}>
                <Link to='/bought' id='checkout-link'>Checkout</Link>
            </button>
            <button className='cart-button' id='close-cart' onClick={hide}>Close</button>
        </div>
    )
};

export default Cart;