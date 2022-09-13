/*dada una palabra , buscarla en una frase y devolver cuantas veces aparece en ella, la frase y la palabra  deben ser dde una funcion 

crear una funcion con dos parametros "frase" y "busqueda"
poner stringen minusculas y limpiarlo
comprobar si la busqueda esta incluida la frase 
crear un arrar de palabras de la frase
mapear esas palabras y hacer un contador de cada una
devolver el contador de la busqueda
*/

//crea una funcion con dos parametros
function coincidencias(frase, busqueda) {
    // la frase declaramos y lo limpiamos
let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi,'');
//el resultado de la busqueda comienza en cero
let resultado=0;
//hacemos un if con llamando a la frase limpia + includes para que busque la palabra
if(texto_limpio.includes(busqueda))
{
    // hacemos un  array con split para separar la frase en palabras
    let palabras=texto_limpio.split(" ");
    let mapa={};//declaramos un let para formar un json
   
 //conseguir el elemento del array el valor
         for(let palabra of palabras)
         {
            if(mapa[palabra])
            {
                mapa[palabra]++;
            }
                else
                {
                    mapa[palabra]=1;
                }
            
         }
         resultado= mapa[busqueda];

    }else{
         resultado=0;
    }
    return resultado;


}
console.log("numero de coincidencias en la frase: "+coincidencias("hola que tal, soy victor, robles victor", "victor"));