import React from 'react';
import image from '../assets/img/logo-dh.png'
import ContentWrapper from './ContentWrapper';
import {Link, Route, Routes} from 'react-router-dom';


function SideBar(){

    return(
        <>
           {/* ========== Start MENU ========== */}
      <header className="pb-12 overflow-auto bg-slate-50 border-r border-stone-400"
      style = {{gridArea: 'menu'}}>
        {/* ========== Start LOGO ========== */}
        <figure className="h-20 flex items-center justify-start m-0 px-12">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={image}
              alt="Logo Digital House"
              className="block w-full h-full object-cover"
            />
          </div>
          <figcaption className="m-0 pl-4 text-stone-950 font-bold text-sm">
            Digital House
          </figcaption>
        </figure>
        {/* ========== End LOGO ========== */}
        {/* ========== Start LISTADO ========== */}
        <nav className="block px-12">
          <section className="block pt-12">
            <h3 className="m-0 text-md uppercase text-teal-800 font-semibold">
              Opciones
            </h3>
            <ul className="block p-0 m-0">
              <li className="block p-0 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-building"></i>
                  - Empresas
                </a>
              </li>
              <li className="block p-0 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-person"></i>
                  - Aspirantes
                </a>
              </li>
              <li className="block p-0 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-list-check"></i>
                  - Profesiones
                </a>
              </li>
              <li className="block p-0 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-person-vcard"></i>
                  - Postulate aquí
                </a>
              </li>
              <li className="block p-0 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-chat-left-text"></i>
                  - Contacto
                </a>
              </li>
            </ul>
          </section>
        </nav>
        {/* ========== End LISTADO ========== */}
      </header>
      </>
    )
}
export default SideBar;