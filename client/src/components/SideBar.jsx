import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import image from "../assets/img/logo-dh.png";
import ContentWrapper from "./ContentWrapper";
import Applicants from "./Applicants";
import Professions from "./Professions";
import Company from "./Company";
import Postulate from "./Postulate";
import Contact from "./Contact";
import Login from "./Login";
import TopBar from "./TopBar";
import NotFound from "./NotFound";

import { companiesNameApi } from '../queries/companiesApi'
import { applicantsNameApi } from '../queries/applicantsApi'


function SideBar() {
  const [companies, setCompanies] = useState([])
  const [applicants, setApplicants] = useState([])
  const [login, setLogin] = useState(false) 

  console.log (login)
  async function getData(name) {
    const dataCompanies= await companiesNameApi(name)
    const dataApplicants = await applicantsNameApi(name)

    if (dataCompanies && dataCompanies.data) {
      setCompanies(dataCompanies.data);
    } else {
      setCompanies([]);
    }

    if (dataApplicants && dataApplicants.data) {
      setApplicants(dataApplicants.data);
    } else {
      setApplicants([]);
    }
  }

   const cambiarEstado = () =>{
     window.reload()
   }

  return (
    <>
      {/* ========== Start MENU ========== */}
      <header className="pb-12 hidden h-auto bg-slate-50 border-r border-stone-300 w-1/5 sm:block">
        {/* ========== Start LOGO ========== */}
        <Link to="/" onClick={cambiarEstado}  >
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

        {/* ========== Start BUSCADOR ========== */}
        <TopBar handleSearch={getData}  />
        {/* ========== End BUSCADOR ==========  */}

        {/* ========== Start LISTADO ========== */}
        <nav className="block px-4 lg:px-12 border-t border-stone-300">
          <section className="block pt-12">
            <h3 className="text-md uppercase text-teal-700 font-semibold">
              Menú
            </h3>

            <ul className="block p-0 m-0">
              <li className="block p-0 mt-4">
                <Link
                  to="/Company"
                  className=" flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-700 hidden bi bi-building lg:mr-2 lg:block"></i>
                  Empresas
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Applicants"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-700 mr-2 hidden bi bi-person lg:mr-2 lg:block"></i>
                  Aspirantes
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Professions"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-700 mr-2 hidden bi bi-list-check lg:mr-2 lg:block"></i>
                  Profesiones
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Postulate"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-700 mr-2 hidden bi bi-person-vcard lg:mr-2 lg:block"></i>
                  Postulate aquí
                </Link>
              </li>

              <li className="block p-0 mt-4">
                <Link
                  to="/Contact"
                  className="flex items-center justify-start text-stone-400 no-underline font-semibold text-sm transition-color duration-150 ease-in-out hover:text-stone-950"
                >
                  <i className="text-teal-700 mr-2 hidden bi bi-chat-left-text lg:mr-2 lg:block"></i>
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

      <Routes>
        <Route exact path="/" element={<ContentWrapper  companies = {companies.length > 0 ? companies : null}applicants={applicants.length > 0 ? applicants : null}  />} />
        <Route path="/Company" element={<Company companies = {companies.length > 0 ? companies : null}/>} />
        <Route path="/Applicants" element={<Applicants applicants={applicants.length > 0 ? applicants : null}/>} />
        <Route path="/Professions" element={<Professions />} />
        <Route path="/Postulate" element={<Postulate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login login={login} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default SideBar;
