/*
dado una cadena de caracteres , darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del lenguaje solo estrucutras de control */

// el of da el valor --- el in los indices del array
function invertirCadena(texto){
let invertido="";
    for(let letra of texto)
    {
    //console.log(letra);
    invertido =letra + invertido;
    }
    //console.log(invertido);
    return invertido;
}
function invertir(texto){
    return texto.split("").reverse().join('');
}
console.log("texto invertido :" + invertirCadena("victorrobles"));