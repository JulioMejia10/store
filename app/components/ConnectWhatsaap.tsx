import React from 'react'
import WhatsAppIcon from './WhatsAppIcon'

const ConnectWhatsaap = () => {
    const phoneNumber = "5571906152"; // Reemplaza con tu número de WhatsApp
    const message = "¡Hola! Me gustaría obtener más información."; // Mensaje predefinido

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };
    return (
        <button
            onClick={handleWhatsAppClick}
            className="z-50 fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg transition duration-300"
        >
            <WhatsAppIcon />
            Contactar por WhatsApp
        </button>
    )
}

export default ConnectWhatsaap