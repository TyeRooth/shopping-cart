import '../App.css';

const Cart = () => {
    return (
        <div className='cart-hidden'>
            <h1>Crypto Cart</h1>
            <div><b>Total: $0</b></div>
            <button className='cart-button' id='checkout'>Checkout</button>
            <button className='cart-button' id='close-cart'>Close</button>
        </div>
    )
};

export default Cart;