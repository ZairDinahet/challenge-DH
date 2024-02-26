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
 
  export async function applicantssApiForm(formData){
    try {    
      const response = await fetch('http://localhost:8001/applicants', {
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
  
