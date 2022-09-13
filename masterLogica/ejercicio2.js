/*
DADO UNA CADENA DE TEXTO, COMPROBAR SI ES UN PALINDROMO O NO. LOS PALINDROMOS SON PALABRAS QUE SE LEEN IGUAL AUN ESTANDO INVERTIDA.

POR EJEMPLO : ANA, BOB, OTTO, ...

FUNCION:
PALINDROMO("OTTO")//devuelve TRUE
PALINDROMO("VICTOR")//devuelve FALSE
*/
//creamo funcion con el texto que introduciremos
function palindromo(texto){
    //declaramos  una variables que lo convierta en un array con split + reverse para darle la vuelta a un array + join unir todo el texto nuevamente
    let invertida = texto.
                    split('').
                    reverse().
                    join('');

return (invertida===texto);
//vendria hacer lo mismo sin redundancia
/*if(invertida===texto){
    return true;
}else{
    return false;
}*/
   
}
console.log("es un palindromo ? " + palindromo("ana"));