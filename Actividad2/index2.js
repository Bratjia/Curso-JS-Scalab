"use strict"

function enviarNombre() {
var nombreAlumne=  document.getElementById("fname").value;

document.getElementById("lblEstudiante").style.visibility= 'hidden';
document.getElementById("fname").style.visibility= 'hidden';
document.getElementById("btnEnviarnombre").style.visibility= 'hidden';
console.log(nombreAlumne);


}
