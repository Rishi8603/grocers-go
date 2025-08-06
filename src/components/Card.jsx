import React, { useContext } from 'react';
import { Button } from "./ui/button.jsx";
import QuantitySelector from "./QuantitySelector.jsx";
import { CartContext } from './CartContext.jsx';
import { WishlistContext } from './WishlistContext.jsx';

function Card({ product }) {
    // Correctly call contexts
    const { addToCart, updateQuantity, cartItems } = useContext(CartContext);
    const { addToWishlist, removeFromWishlist, isItemInWishlist } = useContext(WishlistContext);

    // Find if the item is in the cart and get its quantity
    const cartItem = cartItems.find(item => item.id === product.id);
    const quantityInCart = cartItem ? cartItem.quantity : 0;
    const inWishlist = isItemInWishlist(product.id);

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="group relative flex flex-col w-full max-w-xs sm:w-1/2 md:w-1/3 lg:w-1/4 flex-grow font-medium bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-xl">
            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.discount}% OFF
            </div>
            <button
                onClick={handleWishlistToggle}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/70 backdrop-blur-sm"
            >
                <span className={`mdi mdi-heart${inWishlist ? '' : '-outline'} text-2xl ${inWishlist ? 'text-red-500' : 'text-gray-600'}`}></span>
            </button>

            <div className="aspect-square w-full overflow-hidden">
                <img src={product.url} alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-gray-800 text-lg font-semibold mb-1 h-12">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <div className="flex-grow"></div>

                <div className="flex items-center gap-2 mb-3">
                    <p className="text-2xl font-bold text-gray-800">₹{product.price}</p>
                    <p className="text-md text-gray-400 line-through">₹{product.originalPrice}</p>
                </div>

                <div className="mt-auto">
                    {quantityInCart > 0 ? (
                        <QuantitySelector
                            onUpdate={(newQuantity) => updateQuantity(product.id, newQuantity)}
                            quantity={quantityInCart}
                            color="green"
                        />
                    ) : (
                        <Button onClick={() => addToCart(product.id)} className="w-full rounded-md bg-green-700 text-white cursor-pointer hover:bg-green-800 transition duration-150 h-10">
                            Add to Cart
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Card;