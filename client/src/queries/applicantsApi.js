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
  export async function applicantssApiForm(form){
    console.log('Formulario:', form)
    try {    
      const data = await fetch('http://localhost:8001/applicants', {
          method: 'POST',
          body:  JSON.stringify(form),

          headers: { 
            'Content-Type': 'application/json'
        },
      });
      if(data.ok){
        const response = await data.json();
      return response;
      }else{
        throw new Error (data.statusText)
      }
    } catch (error) {
      //console.error(error);
      throw new Error("Error al realizar la solicitud a la ruta http://localhost:8001/applicants");
  }
  }
  // export async function applicantssApiForm(formData){
  //   try {    
     
  //  console.log(formData)
  //     const response = await fetch('http://localhost:8001/applicants', {
  //       method: 'POST',
  //       body: formData,
  //        headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     if(response.ok){
  //       return await response.json();
  //     } else {
  //       throw new Error(response.statusText);
  //     }
  //   } catch (error) {
  //     throw new Error("Error al realizar la solicitud a la ruta http://localhost:8001/applicants");
  //   }
  // }
  
