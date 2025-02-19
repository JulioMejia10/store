'use client'
import { useState, useEffect } from "react";

type Props = {
    images: string[];
};

export default function Carousel(CarouselProps: Props) {
    const { images } = CarouselProps;
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar la imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="p-4 relative w-full max-w-full mx-auto h-[500px]">
            {/* Imagen activa */}
            <div className="overflow-hidden h-full">
                <img
                    src={images[currentIndex]}
                    alt={`Imagen ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out opacity-100"
                />
            </div>

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full transition-all duration-300 hover:bg-gray-800"
            >
                ⬅
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full transition-all duration-300 hover:bg-gray-800"
            >
                ➡
            </button>

            {/* Indicadores de posición */}
            <div className="pb-2 absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images && images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-500"
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
