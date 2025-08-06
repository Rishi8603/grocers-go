import React from 'react';
import Navbar from '@/components/Navbar';

function AboutUs() {
  return (
    <div className='bg-green-50'>
      <Navbar />
      <section className="flex justify-center items-start px-4  py-10">
        <div className="max-w-4xl">
          <h1 className="text-center text-4xl font-bold mb-8 text-green-800">
            About Grocer Go
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-green-600">Grocer Go</span> – your one-stop shop for fresh groceries.
              Based in <span className="font-medium text-gray-700">Mumbai, Maharashtra</span>,
              we are dedicated to bringing you the freshest produce and daily essentials right to your doorstep.
            </p>

            <p>
              At Grocer Go, we believe in quality and convenience. We source our products from local farms and trusted suppliers to ensure you get the best.
            </p>

            <p>
              ✦ <strong>Fresh Produce:</strong> We handpick the freshest fruits and vegetables for you.<br />
              ✦ <strong>Fast Delivery:</strong> We offer quick and reliable delivery services across the city.<br />
              ✦ <strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We are here to help you with all your grocery needs.
            </p>

            <p>
              Thank you for choosing Grocer Go. We look forward to serving you!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;