// import React from 'react';
// import Carousel from '../components/Carrousel';

// const Page = () => {
//     const images = [
//         "https://betterware.com.mx/cdn/shop/files/25500-1-Better-Coffee-Betterware-459822_1680x.jpg?v=1734379856",
//         "https://betterware.com.mx/cdn/shop/files/24381-1-Tocador-Elegant-Betterware-314681_1680x.jpg?v=1734381311",
//         "https://betterware.com.mx/cdn/shop/files/25714-1-Repisa-TV-Betterware_886f3266-38d2-44f3-9dd9-259a5cba487d_1680x.jpg?v=1738344412",
//     ];

//     return (
//         <>
//             <Carousel images={images} />
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 p-6 w-full">
//                 <div className=" w-full lg:col-span-12">
//                     <p className="text-gray-600 text-xl w-full pt-4">Servicio de Apartados</p>
//                     <p className="text-gray-600  text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 p-6 w-full">
//                 <div className=" w-full lg:col-span-12">
//                     <p className="text-gray-500 text-xl w-full pt-4">Pedidos por Catalogo</p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolore error provident! Voluptas quis corporis, repellendus consequatur est fugit minus quidem enim pariatur, modi, excepturi accusamus voluptatum officia? Consectetur, quae.
//                     </p>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 p-6 w-full">
//                 <div className="w-full lg:col-span-12">
//                     <p className="text-gray-500 text-xl w-full pt-4">Servicio de Barberia Profesional</p>
//                     <p className="text-gray-500 text-base pt-2 pb-2">Estamos trabajando con <b>Julios Baber</b>, con la finalidad de darte un servicio que permita ahorrarte en un servicio indispensable, como lo es el corte de cabello</p>
//                     <h5 className='text-gray-500'>Corte de cabello para niño:</h5>
//                     <ol className='text-gray-500 text-base pt-2 pb-2'>
//                         <li>escolar</li>
//                         <li>clasico</li>
//                         <li>moderno</li>
//                     </ol>
//                     <br />
//                     <h5 className='text-gray-500'>Corte de cabello para jovenes</h5>
//                     <ol className='text-gray-500 text-base pt-2 pb-2'>
//                         <li>clasico</li>
//                         <li>moderno</li>
//                     </ol>
//                     <br />
//                     <h5 className='text-gray-500'>Corte de cabello para Adulto</h5>
//                     <ol className='text-gray-500 text-base pt-2 pb-2'>
//                         <li>clasico</li>
//                         <li>moderno</li>
//                     </ol>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Page
'use client'
import { useState, useEffect } from 'react';

const Page = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Añadir el listener de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el listener cuando el componente se desmonte
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Contenedor principal con parallax */}
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://betterware.com.mx/cdn/shop/files/24134-1-Trapi-Mop-Blue-Betterware-608570_1680x.jpg?v=1727126976')",
                    backgroundPositionY: `${scrollPosition * 0.5}px`, // Efecto parallax
                }}
            >
                {/* Contenido del parallax */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-center z-10">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold">Servicio de barberia</h1>
                        <p className="mt-4 text-lg md:text-xl">Cortes Profesionales</p>
                    </div>
                </div>
            </div>

            {/* Más contenido para simular desplazamiento */}
            <div className="py-24 bg-gray-200 text-center">
                <h2 className="text-2xl font-semibold">¡Continúa desplazándote!</h2>
                <p className="mt-4">Este es solo un ejemplo. Puedes agregar más contenido aquí.</p>
            </div>

            <div
                className="mt-4 relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://betterware.com.mx/cdn/shop/files/23144-1-Quita-Polvo-Flex-Betterware-296473_1680x.jpg?v=1727126475')",
                    backgroundPositionY: `${scrollPosition * 0.5}px`, // Efecto parallax
                }}
            >
                {/* Contenido del parallax */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-center z-10">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold">Servicio de barberia</h1>
                        <p className="mt-4 text-lg md:text-xl">Cortes Profesionales</p>
                    </div>
                </div>
            </div>

            {/* Footer o más contenido */}
            <footer className="py-10 bg-gray-700 text-white text-center">
                <p>&copy; 2025 El bazarcito de Julieta</p>
            </footer>
        </div>
    );
};

export default Page;
