import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import {usersApiForm} from '../queries/usersApi';
import login from "../assets/img/login.jpg";

function Login(props){
  //const [resetImage, setResetImage] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

//   async function fetchData() {
//     const data = await professionsApi();
//     setProfessions(data.data);
//   }
//   useEffect(() => {
//     fetchData();
//   }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      console.log("desde login", formData)
      const response = await usersApiForm(formData);
      setCompanies(dataCompanies.data);
      
      console.log("desde login", response.data)
      navigate("/Login"); 
      event.target.reset(); 
      //setResetImage(true);
      setFormSubmitted(true); 
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
    return(
        <>
        {/* ========== Start LOGIN ========== */}
        {props.isMobileMenuOpen ? null : (
        
        <div className="w-full flex flex-col overflow-auto">
            <div className="m-8">
                <h2 className="text-3xl text-teal-700">
                Ingresa como super usuario 
                </h2>
            </div>

            <div className="w-full xl:flex">
                <section className="mx-auto p-1 w-3/4 ">
                    <div className="p-4 mt-4 rounded-md bg-white border-2 border-stone-300">
                    <h2 className="pb-2 text-2xl text-teal-700">
                    Accede! 
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="my-auto pr-3 ">
                            <img src={login} alt="image-login" />
                        </div>
                        <div className="p-4 ml-1 sm:border-l border-stone-300">
                        <form onSubmit={handleSubmit} method="POST" >
                                <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-stone-500"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="text-stone-950 my-2 h-8 w-full bg-stone-100 rounded-md border border-stone-500 p-2"
                                />
                                </div>
                                <div className="mb-4">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-stone-500"
                                >
                                    Contraseña
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    className="text-stone-950 my-2 h-8 w-full bg-stone-100 rounded-md border border-stone-500 p-2"
                                />
                                </div>
                                <div className="mx-auto w-1/4">
                                    <button
                                    type="submit"
                                    className="p-2 relative cursor-pointer bg-teal-700 rounded-md border border-stone-500 font-medium text-stone-100 hover:text-teal-700 hover:bg-stone-100 focus-within:outline-none focus-within:ring-2"
                                    >
                                    Ingresar
                                    </button>
                                </div>
                            
                            {formSubmitted && (
                                <div className="fixed bottom-0 right-0 mb-4 mr-4 bg-teal-700 text-white py-2 px-4 rounded-md">
                                    logged!!!
                                </div>
                            )}
                        </form>
                        </div>
                    </div>
                    </div>

                </section>   
            </div>
        {/* ========== END LOGIN ========== */}
        </div>
        )}
        </>
    );
}
export default Login;