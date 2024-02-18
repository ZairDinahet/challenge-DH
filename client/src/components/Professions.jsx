import { useEffect, useState } from 'react'
import { professionsApi } from '../queries/professions'

function Professions(props) {
  const [professions, setProfessions] = useState([])

  async function fetchData() {
    const data = await professionsApi() 
    setProfessions(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* ========== Start PROFESIONES ========== */}
      {props.isMobileMenuOpen ?  null:
      <div className="p-12 overflow-auto w-full">
        <section>
          <h2 className="mt-3 text-3xl text-teal-700">Profesiones</h2>
          <div className="shadow-sm p-3 mb-5">
            <h4 className="bg-teal-700 text-stone-50 text-center py-2 text-2xl rounded-md">Listado de Profesiones</h4>
            {
            professions.map((data, i) => (
              <button key={i} type="button" className="py-2 text-center cursor-pointer w-full border-b border-x border-stone-300 hover:bg-stone-200 text-stone-950 rounded-md">{data.name}</button>
            ))
            }
          </div>
        </section>
      </div>
      }
      {/* ========== End PROFESIONES ========== */}
    </>
  )
}

export default Professions