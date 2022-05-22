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
    
    var porcentaje= document.getElementById("txtporcentaje").value;
    notas.push({nota:document.getElementById("txtNota1").value, evaluacion:"lblaprobar1" });
    notas.push({nota:document.getElementById("txtNota2").value, evaluacion:"lblaprobar2" });
    notas.push({nota:document.getElementById("txtNota3").value, evaluacion:"lblaprobar3" });
    console.log(notas);
    
    console.log("largo "+notas.length);
    
    let notaMinima= 70*porcentaje /100; // nota * % /100
    
    console.log(notaMinima);
    for (let i=0 ; i<notas.length; i++){
    console.log("posicion :" , i);
    console.log("nota minima  :",notaMinima);
    console.log("nota :",notas[i].nota );
        if( notas[i].nota >= notaMinima){            
           
            document.getElementById(notas[i].evaluacion).innerHTML=  "Aprobado"; 
            document.getElementById(notas[i].evaluacion).style.color = 'green';

        }else{
            document.getElementById(notas[i].evaluacion).innerHTML=  "Desaprobado"; 
            document.getElementById(notas[i].evaluacion).style.color = 'red';
        }

    }
}



