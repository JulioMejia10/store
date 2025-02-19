'use client'
import React, { useEffect, useState } from 'react'

import { usePathname } from "next/navigation";
import { productos } from '@/app/products/page';


const Page = () => {
    const [products, setProducts] = useState([]);
    const pathname = usePathname();
    const parts = pathname.split("/");
    const id = parts[2];

    useEffect(() => {
        console.log('id', id.split(','));
    }, [id])


    return (
        <>
            <div>resultados {id}</div>
        </>
    )
}

export default Page