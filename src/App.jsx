import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import { products } from './data/grocery';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext'; // Import WishlistProvider
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist'; // Import Wishlist page

function App() {
  return (
    <WishlistProvider> {/* Wrap with WishlistProvider */}
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} /> {/* Add Wishlist route */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;