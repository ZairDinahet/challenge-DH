// export async function usersApiForm(formData){
//     try {  
//       const backendURL = import.meta.env.VITE_BACKEND_URL;  
    
//       const response = await fetch("http://localhost:8001/login", {
//         method: 'POST',
//         body: formData,
      
//       if(response.ok){
//         return await response.json();
//       } else {
//         throw new Error(response.statusText);
//       }
//     } catch (error) {
//       throw new Error("Error al realizar la solicitud a la ruta http://localhost:8001/login");
//     }
//   }

  export async function usersApiForm(FormData){
    const obj = {};
    for (const [key, value] of FormData.entries()) {
      obj[key] = value;
    }
    console.log(obj);
    try {  
      const backendURL = import.meta.env.VITE_BACKEND_URL;  
      const response = await fetch(`${backendURL}/login`, {
        method: "post",  
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json",
        },
        
      });
      if(response.ok){
        return await response.json();
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      throw new Error("Error al realizar la solicitud a la ruta http://localhost:8001/login");
    }
  
}

// app.get('/api/user', (req, res) => {
//     res.json({ user: req.session.user });
//   });

//   export async function usersApi(){
//     try {    
//       const backendURL = import.meta.env.VITE_BACKEND_URL;
//       const data = await fetch(`${backendURL}/`)
//       const applicants = await data.json()
//       if(applicants.meta.status === 200){
//         return applicants
//     }
  
//       throw new Error("Error al cargar los datos de los usuarios")
//     } catch (error) {
//       console.log(error)
//     }
//   }