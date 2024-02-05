import image from '../assets/img/logo-dh.png'
import ContentWrapper from './ContentWrapper'
import Applicants from './Applicants'
import Professions from './Professions'
import Company from './Company'
import Postulate from './Postulate'
import Contact from './Contact'
import TopBar from './TopBar'

import { Link, Route, Routes } from 'react-router-dom';


function SideBar() {

  return (
    <>
      <TopBar />
      {/* ========== Start MENU ========== */}
      <header className="pb-12 overflow-auto bg-slate-50 border-r border-stone-400"
        style={{ gridArea: 'menu' }}>

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
                <Link to="/Company"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-building"></i>
                  - Empresas
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link to="/Applicants"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-person"></i>
                  - Aspirantes
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link to="/Professions"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-list-check"></i>
                  - Profesiones
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link to="/Postulate"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-person-vcard"></i>
                  - Postulate aquí
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link to="/Contact"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-800 bi bi-chat-left-text"></i>
                  - Contacto
                </Link>
              </li>

            </ul>

          </section>
        </nav>
        {/* ========== End LISTADO ========== */}
      </header>

      <Routes>
        <Route exact path="/" element={<ContentWrapper />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Applicants" element={<Applicants />} />
        <Route path="/Professions" element={<Professions />} />
        <Route path="/Postulate" element={<Postulate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      
    </>
  )
}
export default SideBar;