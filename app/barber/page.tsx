import React from 'react';
// import Carousel from '../components/Carrousel';
import ParallaxComponent from '../components/Parallax';

const Page = () => {
    const images = [
        "https://reservoimg.s3.amazonaws.com/fotos_blog/fd1fb362-b_foto_blog.jpg",
        "https://reservoimg.s3.amazonaws.com/fotos_blog/4aab7f1c-e_foto_blog.jpg",
    ];
    return (
        <>
            <ParallaxComponent />

            {/* <Carousel images={images} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 p-6 w-full">
                <div className="w-full lg:col-span-12">
                    <p className="text-gray-500 text-xl w-full pt-4">Servicio de Barberia Profesional</p>
                    <p className="text-gray-500 text-base pt-2 pb-2">Estamos trabajando con <b>Julios Baber</b>, con la finalidad de darte un servicio que permita ahorrarte en un servicio indispensable, como lo es el corte de cabello</p>
                    <h5 className='text-gray-500'>Corte de cabello para niño:</h5>
                    <ol className='text-gray-500 text-base pt-2 pb-2'>
                        <li>escolar</li>
                        <li>clasico</li>
                        <li>moderno</li>
                    </ol>
                    <br />
                    <h5 className='text-gray-500'>Corte de cabello para jovenes</h5>
                    <ol className='text-gray-500 text-base pt-2 pb-2'>
                        <li>clasico</li>
                        <li>moderno</li>
                    </ol>
                    <br />
                    <h5 className='text-gray-500'>Corte de cabello para Adulto</h5>
                    <ol className='text-gray-500 text-base pt-2 pb-2'>
                        <li>clasico</li>
                        <li>moderno</li>
                    </ol>

                </div>
            </div> */}
        </>
    )
}

export default Page