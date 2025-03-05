'use client'
import { useState, useEffect } from 'react';

const ParallaxComponent = () => {
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
                    backgroundImage: "url('https://media.gettyimages.com/id/872361244/es/foto/hombre-de-recibir-su-barba-cortan-con-m%C3%A1quina-de-afeitar-el%C3%A9ctrica.jpg?s=1024x1024&w=gi&k=20&c=Qv0wdVS3EhxE-Q7_hSyoYs01Jbbm_GO9Y0wgYN3VnPY=')",
                    backgroundPositionY: `${scrollPosition * 0.5}px`, // Efecto parallax
                }}
            >
                {/* Contenido del parallax */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-center z-10">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[2px_2px_10px_white]">Servicio de barberia</h1>
                        <p className="mt-4 text-lg md:text-xl font-bold drop-shadow-[2px_2px_10px_white]">Cortes Profesionales</p>
                    </div>
                </div>
            </div>

            {/* Más contenido para simular desplazamiento */}
            <div className="py-24 bg-[#F7F7F7] text-center">
                <h2 className="text-2xl font-semibold">¡Nos preocupamos por tu economía!</h2>
                <p className="mt-4">Estamos seguros que el servicio de barberia, es parte esencial para todos los padres de familia.</p>
                <p className="mt-4">Por eso mismo tenemos varios paquetes en nuestros servicios de barberia.</p>
                <p className="mt-4">Solo elije el que mas se adacte a ti.</p>

            </div>

            <div
                className="mt-4 relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://reservoimg.s3.amazonaws.com/fotos_blog/4aab7f1c-e_foto_blog.jpg')",
                    backgroundPositionY: `${scrollPosition * 0.5}px`, // Efecto parallax
                }}
            >
                {/* Contenido del parallax */}
                <div className="absolute inset-0 flex justify-center items-center text-white text-center z-10">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[2px_2px_10px_white]">Servicio de barberia</h1>
                        <p className="mt-4 text-lg md:text-xl font-bold drop-shadow-[2px_2px_10px_white]">Cortes Profesionales para niños, adolecentes y adultos</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                <div className="py-24 bg-gray-200 text-center rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Paquete 1</h2>
                    <p className="mt-4">Servicio en el local</p>
                    <p className="mt-4">Costo $120.00 MXN.</p>
                </div>
                <div className="py-24 bg-gray-200 text-center rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Paquete 2</h2>
                    <p className="mt-4">Servicio a domicilio</p>
                    <p className="mt-4">Costo $180.00 MXN.</p>
                </div>
                <div className="py-24 bg-gray-200 text-center rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Paquete 3</h2>
                    <p className="mt-4">En la compra mínima de $500 en productos del bazarcito de Julieta,</p>
                    <p className="mt-4">te damos el corte con el 50% de descuento.</p>
                    <p className="mt-4">Costo $60.00 MXN en nuestro local.</p>
                </div>
                <div className="py-24 bg-gray-200 text-center rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold">Paquete 4</h2>
                    <p className="mt-4">Membresia</p>
                    <p className="mt-4">Costo $230.00 MXN Mensuales</p>
                    <p className="mt-4">por 3 cortes</p>
                </div>
                {/* {[
                    { number: 1, parrafo1: 'Servicio en el local', parrafo2: 'Costo $100.00 MXN.' },
                    { number: 2, parrafo1: 'Servicio a domicilio', parrafo2: 'Costo $150.00 MXN.' },
                    { number: 3, parrafo1: 'Membresia', parrafo2: 'Costo $230.00 MXN.' },
                ].map((paquete) => (
                    <div key={paquete.number} className="py-24 bg-gray-200 text-center rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold">¡Paquete {paquete.number}!</h2>
                        <p className="mt-4">{paquete.parrafo1}</p>
                        <p className="mt-4">{paquete.parrafo2}</p>
                    </div>
                ))} */}
            </div>

            {/* Footer o más contenido */}
            <footer className="py-10 bg-gray-700 text-white text-center">
                <p>&copy; 2025 El bazarcito de Julieta</p>
            </footer>
        </div>
    );
};

export default ParallaxComponent;
