import React from "react";

const productos = [
    {
        id: 1,
        nombre: "Organi Latas Traslucent",
        descripcion: "Descripción corta del producto.",
        precio: 25.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/32017.jpg",
    },
    {
        id: 2,
        nombre: "Buro Caoba",
        descripcion: "Descripción corta del producto.",
        precio: 30.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/B.jpg",
    },
    {
        id: 3,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/13005.jpg",
    },
    {
        id: 4,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/13005.jpg",
    },
];

const Page = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {productos.map((producto) => (
                <div key={producto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className="rounded-lg w-full h-48 object-cover" src={producto.imagen} alt={producto.nombre} />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
                        <p className="text-gray-600 text-sm mt-2">{producto.descripcion}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold text-sky-500">${producto.precio.toFixed(2)}</span>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition">
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
