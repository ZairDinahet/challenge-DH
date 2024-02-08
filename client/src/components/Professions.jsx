
function Professions() {
  return (
    <>
      {/* ========== Start PROFESIONES ========== */}
      <div className="p-12 overflow-auto w-full">
        <section>
          <h2 className="mt-3 text-3xl text-teal-700">Profesiones</h2>
          <div className="shadow-sm p-3 mb-5 rounded">
            <h4 className="bg-teal-700 text-stone-50 text-center py-2 text-2xl">Listado de Profesiones</h4>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Abogado</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Arquitecto</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Botánico</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Computista</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Economista</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Técnico de sonido</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Profesor</button>
            <button type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950">Linguista</button>
          </div>
        </section>
      </div>
      {/* ========== End PROFESIONES ========== */}
    </>
  )
}

export default Professions