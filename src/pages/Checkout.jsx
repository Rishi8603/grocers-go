import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';
import { Button } from '@/components/ui/button';
import ShippingForm from '@/components/ShippingForm';
import { Link } from 'react-router-dom';

function Checkout() {
    const { cartItems, getTotal, getSubtotal, getDiscount } = useContext(CartContext);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="bg-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="logo text-3xl font-bold text-green-800">
                        <Link to="/">Grocer<span className="text-green-600">Go</span></Link>
                    </h1>
                    <div className="flex items-center gap-2 text-gray-500">
                        <span className="mdi mdi-lock text-2xl"></span>
                        <span className="font-semibold">Secure Checkout</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Shipping and Payment */}
                    <div className="lg:col-span-2 space-y-8">
                        <ShippingForm />

                        {/* Payment Options */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="font-bold text-2xl mb-6 text-gray-800">Payment Method</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-green-500">
                                    <input type="radio" name="payment-option" className="h-5 w-5 text-green-600 focus:ring-green-500" />
                                    <span className="ml-3 font-medium">Credit/Debit Card</span>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-green-500">
                                    <input type="radio" name="payment-option" className="h-5 w-5 text-green-600 focus:ring-green-500" />
                                    <span className="ml-3 font-medium">UPI</span>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-green-500">
                                    <input type="radio" name="payment-option" className="h-5 w-5 text-green-600 focus:ring-green-500" />
                                    <span className="ml-3 font-medium">Netbanking</span>
                                </label>
                                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:border-green-500">
                                    <input type="radio" name="payment-option" className="h-5 w-5 text-green-600 focus:ring-green-500" />
                                    <span className="ml-3 font-medium">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:sticky top-28 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-4">Order Summary</h2>
                        <div className="space-y-2">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">{item.name} (x{item.quantity})</span>
                                    <span className="font-medium">₹{item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-4 mt-4 space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">₹{getSubtotal(cartItems)}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount</span>
                                <span className="font-medium">− ₹{getDiscount(cartItems)}</span>
                            </div>
                            <div className="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
                                <span>Total Amount</span>
                                <span>₹{getTotal(cartItems)}</span>
                            </div>
                        </div>
                        <Button className="w-full mt-6 bg-green-700 hover:bg-green-800 py-3 text-lg">
                            Place Order
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Checkout;