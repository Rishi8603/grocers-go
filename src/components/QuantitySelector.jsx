import React from 'react';

function QuantitySelector({ quantity, onUpdate, color = 'zinc' }) {
    const buttonColorClass = `bg-${color}-700 hover:bg-${color - 800}`;

    return (
        <div className="inline-flex items-center justify-center gap-3 w-full">
            <button
                className={`${buttonColorClass} text-white w-8 h-8 rounded-full flex items-center justify-center text-lg transition`}
                onClick={() => onUpdate(quantity - 1)}
            >
                −
            </button>
            <span className="w-10 text-center text-xl font-bold">{quantity}</span>
            <button
                className={`${buttonColorClass} text-white w-8 h-8 rounded-full flex items-center justify-center text-lg transition`}
                onClick={() => onUpdate(quantity + 1)}
            >
                +
            </button>
        </div>
    );
}

export default QuantitySelector;