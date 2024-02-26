import foto32 from "../assets/img/foto32.jpg";
import ImagePreview from "./ImagePreview";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {applicantssApiForm} from '../queries/applicantsApi';
import { professionsApi } from '../queries/professions';

 
function Postulate(props){
  const [professions, setProfessions] = useState([]);
  const [resetImage, setResetImage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  async function fetchData() {
    const data = await professionsApi();
    setProfessions(data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const response = await applicantssApiForm(formData);
      navigate("/postulate"); 
      event.target.reset(); 
      setResetImage(true);
      setFormSubmitted(true); 
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
   
  return (
    <>
      {/* ========== Start  ========== */}
      {props.isMobileMenuOpen ? null : (
        <div className="w-full overflow-auto flex flex-col">
          <div className="m-8">
            <h2 className="text-3xl text-teal-700">
              Llena este formulario para postularte
            </h2>
          </div>
          {/** */}
          <div className="w-full xl:flex">
            {/** */}
            <section className="m-0 p-7 xl:w-3/4 sm:full">
              <div className="p-4 mt-4 rounded-md border-2 bg-white border-stone-300">
                <h2 className="text-2xl text-stone-500">
                  Formulario de Postulación
                </h2>
                <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nombre"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastName"
                        placeholder="Apellido"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Correo electrónico"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Teléfono
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="numberPhone"
                        placeholder="Telefono"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="linkedIn"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Linkedin
                      </label>
                      <input
                        type="text"
                        id="linkedIn"
                        name="linkedIn"
                        placeholder="Linkedin"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthday"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Fecha de nacimiento
                      </label>
                      <input
                        type="date"
                        id="birthDate"
                        name="birthDate"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Ciudad
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ciudad"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Pais
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Pais"
                        className="text-stone-950 my-2 h-8 w-3/4 bg-stone-100 rounded-md border border-stone-500 p-2"
                      />
                    </div>
          
                    <div className="mb-4">
                      <label
                        htmlFor="aboutme"
                        className="block text-sm font-medium text-stone-500"
                      >
                        Sobre mi
                      </label>
                      <textarea
                        name="aboutMe"
                        rows="6"
                        placeholder="Sobre mi"
                        className="text-stone-950 my-2 w-3/4 rounded-md border border-stone-500 p-2"
                      ></textarea>
                    </div>
                    <div className="text-sm text-stone-500 font-medium block mb-4">
                      <label
                        htmlFor="profession"
                        className="block text-sm font-medium text-stone-500"
                      >Profesion
                      </label>
                      <select name="profession" className="text-stone-700 bg-stone-100 my-2 w-3/4 rounded-md border border-stone-500 p-2">
                        {professions.map((profession, i) => (
                      <option key={i} value={profession.id}>{profession.name}</option>))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <span
                        className="block text-sm font-medium text-stone-500"
                      >
                        Foto
                      </span>
                      <ImagePreview reset={resetImage} />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="mt-2 p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-teal-700 hover:bg-stone-100 focus-within:outline-none focus-within:ring-2"
                    >
                      Enviar Postulación
                    </button>
                  </div>
                  {formSubmitted && (
                  <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-teal-700 text-white py-2 px-4 rounded-md">
                    Formulario enviado
                  </div>
                  )}
                </form>
              </div>
            </section>
            <section className="m-0 p-7 hidden xl:block xl:w-1/4 sm:full">
              <img className="h-full" src={foto32} alt="banner" />
            </section>
          </div>
          {/** */}
        </div>
      )}
      {/* ========== End  ========== */}
      {/* <script src={'../assets/js/imagePreview.js'}></script>  */}
    </>
  );
}

export default Postulate;
