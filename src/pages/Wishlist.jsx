import React, { useContext } from 'react';
import { WishlistContext } from '../components/WishlistContext';
import { CartContext } from '../components/CartContext';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleMoveToCart = (product) => {
    addToCart(product.id);
    removeFromWishlist(product.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="text-center py-20">
          <span className="mdi mdi-heart-broken-outline text-8xl text-gray-300"></span>
          <h2 className="mt-6 text-2xl font-semibold text-gray-800">Your wishlist is empty</h2>
          <p className="text-gray-500 mt-2">Explore products and add your favorites to your wishlist.</p>
          <Link to="/shop">
            <Button className="mt-6 bg-green-700 hover:bg-green-800 rounded-full px-8 py-3 text-lg">
              Discover Products
            </Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist ({wishlistItems.length})</h1>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4 last:border-b-0">
              <img src={item.url} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-600 font-bold text-xl">₹{item.price}</p>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleMoveToCart(item)} className="bg-green-700 hover:bg-green-800 rounded-md">Move to Cart</Button>
                <Button onClick={() => removeFromWishlist(item.id)} variant="outline" className="text-gray-500 hover:text-red-600">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Wishlist;