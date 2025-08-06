import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Aarav Sharma",
    location: "Mumbai, MH",
    review: "The quality is consistently fantastic. Vegetables feel like they're straight from the farm. My family has become a huge fan of GrocerGo!",
    avatar: "https://avatar.iran.liara.run/public/boy?username=aarav"
  },
  {
    name: "Diya Mehta",
    location: "Delhi, DL",
    review: "Incredibly fast delivery! I placed an order during my morning meeting, and the groceries arrived before lunch. A real time-saver.",
    avatar: "https://avatar.iran.liara.run/public/girl?username=diya"
  },
  {
    name: "Kabir Patel",
    location: "Ahmedabad, GJ",
    review: "The app is so user-friendly. I found everything I needed in minutes. The seasonal fruit selection is particularly impressive.",
    avatar: "https://avatar.iran.liara.run/public/boy?username=kabir"
  },
  {
    name: "Ishika Singh",
    location: "Bengaluru, KA",
    review: "As someone who prefers organic, I'm thrilled with the options here. Everything is well-packaged and genuinely fresh.",
    avatar: "https://avatar.iran.liara.run/public/girl?username=ishika"
  },
  {
    name: "Rohan Gupta",
    location: "Pune, MH",
    review: "The customer support team was very helpful when I had a query about my order. Excellent service and great products!",
    avatar: "https://avatar.iran.liara.run/public/boy?username=rohan"
  },
  {
    name: "Myra Reddy",
    location: "Hyderabad, TS",
    review: "Finally, a grocery service that delivers on its promise of quality. The bread was soft, and the greens were crisp. Highly recommended!",
    avatar: "https://avatar.iran.liara.run/public/girl?username=myra"
  }
];

function Review() {
  return (
    <section className="bg-zinc-200  py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base font-bold text-green-400 tracking-wider uppercase">Testimonials</h2>
            <p className="mt-2 text-4xl font-extrabold sm:text-5xl">
                Why People Love Us
            </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl p-8 transform transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10">
              <span className="mdi mdi-format-quote-open text-6xl text-green-700"></span>
              <blockquote className="text-gray-300 text-lg mt-4 mb-6">{item.review}</blockquote>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-green-700">
                  <AvatarImage src={item.avatar} alt={item.name} />
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;