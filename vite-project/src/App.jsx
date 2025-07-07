import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductInfo from './compontnts/ProductPage/ProductInfo';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ThankYou from './pages/ThankYou/ThankYou';
import Wishlist from './pages/Wishlist/Wishlist';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductInfo/>} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/ThankYou" element={<ThankYou />} />
      <Route path="/Wishlist" element={<Wishlist />} />
    </Routes>

  )
}

export default App
