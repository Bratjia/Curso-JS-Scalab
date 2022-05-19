"use strict"
 let notas= [];

function enviarNombre() {
var nombreAlumne=  document.getElementById("fname").value;
document.getElementById("primero").style.visibility= 'hidden';
document.getElementById("segundo").style.display = 'block';
console.log(nombreAlumne);
document.getElementById("lblEstudiante").innerHTML=  "Alumno:" + nombreAlumne;

}

function pedirNotas(){

    notas.push(document.getElementById("txtNota1").value);
    notas.push(document.getElementById("txtNota2").value);
    notas.push(document.getElementById("txtNota3").value);
    console.log(notas);
    console.log(notaMinima);
    let notaMinima= 70*60/100; //42
    for (let i=0 ; i<notas.length; i++){
       if( i > notaMinima)

        console.log(notaMinima);

    }



}
