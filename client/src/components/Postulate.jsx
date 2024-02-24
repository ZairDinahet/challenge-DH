import foto32 from "../assets/img/foto32.jpg";
import ImagePreview from "./ImagePreview";

function Postulate(props) {
  return (
    <>
      {/* ========== Start  ========== */}
      {props.isMobileMenuOpen ? null : (
        <div className="w-full overflow-auto flex flex-col">
          <div className="m-8">
            <h2 className="text-3xl text-teal-700">
              Llena este formulario para postularte
            </h2>
          </div>
          {/** */}
          <div className="w-full xl:flex">
            {/** */}
            <section className="m-0 p-7 xl:w-3/4 sm:full">
              <div className="p-4 mt-4 rounded-md border-2 bg-white border-stone-300">
                <h2 className="text-2xl text-stone-500">
                  Formulario de Postulación
                </h2>
                <form action="#" method="POST" encType="multipart/form-data">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Apellido"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Teléfono
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Telefono"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="linkedin"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Linkedin
                      </label>
                      <input
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        placeholder="Linkedin"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthday"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Ciudad
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ciudad"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Pais
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Pais"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="aboutme"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Sobre mi
                      </label>
                      <textarea
                        name="message"
                        rows="6"
                        placeholder="Sobre mi"
                        className="text-stone-950 my-2 w-3/4 rounded-md border border-stone-500 p-2"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <span
                        className="block text-sm font-medium text-stone-500"
                      >
                        Foto
                      </span>
                      <ImagePreview />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm text-stone-500 font-medium block mb-4">Curriculum</span>
                    <label
                      htmlFor="cv"
                      className="my-4 p-2 relative cursor-pointer bg-stone-100 rounded-md border border-stone-500 font-medium text-stone-500 hover:text-teal-700 focus-within:outline-none focus-within:ring-2"
                    >
                      <i className="bi bi-paperclip mr-1"></i>
                      <span>Adjuntar CV</span>
                      <input
                        id="cv"
                        accept=".pdf"
                        name="cv"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="mt-2 p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-teal-700 hover:bg-stone-100 focus-within:outline-none focus-within:ring-2"
                    >
                      Enviar Postulación
                    </button>
                  </div>
                </form>
              </div>
            </section>
            <section className="m-0 p-7 hidden xl:block xl:w-1/4 sm:full">
              <img className="h-full" src={foto32} alt="banner" />
            </section>
          </div>
          {/** */}
        </div>
      )}
      {/* ========== End  ========== */}
      {/* <script src={'../assets/js/imagePreview.js'}></script>  */}
    </>
  );
}

export default Postulate;
