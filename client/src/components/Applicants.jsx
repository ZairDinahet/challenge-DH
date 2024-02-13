import { useEffect, useState } from 'react'
import { applicantssApi } from '../queries/applicantsApi'

function Applicants() {
  const [applicants, setApplicants] = useState([])

  async function fetchData() {
    const data = await applicantssApi() 
    setApplicants(data.data) 
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {/* ========== Start ASPIRANTES ========== */}
      <div className="p-12 overflow-auto w-full">

        <section>
          <h2 className="text-3xl text-teal-700">Aspirantes</h2>
          <article className="p-0 grid xl:grid-cols-3 xl:gap-8 sm:grid-cols-2 sm:gap-4">
            {
              applicants.map((applicant, i) => (
                <div key={i} className="bg-slate-50 h-80 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                  <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">                   
                    <img className="block w-flil h-flil object-cover" src={`./src/assets/img/${applicant.image}`} alt={`${applicant.name} ${applicant.lastName}`} />
                  </div>
                  <div className="whitespace-nowrap">
                    <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">{applicant.name} {applicant.lastName} </h2>
                    <p className="m-0 text-sm">
                      {
                      applicant.professions.map((profession, i) => (
                        <span key={i}>{profession.name}</span>
                      ))
                      }
                    </p>
                  </div>
                  <div className="mt-5 pt-5 w-full border-t border-stone-300 flex items-center justify-around">
                    <button>
                      <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-star"></i>
                    </button>
                    <button>
                      <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-chat"></i>
                    </button>
                    <button>
                      <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-envelope"></i>
                    </button>
                  </div>
                </div>
              ))
            }
          </article>
        </section>
      </div>
      {/* ========== End ASPIRANTES ========== */}
    </>
  )
}

export default Applicants