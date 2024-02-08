import React from 'react'
import Separador from '../components/Separador'

export default function page() {
  return (
    <>
    <h1 className='ml-52 text-3xl mb-10'>Research page</h1>
    <img src="/jumbotron.jpg" className='m-auto h-80 w-[80vw] object-cover' />
    <p className='text-center text-2xl my-10'>Research areas</p>
    <p className='text-center text-2xl mt-10 text-yellow-300'>Application Domains</p>
    <div className='grid grid-cols-3'>
      <div></div>
      <p className='text-center text-lg mt-3 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi culpa delectus eaque illum dolorum quaerat, molestiae necessitatibus doloremque expedita sint consequatur tempore, ducimus ipsam. Rem eos ducimus nobis unde!</p>
      <div></div>
    </div>
    <Separador/>
    Research page
    <Separador/>

    {/* TRES IMAGENES */}
    {/* TEXTO */}
    {/* OTRAS TRES IMAGENES */}
    {/* FOOTER */}
</>
  )
}
