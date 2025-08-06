import React from 'react';

function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
				{/* About Section */}
				<div className="col-span-2 md:col-span-1">
					<h2 className="text-2xl font-bold text-white mb-4">Grocer Go</h2>
					<p className="text-gray-400">
						Your daily source for the freshest groceries, delivered right to your door.
					</p>
					<div className="flex mt-4 space-x-4">
						<a href="#" className="text-gray-400 hover:text-white"><span className="mdi mdi-facebook text-2xl"></span></a>
						<a href="#" className="text-gray-400 hover:text-white"><span className="mdi mdi-instagram text-2xl"></span></a>
						<a href="#" className="text-gray-400 hover:text-white"><span className="mdi mdi-twitter text-2xl"></span></a>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
						<li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
						<li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
						<li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
					</ul>
				</div>

				{/* Categories */}
				<div>
					<h3 className="font-semibold text-white tracking-wider uppercase mb-4">Categories</h3>
					<ul className="space-y-2">
						<li><a href="/shop" className="text-gray-400 hover:text-white">Fruits</a></li>
						<li><a href="/shop" className="text-gray-400 hover:text-white">Vegetables</a></li>
						<li><a href="/shop" className="text-gray-400 hover:text-white">Dairy</a></li>
						<li><a href="/shop" className="text-gray-400 hover:text-white">Bakery</a></li>
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="font-semibold text-white tracking-wider uppercase mb-4">Subscribe</h3>
					<p className="text-gray-400 mb-4">Get the latest updates and offers.</p>
					<form>
						<input
							type="email"
							placeholder="Your email"
							className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
						/>
						<button
							type="submit"
							className="w-full mt-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
			<div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500">
				<p>&copy; {new Date().getFullYear()} Grocer Go. All Rights Reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;