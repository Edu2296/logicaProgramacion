/*cuanto es el x porciento de x numero? */
//tantoporciento(20,100) ---> devuelve 20

//creamos una funcion de porcentaje y numero 
function tantoPorCiento(porcentaje,numero) {
    let operacion = (numero * (porcentaje/100));
    let resultado =  `el ${porcentaje}% de ${numero} es : ${operacion}`;
    return resultado;
}
console.log(tantoPorCiento(21,897));