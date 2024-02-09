
function Professions() {
  return (
    <>
      {/* ========== Start PROFESIONES ========== */}
      <div className="p-12 overflow-auto w-full">
        <section>
          <h2 className="mt-3 text-3xl text-teal-700">Profesiones</h2>
          <div className="shadow-sm p-3 mb-5">
            <h4 className="bg-teal-700 text-stone-50 text-center py-2 text-2xl rounded-md">Listado de Profesiones</h4>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Abogado</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Arquitecto</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Botánico</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Computista</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Economista</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Técnico de sonido</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Profesor</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">Linguista</button>
          </div>
        </section>
      </div>
      {/* ========== End PROFESIONES ========== */}
    </>
  )
}

export default Professions