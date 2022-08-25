import '../App.css';

const coin = (props) => {
    // Created separate consts since I ran into binding issues.
    const name = props.name;
    const addCoin = props.addCoin;
    const addHandler = () => addCoin(name);

    return (
        <div className='coin'>
            <img src={props.src} alt={props.name} className='coin-img'/>
            <div>
                <div className='coin-name'>{name}</div>
                <div className='coin-value'>${props.value}</div>
            </div>
            <button className='add-button' onClick={addHandler}>Add to Cart</button>
        </div>
    )
};

export default coin;