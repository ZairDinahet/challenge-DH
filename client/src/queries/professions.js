export async function professionsApi(){
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const data = await fetch(`${backendURL}/professions`)
      const professions = await data.json()
      if(professions.meta.status === 200){
        return professions
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }