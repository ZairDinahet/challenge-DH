export async function companiesApi(){
    try {    
      const data = await fetch('http://localhost:8001/companies')
      const companies = await data.json()
      if(companies.meta.status === 200){
        return companies
    }
  
      throw new Error("Error al cargar los datos de las empresas")
    } catch (error) {
      console.log(error)
    }
  }


  export async function companiesNameApi(name){
    try {    
      const data = await fetch(`http://localhost:8001/companies/search/${name}`)
      const companies = await data.json()
      if(companies.meta.status === 200){
        return companies
    }
  
      throw new Error("Error al cargar los datos de la empresa")
    } catch (error) {
      console.log(error)
    }
  }
