import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Coins from './components/Coins';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Bought from './components/Bought';

import bitcoin from './images/bitcoin.png';
import ethereum from './images/ethereum.jpg';
import tether from './images/tether.png';
import usdc from './images/usdc.png';
import binance from './images/binance.png';
import xrp from './images/xrp.png';
import cardano from './images/cardano.png';
import solana from './images/solana.jpeg';
import polkadot from './images/polkadot.png';
import dogecoin from './images/dogecoin.svg';
import avalanche from './images/avalanche.png';
import loopring from './images/loopring.png';
import imx from './images/imx.png';


function App() {
  const [coins, setCoins] = useState(coinsArray);
  const [cart, setCart] = useState(false);

  function showCart () {setCart(true)};
  function hideCart () {setCart(false)};

  const cartAmount = coins.reduce(
    (prevCoins, currCoin) => prevCoins + currCoin.quantity,
    0,
  );
  
  function incrementQuantity (item) {
    const updatedCoins = coins.map(coin => {
      if (coin.name === item) {
        coin.quantity++;
      }
      return coin;
    });
    setCoins(updatedCoins); 
  };

  const cartFuncs = {
    hide: hideCart,
    increment: incrementQuantity
  };

  return (
    <Router>
      <div className='page'>
        <NavBar totalItems={cartAmount} showCart={showCart}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins coins={coinsArray} addItem={incrementQuantity}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bought" element={<Bought />} />
          </Routes>
      </div>
      <Cart visible={cart} funcs={cartFuncs} coins={coins[0]}/>
      <div className={cart ? 'cart-backdrop-visible' : 'cart-backdrop-hidden'} onClick={hideCart}></div>
    </Router>
  );
}

const coinsArray = [
  {
    src: bitcoin,
    name: 'Bitcoin',
    value: 10000,
    quantity: 0, 
  },
  {
    src: avalanche,
    name: 'Avalanche',
    value: 100,
    quantity: 0,
  },
  {
    src: binance,
    name: "Binance",
    value: 100,
    quantity: 0,
  },
  {
    src: cardano,
    name: "Cardano",
    value: 200,
    quantity: 0,
  },
  {
    src: dogecoin,
    name: "Dogecoin",
    value: 0.71,
    quantity: 0,
  },
  {
    src: ethereum,
    name: "Ethereum",
    value: 8000,
    quantity: 0,
  },
  {
    src: imx,
    name: "IMX",
    value: 50,
    quantity: 0,
  },
  {
    src: loopring,
    name: "Loopring",
    value: 70,
    quantity: 0,
  },
  {
    src: polkadot,
    name: "Polkadot",
    value: 234.76,
    quantity: 0,
  },
  {
    src: solana,
    name: "Solana",
    value: 342.59,
    quantity: 0,
  },
  {
    src: tether,
    name: "Tether",
    value: 0.7,
    quantity: 0,
  },
  {
    src: usdc,
    name: "USDC",
    value: 0.99,
    quantity: 0,
  },
  {
    src: xrp,
    name: "XRP",
    value: 1111,
    quantity: 0,
  },
]

export default App;
