import React, { useRef, useEffect } from 'react';

export default function Signup({ onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        if (dialogRef.current) dialogRef.current.showModal();

        const handleOutsideClick = (event) => {
            if (event.target === dialogRef.current) {
                handleClose();
            }
        };

        const dialog = dialogRef.current;
        dialog.addEventListener('click', handleOutsideClick);
        return () => dialog.removeEventListener('click', handleOutsideClick);
    }, []);

    const handleClose = () => {
        dialogRef.current.close();
        onClose();
    };

    return (
        <dialog ref={dialogRef} className="rounded-lg shadow-xl bg-white w-full max-w-md p-0 backdrop:bg-black/60">
            <div className='relative flex flex-col items-center p-8 sm:p-12'>
                <button onClick={handleClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600">&times;</button>
                <h1 className="logo text-3xl text-green-800 font-bold cursor-pointer mb-2">
                    Grocer <span className="text-green-600">Go.</span>
                </h1>
                <h2 className="text-xl text-gray-700 mb-6">Create Your Account</h2>

                <form className="w-full flex flex-col gap-4">
                    <input type="text" placeholder="Full Name" className="w-full border-gray-300 border px-4 py-2.5 rounded-md focus:ring-2 focus:ring-green-500" />
                    <input type="email" placeholder="Email Address" className="w-full border-gray-300 border px-4 py-2.5 rounded-md focus:ring-2 focus:ring-green-500" />
                    <input type="password" placeholder="Password" className="w-full border-gray-300 border px-4 py-2.5 rounded-md focus:ring-2 focus:ring-green-500" />

                    <button type="submit" className="w-full bg-green-700 text-white py-2.5 rounded-md hover:bg-green-800 transition-colors mt-2">Sign Up</button>
                </form>
            </div>
        </dialog>
    );
}