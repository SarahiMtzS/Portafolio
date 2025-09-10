
import React, { useEffect,useState } from 'react'
import  {Menu, X, Sun, Moon} from 'lucide-react';

const NavBard = () => {
  const [open,setOpen] = useState(false);
  const [darkMode,setDarkMode] = useState(true);
  const [scrolled,setScrolled] = useState(false);   

  useEffect(()=>{
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);
// IMPLEMENTAR EL MODO OSCURO
  useEffect(()=>{

  })
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
      scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow-lg backdrop-blur-md"
      :"bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
          <span className="text-indigo-500">{"<"}</span>
          MiPortafolio
          <span className="text-indigo-500">{"/>"}</span>
        </div>
  
        <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-800 dark:text-gray-200">
          {["Inicio", "Sobre mí", "Proyectos", "Habilidades", "Contacto"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
        <div className="flex items-center space-x-4">
          <a href="/CV.pdf" download className="hidden md:incline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition transform">
          Descargar CSV
          </a>
          {/* BOTON MODO OSCURO Y MODO CLARO */}
          <button className=""></button>
        </div>

      </div>

      
    </nav>
  )
}

export default NavBard
