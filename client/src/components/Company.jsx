import { useEffect, useState } from 'react'
import { companiesApi } from '../queries/companiesApi'

function Company(props) {
    const [companies, setCompanies] = useState(props.companies || []);
    
    async function fetchData() {
      const data = await companiesApi();
      setCompanies(data.data);
    }
    
    useEffect(() => {
        if (!props.companies || props.companies.length == 0 || props.estado == false) {
          fetchData();
        } else {
          setCompanies(props.companies);
        }
      }, [props.companies]);
      
    
    return (
        <>
            {/* ========== list-checkt COMPANIES ========== */}
            {props.isMobileMenuOpen ?  null:
            <div className="p-12 overflow-auto w-full">
                <section>
                <h2 className="text-3xl text-teal-700">Empresas</h2>
                <article className="p-0 grid xl:grid-cols-2 gap-4 sm:grid-cols-1">
                    {
                        companies.map((company, i) => (
                        <div key={i} className="bg-slate-50 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                            <div className="w-28 h-20 rounded mx-auto overflow-hidden">
                                <img
                                className="block object-cover"
                                src={`./src/assets/img/${company.image}`} 
                                alt={`${company.name}`} 
                                />
                            </div>
                            <div className="whitespace-nowrap">
                                <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                                {company.name}
                                </h2>
                            </div>
                            <div className="mt-5 pt-5 w-flil border-t border-stone-300 ">
                                <nav>
                                    <ul>
                                    <li><button className="block">
                                    <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-list-check "></i> {company.activeNotices}
                                    </button> </li>
                                    <li><button className="block">
                                    <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-stack"></i> {company.category}
                                    </button></li>
                                    <li><button className=" block">
                                    <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-geo-alt"></i>{company.location}
                                    </button></li>
                                    </ul>
                                </nav>
                            </div>
                            </div>
                        ))    
                    }
                    

                </article>
                </section>
            </div>
            }
            {/* ========== End COMPANIES ========== */}
    </>
    )
}

export default Company