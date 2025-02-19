'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

export const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('login', name, password)
        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password, name }),
        });
        const data = await res.json();
        console.log(data);
        if (data.message === 'Usuario correcto') {
            router.push('/alta');
        } else {
            setError(data.message);
        }
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {/* <HeaderPage /> */}
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Iniciar Sesión</h2>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-gray-700">Usuario</label>
                        <input
                            type="Nombre"
                            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <p className='mt-2 text-red-500'>{error && <>El usuario no exite</>}</p>
                    {/* Botón de Login */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-400 transition"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* Enlace de registro */}
                <p className="mt-4 text-center text-gray-600">
                    ¿No tienes cuenta? <a href="#" className="text-blue-500 hover:underline">Regístrate</a>
                </p>
            </div>
        </div>
    )
}
