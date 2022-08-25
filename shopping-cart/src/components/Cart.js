import '../App.css';

const Cart = (props) => {
    const {hide, increment} = props.funcs;
    const visibility = props.visible ? 'cart-visible' : 'cart-hidden';
    return (
        <div className={visibility} data-testid="cart">
            <h1>Crypto Cart</h1>
            <div><b>Total: $0</b></div>
            <button className='cart-button' id='checkout'>Checkout</button>
            <button className='cart-button' id='close-cart' onClick={hide}>Close</button>
        </div>
    )
};

export default Cart;