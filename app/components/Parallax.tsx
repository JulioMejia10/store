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
                    backgroundImage: "url('https://reservoimg.s3.amazonaws.com/fotos_blog/fd1fb362-b_foto_blog.jpg')",
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
                    backgroundImage: "url('https://reservoimg.s3.amazonaws.com/fotos_blog/4aab7f1c-e_foto_blog.jpg')",
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

export default ParallaxComponent;
