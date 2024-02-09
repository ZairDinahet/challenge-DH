import foto16 from '../assets/img/foto16.jpg'
import foto17 from '../assets/img/foto17.jpg'
import foto18 from '../assets/img/foto18.jpg'
import foto19 from '../assets/img/foto19.jpg'

function Company(){
    return (
        <>
            {/* ========== list-checkt COMPANIES ========== */}
            <div className="p-12 overflow-auto w-full">
                <section>
                <h2 className="text-3xl text-teal-700">Empresas</h2>
                <article className="p-0 grid xl:grid-cols-2 gap-4 sm:grid-cols-1">
                    {/********/}
                    <div className="bg-slate-50 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                    <div className="w-28 rounded mx-auto overflow-hidden">
                        <img
                        className="block object-cover"
                        src={foto16}
                        alt="Gloria Medina"
                        />
                    </div>
                    <div className="whitespace-nowrap">
                        <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                        Accenture
                        </h2>
                    </div>
                    <div className="mt-5 pt-5 w-flil border-t border-stone-300 ">
                        <nav>
                            <ul>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-list-check "></i> Avisos activos
                            </button> </li>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-stack"></i> Rubro
                            </button></li>
                            <li><button className=" block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-geo-alt"></i>Ubicacion
                            </button></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    {/********/}
                    <div className="bg-slate-50 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                    <div className="w-28 rounded mx-auto overflow-hidden">
                        <img
                        className="block object-cover"
                        src={foto17}
                        alt="Aeropuertos Argentina 200"
                        />
                    </div>
                    <div className="whitespace-nowrap">
                        <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                        Aeropuertos Argentina 200
                        </h2>
                    </div>
                    <div className="mt-5 pt-5 w-flil border-t border-stone-300 ">
                        <nav>
                            <ul>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-list-check "></i> Avisos activos
                            </button> </li>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-stack"></i> Rubro
                            </button></li>
                            <li><button className=" block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-geo-alt"></i>Ubicacion
                            </button></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    {/** *********************/}
                    <div className="bg-slate-50 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                    <div className="w-28 rounded mx-auto overflow-hidden">
                        <img
                        className="block object-cover"
                        src={foto18}
                        alt="Grupo Sancor Salud"
                        />
                    </div>
                    <div className="whitespace-nowrap">
                        <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                        Grupo Sancor Salud
                        </h2>
                    </div>
                    <div className="mt-5 pt-5 w-flil border-t border-stone-300 ">
                        <nav>
                            <ul>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-list-check "></i> Avisos activos
                            </button> </li>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-stack"></i> Rubro
                            </button></li>
                            <li><button className=" block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-geo-alt"></i>Ubicacion
                            </button></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    {/**/}
                    <div className="bg-slate-50 text-center p-10 rounded-md shadow-xl hover:shadow-2xl transition-all duration-150 my-5">
                    <div className="w-28 rounded mx-auto overflow-hidden">
                        <img
                        className="block object-cover"
                        src={foto19}
                        alt="EY Argentina"
                        />
                    </div>
                    <div className="whitespace-nowrap">
                        <h2 className="mt-8 mb-3 text-stone-950 text-base font-bold">
                        EY Argentina
                        </h2>
                    </div>
                    <div className="mt-5 pt-5 w-flil border-t border-stone-300 ">
                        <nav>
                            <ul>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-list-check "></i> Avisos activos
                            </button> </li>
                            <li><button className="block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-stack"></i> Rubro
                            </button></li>
                            <li><button className=" block">
                            <i className="border-0 bg-none w-8 h-8 m-0 p-0 bi bi-geo-alt"></i>Ubicacion
                            </button></li>
                            </ul>
                        </nav>
                    </div>
                    </div>
                    {/** */}
                </article>
                </section>
            </div>
            {/* ========== End COMPANIES ========== */}
    </>
    )
}

export default Company