import Applicants from "./Applicants";
import Professions from "./Professions";
import banner from "../assets/img/banner.jpg";
import Company from "./Company";

function contentRowTop(props) {
  return (
    <>
      {/* ========== Start CONTENT ========== */}
      <main className="px-12 py-14 h-screen overflow-auto">
        {/* ========== Start PREVENTA ========== */}

        {(!props.applicants  &&  !props.companies) ? 
          <header>
            <h2 className="text-3xl text-teal-700">Búsqueda y selección</h2>
            <p className="my-3 text-center text-2xl">
              Encontramos talento para tu empresa, en todos los cargos
              administrativos, profesionales y técnicos.
            </p>
            <div>
              <img src={banner} alt="Recursos Humanos" />
            </div>
          </header> : null
        }
        {/* ========== End PREVENTA ========== */}
        {/* ========== Start ASPIRANTES ========== */}
        {((!props.applicants  &&  !props.companies)||(props.applicants  &&  props.companies)  || (props.applicants && !props.companies))? 
        <Applicants applicants={props.applicants} /> : null
        }
        {/* ========== End ASPIRANTES ========== */}
        {/* ========== Start PROFESIONES ========== */}
        {!props.applicants  &&  !props.companies?
          <Professions />: null
          }
        {/* ========== End PROFESIONES ========== */}
        {((!props.applicants  &&  !props.companies)||(props.applicants  &&  props.companies)  || (!props.applicants && props.companies))? 
         <Company companies={props.companies} />: null
        }

      </main>
      {/* ========== End CONTENT ========== */}
    </>
  );
}
export default contentRowTop;
