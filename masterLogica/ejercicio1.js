/*enunciado 1
dado un numero, devolver su tabla de multiplicar completa
ejemplo:
ejecuto esta funcion
tablaMultiplicar(5);
Me devuelve este resultado
tabla del #5
1x5=5
2x5=10
...
*/
function tablaMultiplicar(numero){
   // let resultado="# tabla del "+numero+ "#";
    let resultado = `# tabla del ${numero} # \n`;

for(let i=1; i<=10;i++){
    let multiplicar = (i*numero);

    //console.log(multiplicar);
    resultado += ` ${i} x ${numero}= ${multiplicar} \n`
}
return resultado;
 }
console.log(tablaMultiplicar(7));