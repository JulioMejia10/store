'use client'
import { useState } from "react";

const page = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: ""
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Producto agregado:", product);
        // Aquí puedes agregar la lógica para enviar los datos a una API
    };

    return (
        <div className="max-w-lg mt-4 bg-gray-200 mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Agregar Producto</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Nombre</label>
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Descripción</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-700">Precio</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Imagen (URL)</label>
                    <input
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Agregar Producto
                </button>
            </form>
        </div>
    );
};

export default page;
