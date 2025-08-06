import Navbar from "./Navbar.jsx";

function Hero() {
    return (
        <div className="relative bg-[url(/hero-grocery.jpg)] bg-cover bg-center bg-no-repeat min-h-screen w-full overflow-hidden flex flex-col
        before:absolute before:inset-0 before:bg-white/50 before:content-[''] before:z-0">
            <Navbar />

            <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 h-full px-4 sm:px-8 md:px-10 lg:px-16 py-8 sm:py-12 lg:py-16 max-w-[95%] sm:max-w-[65%] md:max-w-[65%]">
                <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-900">
                    Fresh Groceries Delivered to Your Door
                </h1>

                <p className="mt-2 text-[0.94rem]  sm:text-base md:text-lg text-green-950">
                    Get the freshest fruits, vegetables, and daily essentials delivered to your doorstep. Quick, easy, and convenient.
                </p>

                <div className="flex gap-6 sm:gap-2 w-full">
                    <a href="#featured" className="bg-green-800 border-2 border-green-800 p-2 rounded-sm text-white hover:bg-green-700">
                        Start Shopping
                    </a>
                    <a href="/cart" className="border-2 border-green-950 p-2 px-6 rounded-sm hover:bg-green-800 hover:text-white">
                        Go to Cart
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;