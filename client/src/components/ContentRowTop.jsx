import Applicants from "./Applicants";
import banner from "../assets/img/banner.jpg";

function contentRowTop(){
    return(
        <>
        {/* ========== Start CONTENT ========== */}
      <main className="p-12 overflow-auto" style={{gridArea: 'content'}}>
        {/* ========== Start PREVENTA ========== */}
        <header>
          <h2 className="text-3xl text-stone-950">Búsqueda y selección</h2>
          <p className="text-center text-2xl">
            Encontramos talento para tu empresa, en todos los cargos
            administrativos, profesionales y técnicos.
          </p>
          <div>
            <img src={banner} alt="Recursos Humanos" />
          </div>
        </header>
        {/* ========== End PREVENTA ========== */}
        {/* ========== Start ASPIRANTES ========== */}
        <Applicants />
        {/* ========== End ASPIRANTES ========== */}
        </main>
        {/* ========== End CONTENT ========== */}
        
        </>
    )

}
export default contentRowTop;