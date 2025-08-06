import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button.jsx";
import { useState, useContext } from "react";
import { CartContext } from "./CartContext.jsx";

import Login from "./Login.jsx";
import { Link } from "react-router-dom";

function Navbar() {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.length;

    const [showLogin, setShowLogin] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-md flex items-center justify-between py-3 px-4 sm:px-8">
            <div className="flex items-center gap-6">
                <h1 className="logo text-4xl pr-2 font-bold text-green-800">
                    <Link to="/">Grocer<span className="text-green-600">Go</span></Link>
                </h1>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuLink href="/">Home</NavigationMenuLink>
                        <NavigationMenuLink href="/shop">Shop</NavigationMenuLink>
                        <NavigationMenuLink href="/about">About</NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
                <span className="logo text-4xl pr-2 font-bold text-green-800">G</span>
            </div>

            <div className="hidden lg:flex flex-1 justify-center px-4">
                <div className="relative w-full max-w-lg">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full border-gray-300 border bg-gray-100 px-5 py-2.5 rounded-full focus:ring-2 focus:ring-green-500"
                    />
                    <span className="mdi mdi-magnify absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400"></span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/wishlist" className="relative">
                    <span className="mdi mdi-heart-outline text-2xl"></span>
                </Link>
                <Link to="/cart" className="relative">
                    <span className="mdi mdi-cart-outline text-2xl"></span>
                    {cartCount > 0 &&
                        <span className="absolute -top-1 -right-1.5 text-xs bg-red-600 text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                    }
                </Link>
                <Button onClick={() => setShowLogin(true)} className='hidden md:inline-block cursor-pointer rounded-full bg-green-700 hover:bg-green-800 px-6'>
                    Login
                </Button>

                {/* Hamburger Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden z-50 h-8 w-8 flex flex-col justify-center items-center gap-1.5">
                    <span className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Menu Panel */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center">
                    <nav className="flex flex-col items-center gap-8 text-2xl font-semibold">
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <Button onClick={() => { setIsMenuOpen(false); setShowLogin(true); }} className='mt-8 cursor-pointer rounded-full bg-green-700 hover:bg-green-800 px-8 py-3 text-lg'>
                            Login
                        </Button>
                    </nav>
                </div>
            )}

            {showLogin && (<Login onClose={() => setShowLogin(false)} switchToSignup={() => { setShowLogin(false); /* Logic to show signup */ }} />)}

        </header>
    );
}
export default Navbar;