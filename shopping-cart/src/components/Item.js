import '../App.css';

const Item = (props) => {
    console.log(props);
    const {src, name, value, quantity} = props.coin;
    return (
        <div className='item'>
            <img src={src} alt={name} className='item-image' />
            <div className='item-details'>
                <div className='item-name'>{name}</div>
                <div className='item-value'>{value}</div>
                <div className='item-buttons'>
                    <button className='decrement'>-</button>
                    <div className='item-quantity'>{quantity}</div>
                    <button className='increment'>+</button>
                </div>
            </div>
        </div>
    )
};

export default Item;