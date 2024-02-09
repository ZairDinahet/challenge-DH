import foto1 from '../assets/img/foto1.jpg'
import foto2 from '../assets/img/foto2.jpg'
import foto3 from '../assets/img/foto3.jpg'
import foto4 from '../assets/img/foto4.jpg'
import foto5 from '../assets/img/foto5.jpg'
import foto6 from '../assets/img/foto6.jpg'

function Applicants() {
  return (
    <>
      {/* ========== Start ASPIRANTES ========== */}
      <div className="p-12 overflow-auto w-full">
        <section>
          <h2 className="text-3xl text-teal-700">Aspirantes</h2>
          <article className="p-0 grid xl:grid-cols-3 xl:gap-8 sm:grid-cols-2 sm:gap-4">
            <div className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-flil h-flil object-cover"
                  src={foto1}
                  alt="Gloria Medina"
                />
              </div>
              <div className="whitespace-nowrap">
                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                  Gloria Medina
                </h2>
                <p className="m-0 text-sm">Administrador</p>
              </div>
              <div className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around">
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
              className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src={foto2}
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
                className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around"
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
              className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src={foto3}
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
                className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around"
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
              className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src={foto4}
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
                className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around"
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
              className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src={foto5}
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
                className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around"
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
              className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5"
            >
              <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                <img
                  className="block w-full h-full object-cover"
                  src={foto6}
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
                className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around"
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
      </div>
      {/* ========== End ASPIRANTES ========== */}
    </>
  )
}

export default Applicants