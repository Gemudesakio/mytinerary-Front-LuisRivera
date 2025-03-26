   /* Componente de Navbar Responsivo */
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const routes = [
  {path:"/", name:"Home"},
  {path:"/cities", name: "Cities"}
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-4 py-3 bg-black/70 z-999 fixed w-full backdrop-blur-md ">
      <div className="w-full sm:flex sm:items-center sm:justify-between m-auto lg:w-[67%]">
        {/* Sección del logo y botón de menú */}
        <section className="flex justify-between items-center">
          <h2 className="text-amber-50 text-2xl sm:text-3xl font-black">
            My Tinerary
          </h2>
          <div className="flex items-center">

               {/* svg de engranaje*/}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  className="w-7 h-7  text-amber-50 sm:absolute sm:left-1/2 sm:-translate-x-1/2
"
                  fill='white'
                >
                  <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
                </svg>

               {/* boton de hamburguesa para pantallas pequenias*/}
            <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={32} color="white" className="scale-130" />
            </button>
          </div>
        </section>

           {/* Menu que se despliega o se oculta segun el tamanio de la pantalla y segun se haga click o no en el boton hamburguesa*/}

        <div className={`flex flex-col items-left mt-3 gap-3   sm:flex-row sm:m-0  ${isOpen ? 'flex' : 'hidden'} sm:block`}>


          {routes.map((route)=>(
             <button key={route.path} className="text-start group relative px-3 py-1 font-black text-amber-50">
             <NavLink to={route.path}>{route.name}</NavLink>
             <span className="absolute left-1/2 bottom-0 w-0 h-[3px] bg-white transition-all duration-300 ease-in-out group-hover:w-3/4 group-hover:left-1/8"></span>
           </button>
          ))}
          
          <div className="inline-block">
            <button className="bg-[#2459D8] flex gap-2 px-5 ms-2 py-3 text-white font-bold rounded-lg hover:bg-[#245ad8ce]">
                 {/* svg icono de usuario */}
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5.239 2.239-5 5 2.239 5 5 5zm0 2c-3.333 0-10 1.667-10 5v3h20v-3c0-3.333-6.667-5-10-5z" />
              </svg>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}