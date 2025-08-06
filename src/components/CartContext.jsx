import { createContext, useState, useEffect } from 'react';
import { products as allProducts } from '../data/grocery'; // Full product list import karein

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (error) {
            console.error("Error parsing cart from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    //  Using product ID to add to cart
    const addToCart = (productId, quantity = 1) => {
        setCartItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === productId);

            if (existingItem) {
                // Agar item pehle se hai, toh quantity badhao
                return currentItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Agar naya item hai, toh products list se dhundh kar add karo
                const productToAdd = allProducts.find(p => p.id === productId);
                if (productToAdd) {
                    return [...currentItems, { ...productToAdd, quantity }];
                }
            }
            return currentItems; // No change if product not found
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            // Quantity zero ya kam hone par item remove kar do
            removeFromCart(productId);
        } else if (newQuantity <= 10) { // Max 10 items
            setCartItems(currentItems =>
                currentItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
    };

    const getTotal = (items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const getSubtotal = (items) => items.reduce((sum, item) => sum + item.originalPrice * item.quantity, 0);
    const getDiscount = (items) => getSubtotal(items) - getTotal(items);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotal, getSubtotal, getDiscount }}>
            {children}
        </CartContext.Provider>
    );
}