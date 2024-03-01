import image from "../assets/img/logo-dh.png";
import ContentWrapper from "./ContentWrapper";
import Applicants from "./Applicants";
import Professions from "./Professions";
import Company from "./Company";
import Postulate from "./Postulate";
import Contact from "./Contact";
import Login from "./Login";
import TopBar from "./TopBar";

import { Link, Route, Routes } from "react-router-dom";

function SideBarMobile(props) {
  const handleCloseMenu = () => {
    props.setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* ========== Start MENU ========== */}
      {!props.isMobileMenuOpen ? null : 
      <header className={`block sm:hidden pb-12 h-1/2 bg-slate-50 border-r border-stone-300 w-full`}>

        {/* ========== Start LOGO ========== */}
            <Link to="/">
              <figure className="h-20 flex items-center justify-start m-0 px-4">
                <div className="hidden lg:block w-10 h-10 rounded-full">
                  <img
                    src={image}
                    alt="Logo Digital House"
                    className="hidden lg:block w-full h-full object-cover"
                  />
                </div>
                <figcaption className="m-0 p-0 lg:pl-4 text-stone-950 font-bold text-sm">
                  Digital House
                </figcaption>
              </figure>
            </Link>
        {/* ========== End LOGO ========== */}


        {/* ========== Start LISTADO ========== */}
        <nav className="block px-4 border-t border-stone-300">
          <section className="block pt-12">
            <h3 className="text-xl uppercase text-teal-700 font-semibold">
              Menú
            </h3>

            <ul className="block p-0 m-0">
              <li className="block p-0 mt-4">
                <Link
                  to="/Company"
                  className=" flex items-center justify-start text-stone-400 no-underline font-semibold text-md transition-color duration-150 ease-in-out hover:text-stone-950"
                  onClick={handleCloseMenu} 
                >
                  <i className="text-teal-700 mr-2 bi bi-building lg:mr-2 "></i>
                  Empresas
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Applicants"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-md transition-color duration-150 ease-in-out hover:text-stone-950"
                  onClick={handleCloseMenu} 
                >
                  <i className="text-teal-700 mr-2 bi bi-person lg:mr-2 "></i>
                  Aspirantes
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Professions"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-md transition-color duration-150 ease-in-out hover:text-stone-950"
                  onClick={handleCloseMenu} 
                >
                  <i className="text-teal-700 mr-2  bi bi-list-check lg:mr-2 "></i>
                  Profesiones
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Postulate"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-md transition-color duration-150 ease-in-out hover:text-stone-950"
                  onClick={handleCloseMenu} 
                >
                  <i className="text-teal-700 mr-2  bi bi-person-vcard lg:mr-2 "></i>
                  Postulate aquí
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Contact"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-md transition-color duration-150 ease-in-out hover:text-stone-950"
                  onClick={handleCloseMenu} 
                >
                  <i className="text-teal-700 mr-2  bi bi-chat-left-text lg:mr-2 "></i>
                  Contacto
                </Link>
              </li>
            </ul>
          </section>
        </nav>
        {/* ========== End LISTADO ========== */}
        <div className="mt-6 ml-11 h-10 w-1/2 border-t border-stone-300">
            <Link
              to="/Login"
              className="mt-4 flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
            >
              <i className="text-teal-700 mr-2 hidden bi bi-person-fill lg:mr-2 lg:block"></i>
              Login
            </Link>
          </div>
      </header>
      }
      <Routes>
        <Route exact path="/" element={<ContentWrapper isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Company/*" element={<Company isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Applicants/*" element={<Applicants isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Professions/*" element={<Professions isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Postulate/*" element={<Postulate isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Contact/*" element={<Contact isMobileMenuOpen={props.isMobileMenuOpen}/>} />
        <Route path="/Login" element={<Login />} />
        
      </Routes>
    </>
  );
}
export default SideBarMobile;