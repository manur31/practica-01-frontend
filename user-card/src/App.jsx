// import contactosJs from './contactos'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiMap } from "react-icons/fi";
import {  useState, useEffect } from 'react'

const endpoint = 'http://localhost:3005/api'

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
    <main className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl mt-16'>Mis Contactos</h1>
      <section className='w-full grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 px-10'>
        {contactos.map(contacto => (
          <article key={contacto.id} className='bg-white border-black text-black p-8 w-full rounded-2xl'>
            <h2 className='font-bold text-3xl mb-4'>{`${contacto.nombre} ${contacto.apellido}`}</h2>
            <p className='flex items-center gap-2 text-neutral-800 mt-2 text-lg
            '><FiMapPin size={'1.5em'}/>{`${contacto.direccion}`}</p>
            <p className='flex items-center gap-2 mt-3 text-lg'><FiMap size={'1.5em'}/>{`${contacto.ciudad}, ${contacto.pais}`}</p>
            <p className='flex items-center gap-2 mt-3 text-lg'><FiMail size={'1.5em'}/> {contacto.correo}</p>
            <p className='flex items-center gap-2 mt-3 text-lg' ><FiPhone size={'1.5em'}/>{contacto.telefono}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
