'use client'

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Dropdown() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleClick = (option: number) => {
        if (option === 0) {
            router.push('/better');
            setIsOpen(false);
        } else if (option === 1) {
            router.push('/tupper');
            setIsOpen(false);
        } else if (option === 2) {
            router.push('/terramar');
            setIsOpen(false);
        } else if (option === 3) {
            // router.push('/shello')
        } else if (option === 4) {
            // router.push('/avon')
        } else if (option === 5) {
            // router.push('/arabela')
        } else if (option === 6) {
            // router.push('/fuller')
        } else if (option === 7) {
            // router.push('/andrea')
        }
    };

    // Cerrar el dropdown al hacer clic fuera
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left w-80" ref={dropdownRef}>
            {/* Botón */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-5 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 transition flex items-center"
            >
                Nuestros productos
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {/* Menú */}
            {isOpen && (
                <div className="absolute ml-4 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                    <a onClick={() => handleClick(0)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Betterware</a>
                    <a onClick={() => handleClick(1)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Tupperware</a>
                    <a onClick={() => handleClick(2)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Terramar</a>
                    <a onClick={() => handleClick(3)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Shello</a>
                    <a onClick={() => handleClick(4)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Avon</a>
                    <a onClick={() => handleClick(5)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Arabela</a>
                    <a onClick={() => handleClick(6)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Fuller</a>
                    <a onClick={() => handleClick(7)} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">Andrea</a>

                </div>
            )}
        </div>
    );
}
