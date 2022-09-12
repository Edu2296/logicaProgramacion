//alert("hola MutationRe");
var nombre= "Victor robles";
var altura= 180;

/*var concatenacion = nombre +" "+ altura
var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy una caja de datos </h1>
    <h2>Mi nombre es : ${nombre} </h2>
    <h3> Mido: ${altura} cm</h3>
`;

if(altura>= 190){
    datos.innerHTML += `
    <h1> Eres una persona alta</h1> 
    `
}
else{
    datos.innerHTML += `
    <h1> Eres una persona bajita</h1> 
    ` 
}

for(var i= 2000 ; i<=2020; i++){
    //bloque de intrucciones
    datos.innerHTML += `<h2> Estamos en el años${i}</h2>
    `
}*/

function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy una caja de datos </h1>
        <h2>Mi nombre es : ${nombre} </h2>
        <h3> Mido: ${altura} cm</h3>
        `;
        return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("victor robles", 190 );
}
imprimir();
//MuestraMiNombre("victor robles ", 190);

var nombres = ['victor', 'antonio' ,'joaquin'];
//alert(nombres);
document.write('<h1>Listado de nombre</h1>');
/*for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>');
}*/

nombres.forEach(function(nombres){
document.write(nombres+'<br/>');
});
nombres.forEach((nombres) => {
    document.write(nombres+'<br/>');
    });