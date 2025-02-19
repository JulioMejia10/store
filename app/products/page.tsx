import React from "react";

export const productos = [
    {
        id: 1,
        nombre: "Organi Latas Traslucent",
        descripcion: "Descripción corta del producto.",
        precio: 25.0,
        imagen:
            "https://betterware.com.mx/cdn/shop/files/25802-1-Organi-Latas-Traslucent-Betterware_ee6ab81d-27e4-4832-bb18-257bd367c26f_1680x.jpg?v=1738344411",
    },
    {
        id: 2,
        nombre: "Buro Caoba",
        descripcion: "Descripción corta del producto.",
        precio: 30.0,
        imagen:
            "https://betterware.com.mx/cdn/shop/files/25308-1-Buro-Caoba-Betterware-282276_1680x.jpg?v=1737438706",
    },
    {
        id: 3,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://betterware.com.mx/cdn/shop/files/25714-1-Repisa-TV-Betterware_886f3266-38d2-44f3-9dd9-259a5cba487d_1680x.jpg?v=1738344412",
    },
    {
        id: 4,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://betterware.com.mx/cdn/shop/files/25714-1-Repisa-TV-Betterware_886f3266-38d2-44f3-9dd9-259a5cba487d_1680x.jpg?v=1738344412",
    },
    {
        id: 5,
        nombre: "Organi Latas Traslucent",
        descripcion: "Descripción corta del producto.",
        precio: 25.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/32017.jpg",
    },
    {
        id: 6,
        nombre: "Buro Caoba",
        descripcion: "Descripción corta del producto.",
        precio: 30.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/B.jpg",
    },
    {
        id: 7,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/13005.jpg",
    },
    {
        id: 8,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://webimages.terramarbrands.com.mx/shopping-cart/cart-products/13005.jpg",
    },
    {
        id: 9,
        nombre: "Organi Latas Traslucent",
        descripcion: "Descripción corta del producto.",
        precio: 25.0,
        imagen:
            "https://www.tupperware.com.mx/cdn/shop/files/ESC34_g_1_8982551a-76c2-498d-b12c-02ff1fd89f0c_1200x.png?v=1737584118",
    },
    {
        id: 10,
        nombre: "Buro Caoba",
        descripcion: "Descripción corta del producto.",
        precio: 30.0,
        imagen:
            "https://www.tupperware.com.mx/cdn/shop/products/Botella_para_agua_Eco_twist_2L_azul_250x.png?v=1737744191",
    },
    {
        id: 11,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://www.tupperware.com.mx/cdn/shop/products/Botella_para_agua_Eco_twist_750ml_Tupperware_Roja_con_blanco_250x.png?v=1737746306",
    },
    {
        id: 12,
        nombre: "Repisa para TV",
        descripcion: "Descripción corta del producto.",
        precio: 45.0,
        imagen:
            "https://www.tupperware.com.mx/cdn/shop/products/Recipiente_para_congelar_alimentos_Tupperware_Chico_250x.png?v=1736644222",
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
