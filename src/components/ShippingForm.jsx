import React from 'react';

const statesInIndia = [
	"Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
	"Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
	"Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
	"Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
	"Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
	"West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
];

export default function ShippingForm() {
	return (
		<div className="bg-white p-8 rounded-lg shadow-md w-full">
			<h1 className="font-bold text-2xl mb-6 text-gray-800">Shipping Details</h1>
			<form className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex flex-col">
						<label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
						<input type="text" id="name" name="name" placeholder='Enter your full name' className="border-gray-300 border px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500" />
					</div>
					<div className="flex flex-col">
						<label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone Number</label>
						<input type="tel" id="phone" name="phone" placeholder='10-digit mobile number' className="border-gray-300 border px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500" />
					</div>
				</div>

				<div className="flex flex-col">
					<label htmlFor="street" className="text-sm font-medium text-gray-700 mb-1">Address</label>
					<input type="text" id="street" placeholder='Street, House No., Apartment' name="street" className="border-gray-300 border px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="flex flex-col">
						<label htmlFor="city" className="text-sm font-medium text-gray-700 mb-1">City</label>
						<input type="text" id="city" name="city" placeholder='Your City' className="border-gray-300 border px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500" />
					</div>
					<div className="flex flex-col">
						<label htmlFor="state" className="text-sm font-medium text-gray-700 mb-1">State</label>
						<select id="state" name="state" className="border-gray-300 border px-4 py-2 rounded-md bg-white focus:ring-2 focus:ring-green-500">
							<option value="">Select State</option>
							{statesInIndia.map(state => (
								<option key={state} value={state}>{state}</option>
							))}
						</select>
					</div>
					<div className="flex flex-col">
						<label htmlFor="pincode" className="text-sm font-medium text-gray-700 mb-1">Pincode</label>
						<input type="text" id="pincode" placeholder='6-digit PIN' name="pincode" className="border-gray-300 border px-4 py-2 rounded-md focus:ring-2 focus:ring-green-500" />
					</div>
				</div>
			</form>
		</div>
	);
}