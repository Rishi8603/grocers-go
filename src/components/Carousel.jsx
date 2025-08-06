import { useState } from "react";

export default function Carousel({ images }) {
    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? images.length - 1 : prev + 1)); 
    };

    return (
        <div className="relative h-full rounded-xs overflow-hidden">
            <div className=" flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((imageSrc, index) => (
                <img key={index} src={imageSrc} alt={`Slide ${index}`} className="w-full h-full flex-shrink-0 object-cover" />)
                )}
            </div>

            <button onClick={prevImage} disabled={current === 0} className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-black/60 text-white text-[1.4rem] sm:text-3xl p-2 sm:p-3 rounded-full z-10 shadow-md transition disabled:opacity-40 cursor-pointer disabled:cursor-auto">
                <span className="mdi mdi-chevron-left" />
            </button>

            <button onClick={nextImage} disabled={current === images.length - 1} className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-black/60 text-white text-[1.4rem] sm:text-3xl p-2 sm:p-3 rounded-full z-10 shadow-md transition disabled:opacity-40 cursor-pointer disabled:cursor-auto">
                <span className="mdi mdi-chevron-right" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                <span
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    current === index ? "bg-white" : "bg-gray-400"
                    }`}
                ></span>
                ))}
            </div>
        </div>
    );
}
