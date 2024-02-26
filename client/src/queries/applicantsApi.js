export async function applicantsApi(){
    try {    
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const data = await fetch(`${backendURL}/applicants`)
      const applicants = await data.json()
      if(applicants.meta.status === 200){
        return applicants
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }

  export async function applicantssApiForm(formData){
    try {  
      const backendURL = import.meta.env.VITE_BACKEND_URL;  
      const response = await fetch(`${backendURL}/applicants`, {
        method: 'POST',
        body: formData,
      });
      if(response.ok){
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error("Error al realizar la solicitud a la ruta http://localhost:8001/applicants");
    }
  }
  


  export async function applicantsNameApi(name){
    try {    
      const backendURL = import.meta.env.VITE_BACKEND_URL;  
      const data = await fetch(`${backendURL}/applicants/search/${name}`)
      const applicants = await data.json()
      if(applicants.meta.status === 200){
        return applicants
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }

