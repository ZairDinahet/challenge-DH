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

  export async function applicantsNameApi(name){
    try {    
      const data = await fetch(`http://localhost:8001/applicants/search/${name}`)
      const applicants = await data.json()
      if(applicants.meta.status === 200){
        return applicants
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }