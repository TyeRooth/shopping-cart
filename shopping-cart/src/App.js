import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Coins from './components/Coins';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Bought from './components/Bought';

function App() {
  return (
    <Router>
      <div className='page'>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bought" element={<Bought />} />
          </Routes>
      </div>
      <Cart />
      <div className='cart-backdrop-hidden'></div>
    </Router>
  );
}

export default App;
