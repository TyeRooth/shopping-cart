import '../App.css';

const Bought = () => {
    return (
        <div className='bought-page'>
            <div className='bought-amount'>Thanks for your purchase! Your crypto wallet is now worth $0</div>
            <div className='gif-container'><iframe title="bought-gif" allow="fullscreen" frameBorder="0" height="270" src="https://giphy.com/embed/gzQQaZWUjSomCaUimW/video" width="480"></iframe></div>
        </div>
    );
};

export default Bought;