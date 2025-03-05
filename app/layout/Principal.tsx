'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConnectWhatsaap from "../components/ConnectWhatsaap";
import { productos } from "../products/page";
import { useTheme } from "next-themes";
import { MoonIcon } from "@heroicons/react/24/outline";
import Selector from '../components/Selector';

export default function Navbar() {
    const router = useRouter();
    const [query, setQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const items = ["Nuestros Servicios", "Servicio de Barberia", "Nuestras Promociones"];
    const { theme, setTheme } = useTheme()

    const handleClick = (option: number) => {
        if (option === 0) {
            router.push('/servicios')

        } else if (option === 1) {
            router.push('/barber')

        } else if (option === 2) {
            router.push('/contactanos')
        } else if (option === 3) {
            router.push('/products')
        }
    }
    useEffect(() => {
        console.log('query', query);
        const list: string[] = [];
        productos.forEach((item: any) => {
            if (item.nombre.toLowerCase().includes(query.toLowerCase())) {
                list.push(item?.id);
            }
        })
    }, [query, router])


    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-sky-500 text-white dark:text-sky-500 pt-4 dark:bg-gray-950 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <a onClick={() => handleClick(3)} href="#" className="text-2xl font-bold">
                    El Bazarcito de Julieta
                </a>
                {/* Buscador */}
                <div className="relative hidden md:block w-1/3">
                    <input
                        type="text"
                        placeholder="Buscar producto"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full p-2 pl-10 dark:text-white-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300 bg-white"
                    />
                    <svg className="absolute left-3 top-2.5 text-gray-600 dark:text-sky-300 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>

                {/* Botón del menú en móviles */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                <button>
                    <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
                </button>

                {/* Menú de navegación en pantallas grandes */}
                <ul className="hidden md:flex space-x-6">
                    {items.map((item, index) => (
                        <li onClick={() => handleClick(index)} key={index}>
                            <a href="#" className="font-medium hover:text-gray-300">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-sky-200 mx-auto mx-auto pt-2 pb-2 mt-2">
                <Selector />
            </div>

            {/* Menú desplegable en móviles/tablets */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
                    {items.map((item, index) => (
                        <li onClick={() => handleClick(index)} key={index}>
                            <a href="#" className="font-medium hover:text-gray-300">{item}</a>
                        </li>
                    ))}
                </ul>
            )}
            <ConnectWhatsaap />
        </nav>
    );
}
