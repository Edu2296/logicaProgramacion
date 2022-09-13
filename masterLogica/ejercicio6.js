//dibujar un cuadrado hueco con asteriscos
// cuadrado 4;
/*
++++
+  +
+  + 
++++
*/
function lado(numero){
    let lado="";
    for(let i=0;i<numero;i++){
        lado+="+";
    }
    return lado;
}
function cuadrado(numero){
let dibujar = lado(numero)+"\n";
let contenido="";
    for(let i=0;i< numero-2 ; i++){
        contenido="+";
        for(let j=0;j< numero-2;j++){
            //contenido+="+"
            contenido+=" ";
        }
        contenido+="+";
        dibujar+= contenido +"\n";
    }
    dibujar += lado(numero);
    return dibujar;
}
console.log(cuadrado(10))