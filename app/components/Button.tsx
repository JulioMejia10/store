'use client'

import React, { useEffect } from 'react'

export const HeaderPage = () => {
    const handleClick = async () => {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        console.log(res, 'response');
    }
    const handlePost = async () => {
        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "Juan", email: "juan@example.com" }),
        });
        const data = await res.json();
        console.log(data);
    }
    const updateUser = async () => {
        const res = await fetch("/api/users", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: 1, name: "Juan Pérez", email: "juanp@example.com" }),
        });
        const data = await res.json();
        console.log(data);
    };


    useEffect(() => {
        console.log('click')
    }, [])

    return (
        <>
            <div onClick={handleClick}>click here GET</div>
            <div onClick={handlePost}>consume post fetch</div>
            <div onClick={updateUser}>consume put fetch</div>
            <div className="bg-blue-500 text-white p-4">
                <h1 className="text-2xl font-bold">¡Hola, Tailwind CSS con Next.js!</h1>
                <p className="mt-2">Este es un ejemplo de cómo usar Tailwind CSS.</p>
            </div>
        </>
    )
}
