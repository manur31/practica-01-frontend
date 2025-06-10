// import contactosJs from './contactos'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import {  useState, useEffect } from 'react'

const endpoint =  'https://3447-2001-1308-2414-1c00-1cc-9cf-9293-9e57.ngrok-free.app/api'

function App() {

  const [contactos, setContactos] = useState([])

  useEffect(() => {
    async function datos() {
    try {
      const response = await fetch(endpoint, {
        method: 'GET', headers: {
          'ngrok-skip-browser-warning':'true'
        }
      })
      const data = await response.json();
      setContactos(data.info);

    } catch (err) {
      console.log(err)
    }
  }
    datos();
  } , [])

  return (
    <main className='flex flex-col items-center p-0 sm:p-0 md:p-0 lg:p-0 xl:p-0'>
      <h1 className='font-bold text-3xl'>Mis Contactos</h1>
      <section className='w-[70%] grid items-center justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10'>
        {contactos.map(contacto => (
          <article key={contacto.id} className='bg-white border-black text-black p-4 w-110 rounded-2xl'>
            <h2 className='font-bold text-3xl'>{`${contacto.nombre} ${contacto.apellido}`}</h2>
            <p className='flex items-center gap-2 mt-2'><FiMail size={'1.5em'}/> {contacto.correo}</p>
            <p className='flex items-center gap-2 text-neutral-800 mt-2
            '><FiMapPin size={'1.5em'}/>{`${contacto.direccion}`} <span className='text-neutral-600 font-bold'>{`${contacto.ciudad}, ${contacto.pais}`}</span></p>
            <p className='flex items-center gap-2 mt-2' ><FiPhone size={'1.5em'}/>{contacto.telefono}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
