import '../App.css';

const coin = (props) => {
    return (
        <div className='coin'>
            <img src={props.src} alt={props.name} className='coin-img'/>
            <div>
                <div className='coin-name'>{props.name}</div>
                <div className='coin-value'>${props.value}</div>
            </div>
            <button className='add-button'>Add to Cart</button>
        </div>
    )
};

export default coin;