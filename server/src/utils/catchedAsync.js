//Esto es una funcion que recibe como parametro otra funcion (controlador) y retorna otra funcion con los parametros(req, res, next). Esta funcion retornada en su interior ejecuta la funcion (controlador) pasada por parametro pasandole req, res y esta devuelve una promesa. Si la promesa se rechaza (es decir, ocurre un error), entonces se captura ese error con catch y se lo pasa a Express a través de next(err), lo que permite que Express maneje el error de acuerdo con su middleware de manejo de errores.

//En resumen: este es un manejador de errores que no es mas que una funcion de orden superior que recibe mis controladores y los mejora, agregando a estos la posibilidad de manejar errores ASINCRONOS en caso de que aparecieran. Haciendo asi que no tenga que escribir un try catch en cada controlador.  

module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res).catch(err => next(err));
  }
}

//Ej:

// Controlador:
// const getCharacters = async (req, res) =>{
//   const characters = await Character.list();
//   response(res, 200, characters)
// }

// Manejador de errores (funcion de orden superior):
// const cachedAsync = (fn) => {
//   return function (req, res, next){
//     fn(req, res).catch(err => next(err));
//   }
// }

// const getCharactersSuper = cachedAsync(getCharacters)

// getCharactersSuper = (req, res, next) => {
//   fn(req, res).catch(err => next(err));
// }

