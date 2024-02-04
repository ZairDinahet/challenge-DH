import React from 'react';

//import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';


function contentRowTop(){
    return(
        <>
        {/* ========== Start CONTENT ========== */}
      <main className="p-12 overflow-auto" style={{gridArea: 'content'}}>
        {/* ========== Start PREVENTA ========== */}
        <header>
          <h2 className="text-3xl text-stone-950">Búsqueda y selección</h2>
          <p className="text-center text-2xl">
            Encontramos talento para tu empresa, en todos los cargos
            administrativos, profesionales y técnicos.
          </p>
          <div>
            <img src="../assets/img/banner.jpg" alt="Recursos Humanos" />
          </div>
        </header>
        {/* ========== End PREVENTA ========== */}
        {/* ========== Start ASPIRANTES ========== */}
        <section>
          <h2 className="text-3xl text-stone-950">Aspirantes</h2>
          <article className="p-0 grid grid-cols-3 gap-8">
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto1.jpg"
                  alt="Gloria Medina"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Gloria Medina
                </h2>
                <p className="m-0 text-sm">Administrador</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto2.jpg"
                  alt="Daniel Fuentes"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Daniel Fuentes
                </h2>
                <p className="m-0 text-sm">Técnico de sonido</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto3.jpg"
                  alt="Lee Chim"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Lee Chim
                </h2>
                <p className="m-0 text-sm">Linguista</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto4.jpg"
                  alt="Rocio Carle"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Rocio Carle
                </h2>
                <p className="m-0 text-sm">Profesor</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto5.jpg"
                  alt="Victor Fuentes"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Victor Fuentes
                </h2>
                <p className="m-0 text-sm">Computista</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
            <div
              className="bg-slate-50 h-80 text-center p-3 border border-stone-50 rounded-md shadow-xl mb-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src="../assets/img/foto6.jpg"
                  alt="Luis Fuentes"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Luis Fuentes
                </h2>
                <p className="m-0 text-sm">Economista</p>
              </div>
              <div
                className="mt-5 pt-5 w-full border-t border-stone-400 flex items-center justify-between"
              >
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                </button>
                <button>
                  <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                </button>
                <button>
                  <i
                    className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"
                  ></i>
                </button>
              </div>
            </div>
          </article>
        </section>
        {/* ========== End ASPIRANTES ========== */}
        </main>
        {/* ========== End CONTENT ========== */}
        
        </>
    )

}
export default contentRowTop;