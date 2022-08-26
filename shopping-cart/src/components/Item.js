import '../App.css';

const Item = (props) => {
    const {src, name, value, quantity} = props.coin;
    const addItem = () => props.addItem(name);
    const removeItem = () => props.removeItem(name);

    return (
        <div className='item' data-testid="item">
            <img src={src} alt={name} className='item-image' />
            <div className='item-details'>
                <div className='item-name'>{name}</div>
                <div className='item-value'>{value}</div>
                <div className='item-buttons'>
                    <button className='decrement' onClick={removeItem}>-</button>
                    <div className='item-quantity'>{quantity}</div>
                    <button className='increment' onClick={addItem}>+</button>
                </div>
            </div>
        </div>
    )
};

export default Item;