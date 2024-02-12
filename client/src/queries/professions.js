export async function professionsApi(){
    try {    
      const data = await fetch('http://localhost:8001/professions')
      const professions = await data.json()
      if(professions.meta.status === 200){
        return professions
    }
  
      throw new Error("Error al cargar los datos de los usuarios")
    } catch (error) {
      console.log(error)
    }
  }