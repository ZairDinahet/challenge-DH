import Applicants from "./Applicants";
import Professions from "./Professions";
import banner from "../assets/img/banner.jpg";

function contentRowTop() {
  return (
    <>
      {/* ========== Start CONTENT ========== */}
      <main className="px-12 py-14 h-screen overflow-auto">
        {/* ========== Start PREVENTA ========== */}
        <header>
          <h2 className="text-3xl text-teal-700">Búsqueda y selección</h2>
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
        {/* ========== Start PROFESIONES ========== */}
        <Professions />
        {/* ========== End PROFESIONES ========== */}
      </main>
      {/* ========== End CONTENT ========== */}
    </>
  );
}
export default contentRowTop;
