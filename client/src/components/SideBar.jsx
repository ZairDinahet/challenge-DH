import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";

import image from "../assets/img/logo-dh.png";
import ContentWrapper from "./ContentWrapper";
import Applicants from "./Applicants";
import Professions from "./Professions";
import Company from "./Company";
import Postulate from "./Postulate";
import Contact from "./Contact";
import TopBar from "./TopBar";

import { companiesNameApi } from '../queries/companiesApi'
import { applicantsNameApi } from '../queries/applicantsApi'


function SideBar() {
  const [companies, setCompanies] = useState([])
  const [applicants, setApplicants] = useState([])
  const [estado , setEstado ] = useState(false)

  async function getData(name) {
    const dataCompanies= await companiesNameApi(name)
    const dataApplicants = await applicantsNameApi(name)

    if(!dataCompanies && dataApplicants){
      setCompanies([])
      setApplicants(dataApplicants.data)  
      setEstado(true)
      
    }else if(dataCompanies && !dataApplicants){
      setCompanies(dataCompanies.data )
      setApplicants([])  
      setEstado(true)

    }else if(dataCompanies == undefined || dataApplicants == undefined){
      setCompanies([])
      setApplicants([]) 
      
    }else{
      setCompanies(dataCompanies.data )
      setApplicants(dataApplicants.data)
    }
  }

   const cambiarEstado = () =>{
     setEstado(false)
     window.reloand()
   }

  return (
    <>
      {/* ========== Start MENU ========== */}
      <header className="pb-12 hidden h-auto bg-slate-50 border-r border-stone-300 w-1/5 sm:block">
        {/* ========== Start LOGO ========== */}
        <Link to="/" onClick={cambiarEstado}>
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

      </header>

      <Routes>
        <Route exact path="/" element={<ContentWrapper  companies={companies} applicants={applicants} estado={estado} />} />
        <Route path="/Company" element={<Company  companies={companies}  estado={estado}/>} />
        <Route path="/Applicants" element={<Applicants applicants={applicants}  estado={estado}/>} />
        <Route path="/Professions" element={<Professions />} />
        <Route path="/Postulate" element={<Postulate />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default SideBar;
