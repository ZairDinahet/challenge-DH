import contactApi from "../queries/contactApi";

const { url } = contactApi;

function Contact(props) {
  return (
    <>
      {/* ========== Start CONTACT ========== */}
      {props.isMobileMenuOpen ? null : (
        <div className="w-full flex flex-col overflow-auto">

          <div className="m-8">
            <h2 className="text-3xl text-teal-700">
              Contacta con Digital House
            </h2>
          </div>

          <div className="w-full xl:flex">

            <section className="m-0 p-7 xl:w-3/4 sm:w-full">
              <div className="p-4 mb-4 rounded-md border-2 bg-white border-stone-300">
                <p className="pb-5 mb-5 text-2xl text-stone-500 border-b-2 border-stone-300">
                  Preguntas frecuentes
                </p>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    className="link-external hover:text-teal-700"
                  >
                    ¿Por qué mi perfil está pendiente de moderación?
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    className="link-external hover:text-teal-700"
                  >
                    ¿Qué necesito para subir de nivel en mi perfil?
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    className="link-external hover:text-teal-700"
                  >
                    ¿Qué sucede si comparto datos de contacto o pagos externos?
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    className="link-external hover:text-teal-700"
                  >
                    Razones para suspensión de propuestas y cierre de cuentas
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    target="_blank"
                    className="link-external hover:text-teal-700"
                  >
                    Tipos de proyectos: por hora y por precio fijo
                  </a>
                </p>
              </div>

              <div className="p-4 rounded-md border-2 bg-white border-stone-300">
                <p className="pb-5 mb-5 text-2xl text-stone-500 border-b-2 border-stone-300">
                  Centro de ayuda
                </p>
                <div className="grid grid-cols-3">
                  <div className="">
                    <span className="bi bi-1-circle-fill text-teal-700"></span>
                    <small> Aplica tu perfil de consulta</small>
                  </div>
                  <div className="">
                    <span className="bi bi-2-circle-fill text-teal-700"></span>
                    <small> Aplica al panel de ayuda</small>
                  </div>
                  <div className="">
                    <span className="bi bi-3-circle-fill text-teal-700"></span>
                    <small> La solución a tu consulta disponible</small>
                  </div>
                </div>
              </div>
              
              <div className="p-4 mt-4 rounded-md border-2 bg-white border-stone-300">
                <p className="text-2xl text-stone-500 py-4">
                  Formulario de contacto
                </p>
                <form action={url} method="POST">
                    
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="mb-4">
                      <label htmlFor="name" className="text-sm font-medium text-stone-500">Nombre</label>
                      <div className="block">
                        <input
                          className="mt-2 mb-2 h-8 w-3/4 p-2 bg-stone-100 rounded-md border border-stone-500 text-stone-950"
                          type="text"
                          name="name"
                          placeholder="Nombre"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="text-sm font-medium text-stone-500">Apellido</label>
                      <div className="block">
                        <input
                          className="mt-2 mb-2 h-8 w-3/4 p-2 bg-stone-100 rounded-md border border-stone-500 text-stone-950"
                          type="text"
                          name="lastName"
                          placeholder="Apellido"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="text-sm font-medium text-stone-500">Email</label>
                      <div className="block">
                        <input
                          className="mt-2 mb-2 h-8 w-3/4 p-2 bg-stone-100 rounded-md border border-stone-500 text-stone-950"
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="form-group untouched pristine required">
                      <label htmlFor="message" className="text-sm font-medium text-stone-500">Dejanos tu mensaje</label>
                      <div className="block">
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Mensaje"
                          className="bg-stone-100 mt-3 mb-3 w-3/4 rounded-md border border-stone-500 p-2 text-stone-950"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="image"
                      className="mt-4 mb-4 p-2 relative cursor-pointer bg-stone-100 rounded-md border border-stone-500 font-medium text-stone-500 hover:text-teal-700 focus-within:outline-none focus-within:ring-2"
                    >
                      <i className="bi bi-paperclip mr-1"></i>
                      <span>Adjuntar imagen</span>
                      <input
                        id="image"
                        accept="image/*,.pdf"
                        name="image"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p
                      id="file-upload-filename"
                      className="mt-2 text-sm text-gray-500"
                    ></p>
                  </div>
                  {/** */}
                  <button
                    type="submit"
                    className="mt-2 p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-teal-700 hover:bg-stone-100 focus-within:outline-none focus-within:ring-2"
                  >
                    <span>Enviar consulta</span>
                    <i className="control-spinner wk2-icon wk2-icon-spinner wk2-icon-spin"></i>
                  </button>

                  {/** */}
                </form>
              </div>
            </section>

            <section className="m-0 p-7 xl:w-1/4 sm:w-full">
              <section className="rounded-lg border-2 bg-white border-stone-300">
                <div className="p-4">
                  <div className="pb-5 text-2xl text-stone-500 border-b-2 border-stone-300">
                    Enlaces útiles
                  </div>
                  <div className="">
                    <div className="">
                      <article className="text-center flex flex-col">
                        <p className="my-1">
                          <a
                            href="#"
                            target="_blank"
                            className="hover:text-teal-700 font-bold"
                          >
                            Blog
                          </a>
                        </p>
                        <p className="my-1">
                          <a
                            href="#"
                            target="_blank"
                            className="hover:text-teal-700 font-bold"
                          >
                            Glosario
                          </a>
                        </p>
                        <p className="my-1">
                          <a
                            href="#"
                            target="_blank"
                            className="hover:text-teal-700 font-bold"
                          >
                            Centro de ayuda
                          </a>
                        </p>
                      </article>
                    </div>
                  </div>
                  <article className="text-center border-t-2 border-stone-300">
                    <p className="">
                      <strong>Correo</strong>
                    </p>
                    <p className="mb-4">
                      Completa el formulario de contacto situado en el panel de
                      ayuda para enviarnos un correo electrónico.
                    </p>
                  </article>
                  <article className="text-center border-t-2 border-stone-300">
                    <p className="mb-4">
                      <strong>Nuestras redes</strong>
                    </p>
                    <div className="footer__social-icons flex flex-row justify-around">
                      <a
                        href="#"
                        target="_blank"
                        title="Míranos en YouTube"
                        className="hover:text-yt"
                      >
                        <span className="bi bi-youtube"></span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        title="Síguenos en Instagram"
                        className="hover:text-ig"
                      >
                        <span className="bi bi-instagram"></span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        title="Síguenos en Facebook"
                        className="hover:text-fb"
                      >
                        <span className="bi bi-facebook"></span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        title="Síguenos en Twitter"
                        className="hover:text-x"
                      >
                        <span className="bi bi-twitter"></span>
                      </a>
                      <a
                        href="#"
                        target="_blank"
                        title="Síguenos en Linkedin"
                        className="hover:text-li"
                      >
                        <span className="bi bi-linkedin"></span>
                      </a>
                    </div>
                  </article>
                </div>
              </section>
            </section>

          </div>

        </div>
      )}
      {/* ========== End PROFESIONES ========== */}
    </>
  );
}

export default Contact;
