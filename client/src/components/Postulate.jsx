import foto22 from '../assets/img/foto22.jpg'

function Postulate(){
    return (
        <>
        {/* ========== Start  ========== */}
        <div className=" w-full flex flex-col">
        <div className="m-8">
            <h2 className="text-3xl text-teal-700">Llena este formulario para postularte</h2>
        </div>
        {/** */}
        <div className="w-full xl:flex ">
          {/** */}
          <section className="m-0 p-7 xl:w-3/4 sm:full">
            <div className="p-4 mt-4 rounded-md border-2 bg-white border-stone-300">
            <h2 className="text-2xl text-stone-500">Formulario de Postulación</h2>
            <form action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="mb-4">
                  <label for="name" className="block text-sm font-medium text-stone-500">Nombre</label>
                  <input type="text" id="name" name="name" placeholder="Nombre" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="lastname" className="block text-sm font-medium text-stone-500">Apellido</label>
                  <input type="text" id="lastname" name="lastname" placeholder="Apellido" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="email" className="block text-sm font-medium text-stone-500">Correo electrónico</label>
                  <input type="email" id="email" name="email" placeholder="Correo electrónico" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="phone" className="block text-sm font-medium text-stone-500">Teléfono</label>
                  <input type="text" id="phone" name="phone" placeholder="Telefono" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="linkedin" className="block text-sm font-medium text-stone-500">Linkedin</label>
                  <input type="text" id="linkedin" name="linkedin" placeholder="Linkedin" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="birthday" className="block text-sm font-medium text-stone-500">Fecha de Cumpleaños</label>
                  <input type="date" id="birthday" name="birthday"
                    className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"
                  />
                </div>
                <div className="mb-4">
                  <label for="city" className="block text-sm font-medium text-stone-500">Ciudad</label>
                  <input type="text" id="city" name="city" placeholder="Ciudad" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="country" className="block text-sm font-medium text-stone-500">Pais</label>
                  <input type="text" id="country" name="country" placeholder="Pais" className="mt-2 mb-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500"/>
                </div>
                <div className="mb-4">
                  <label for="aboutme" className="block text-sm font-medium text-stone-500">Sobre mi</label>
                  <textarea name="message" rows="6" placeholder="Sobre mi" className="bg-stone-100 mt-3 mb-3 w-3/4 rounded-md border border-stone-500"></textarea>
                </div>
                <div className="mb-4">
                  <label for="img" className="block text-sm font-medium text-stone-500">Adjuntar Imagen</label>
                  <input type="file" id="img" name="img" className="mt-2 mb-2 h-8 w-3/4"/>
                </div>
              </div>
              
              <div className="mb-4">
                <label for="cv" className="block text-sm font-medium text-stone-500">Adjuntar CV</label>
                <input type="file" id="cv" name="cv" className="mt-2 mb-2 h-8 w-3/4"/>
              </div>
              <div className="mt-4">
                <button type="submit" className="mt-2 p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-stone-800 focus-within:outline-none focus-within:ring-2">Enviar Postulación</button>
              </div>
            </form>
          </div>
          </section>
          {/** */}
          <section className="m-0 p-7 xl:w-1/4 sm:full">
          <img
                  className="h-full"
                  src={foto22}
                  alt="banner"
                />
          </section>
          {/** */}
        </div>
        {/** */}
        </div>
        
        {/* ========== End  ========== */}    
        </>
    )
}

export default Postulate