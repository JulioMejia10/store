// pages/api/users.js
import clientPromise from "../../lib/mongodb";

export const GET = async (req: any) => {
    if (req.method === "GET") {
        try {
            const client = await clientPromise;
            const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
            const usuarios = await db.collection("usuarios").find({}).toArray();
            return new Response(JSON.stringify(usuarios), {});
        } catch (error) {
            return new Response(JSON.stringify({ error: "Error en el servidor" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    } else {
        return new Response(JSON.stringify({ error: "no es get" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const POST = async (req: Request) => {
    try {
        const body = await req.json(); // Leer el cuerpo de la petición
        console.log(body, 'body');
        const { name, password } = body;
        const client = await clientPromise;
        const db = client.db(process.env.NEXT_PUBLIC_MONGODB_DB);
        const usuarios = await db.collection("usuarios").find({}).toArray();
        console.log(usuarios, 'usuarios');

        if (!name || !password) {
            return new Response(JSON.stringify({ error: "Nombre y email son requeridos ok" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        const result = usuarios.find((usuario: any) => {
            if (usuario.name === name && usuario.password === password) {
                return usuario;
            }
        });
        if (result) {
            return new Response(JSON.stringify({ message: "Usuario correcto", user: { name, password } }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        }
        console.log(result, 'result');
        if (!result) {
            return new Response(JSON.stringify({ message: "El usuario no es correcto", user: { name, password } }), {
                status: 401,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch {
        return new Response(JSON.stringify({ error: "Error en el servidor" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};

export const PUT = async (req: Request) => {
    try {
        const body = await req.json(); // Leer el cuerpo de la petición
        const { id, name, email } = body;

        if (!id || !name || !email) {
            return new Response(JSON.stringify({ error: "ID, nombre y email son requeridos" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        // Simulación de actualización de usuario
        return new Response(JSON.stringify({ message: "Usuario actualizado", user: { id, name, email } }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Error en el servidor" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};


