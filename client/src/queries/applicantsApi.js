export async function applicantssApi(){
    try {    
      const data = await fetch('http://localhost:8001/applicants')
      const applicants = await data.json()
      if(applicants.meta.status === 200){
        return applicants
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }
