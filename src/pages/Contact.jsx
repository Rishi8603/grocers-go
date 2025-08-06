import Navbar from "@/components/Navbar";

function Contact() {
	return (
		<>
			<Navbar />
			<section className="max-w-5xl mx-auto px-6 py-16 text-zinc-800">
				<h1 className="text-4xl font-bold mb-4">Need Help?</h1>
				<p className="text-lg text-zinc-600 mb-10">
					We're here for you. Reach out to our support team and we’ll get back to you as soon as possible.
				</p>

				<div className="grid md:grid-cols-2 gap-12">

					<div>
						<h2 className="text-xl font-semibold mb-4">Send us a message</h2>
						<form className="space-y-4">
							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
								<input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
							</div>

							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
								<input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
							</div>

							<div>
								<label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
								<textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-zinc-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
							</div>

							<button
								type="submit"
								className="cursor-pointer text-white font-medium px-6 py-2 rounded-sm  bg-zinc-900"
							>
								Submit
							</button>
						</form>
					</div>
					<div className="space-y-8">
						<div>
							<h2 className="text-xl font-semibold mb-2"><span className="mdi mdi-face-agent"></span> Customer Support </h2>
							<p className="text-zinc-700">Email: <a href="mailto:support@auraattire.com" className="text-blue-600 underline">support@auraattire.com</a></p>
							<p className="text-zinc-700">WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className=" text-blue-600 underline">+91 98765 43210</a></p>
							<p className="text-zinc-700">Call Us: <a href="tel:+919876543210" className="underline text-blue-600">+91 98765 43210</a></p>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2"><span className="mdi mdi-clock-time-seven"></span> Support Hours</h2>
							<p className="text-zinc-700">Monday to Saturday: 10 AM – 7 PM</p>
							<p className="text-zinc-700">Sunday: Closed</p>
						</div>

						<div>
							<h2 className="text-xl font-semibold mb-2"><span className="mdi mdi-map-marker"></span> Visit Us (By Appointment)</h2>
							<p className="text-zinc-700">Aura Attire HQ</p>
							<p className="text-zinc-700">123 Fashion Street, Bandra West</p>
							<p className="text-zinc-700">Mumbai, Maharashtra, 400050</p>
						</div>

						<p className="text-sm text-zinc-500">
							You can also reach us via social media — links are in the footer.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
