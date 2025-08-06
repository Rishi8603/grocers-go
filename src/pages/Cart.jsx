import Navbar from "@/components/Navbar";
import QuantitySelector from "@/components/QuantitySelector";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
	const { cartItems, removeFromCart, updateQuantity, getTotal, getSubtotal, getDiscount } = useContext(CartContext);

	if (cartItems.length === 0) {
		return (
			<>
				<Navbar />
				<div className="text-center py-20">
					<img src="/empty-cart.png" className="mx-auto h-48" alt="Empty Cart" />
					<h2 className="mt-6 text-2xl font-semibold text-gray-800">Your cart is empty</h2>
					<p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
					<Link to="/shop">
						<Button className="mt-6 bg-green-700 hover:bg-green-800 rounded-full px-8 py-3 text-lg">
							Start Shopping
						</Button>
					</Link>
				</div>
			</>
		);
	}

	return (
		<div className="bg-gray-50 min-h-screen">
			<Navbar />
			<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
					{/* Cart Items */}
					<div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 space-y-6">
						{cartItems.map((item) => (
							<div key={item.id} className="flex items-center gap-4">
								<img src={item.url} alt={item.name} className="w-24 h-24 rounded-lg object-cover" />
								<div className="flex-grow">
									<h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
									<p className="text-gray-600">₹{item.price} / {item.unit}</p>
								</div>
								<div className="flex items-center gap-4">

<QuantitySelector
    onUpdate={(newQuantity) => updateQuantity(item.id, newQuantity)}
    quantity={item.quantity}
    color="green"
/>
									<button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-gray-400 hover:text-red-600">
										<span className="mdi mdi-trash-can-outline text-2xl"></span>
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Order Summary */}
					<div className="lg:sticky top-28 bg-white rounded-lg shadow-md p-6">
						<h2 className="text-xl font-semibold mb-4 border-b pb-4">Order Summary</h2>
						<div className="space-y-3">
							<div className="flex justify-between">
								<span className="text-gray-600">Subtotal</span>
								<span className="font-medium">₹{getSubtotal(cartItems)}</span>
							</div>
							<div className="flex justify-between text-red-600">
								<span>Discount</span>
								<span className="font-medium">− ₹{getDiscount(cartItems)}</span>
							</div>
							<div className="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
								<span>Total</span>
								<span>₹{getTotal(cartItems)}</span>
							</div>
						</div>
						<Link to="/checkout">
							<Button className="w-full mt-6 bg-green-700 hover:bg-green-800 py-3 text-lg">
								Proceed to Checkout
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
export default Cart;