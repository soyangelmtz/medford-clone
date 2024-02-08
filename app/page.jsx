import React from 'react'
import Link from 'next/link'
import Grid from './components/Grid'

export default function page() {
  return (
    <div className='w-[80vw] mx-auto'>
      {/* Jumbotron image */}
      <section className='flex overflow-hidden h-56'>
        <img className='mx-auto object-cover w-full' src="./jumbotron-2.jpg" alt="" />
      </section>

      <section className='h-[50vh] mt-20'>
        <div className='mx-auto md:grid md:grid-cols-2 md:w-[60vw] md:h-[70vh]'>
          <div className='flex-row justify-center px-5'>
            <p className='mt-10 mb-14'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium maiores aperiam repudiandae quidem consectetur, distinctio possimus omnis debitis quis minima libero aliquam itaque velit voluptatum optio aspernatur quisquam dolorum facilis earum molestiae dolor! Laborum tenetur amet, porro dolorum velit corrupti delectus cumque totam exercitationem fugit minima aliquam asperiores! Voluptates?
            </p>

            <Link className="border-2 border-white md:p-3 p-5 inline-flex mx-auto bg-yellow-500 hover:bg-white hover:border-yellow-500 hover:text-yellow-500 transition-all ease-out text-2xl " href="#">
              LEARN MORE
            </Link>
          </div>


          <div  className=" pl-10 pt-10">
            <p className=' text-3xl pb-10 text-yellow-500'>Contacto</p>
            <p className='py-2 text-xl pl-2'>📍 Ubicación</p>
            <p className='py-2'>Avenida Universidad s/n, Cd. Universitaria, Ciudad Universitaria, 66455 San Nicolás de los Garza, Nuevo Leon</p>
            <p className='py-2 text-xl pl-2'>☎️ Contacto</p>
            <p className='py-2'>ivansantos@email.com</p>
            <p className='py-2'>(81) 123 - 4567</p>
          </div>
        </div>
      </section>

      <section className='text-center'>
        <p className='text-3xl text-yellow-500'>AREAS OF RESEARCH</p>
        <Grid />
      </section>
    </div>
  )
}
