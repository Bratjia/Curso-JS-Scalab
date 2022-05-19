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
    
    console.log("largo "+notas.length);
    
    let notaMinima= 70*60/100; // nota * % /100
    

    for (let i=0 ; i<notas.length; i++){


        
        switch (i) {
            case 0:
                if( notas[i] >= notaMinima){
                    document.getElementById("lblaprobar1").innerHTML=  "Aprobado"; 

                }else{
                    document.getElementById("lblaprobar1").innerHTML=  "Desaprobado"; 
                }
            break;
            case 1:
                if( notas[i] >= notaMinima){

                    document.getElementById("lblaprobar2").innerHTML=  "Aprobado";
                }else{
                    document.getElementById("lblaprobar2").innerHTML=  "Desaprobado";
          
                }
                console.log("case 1 ");
            break;
            case 2:
                if( notas[i] >= notaMinima){
                    document.getElementById("lblaprobar3").innerHTML=  "Aprobado";        
                 }else{
                    document.getElementById("lblaprobar3").innerHTML=  "Desaprobado";        
                }
                console.log("case 2");
            break;
            default:
              break;
          }






/*


       // console.log("nota :"+notas[i]);
        //console.log("posicion i  "+i);
       if( notas[i] >= notaMinima){
        document.getElementById("lblaprobar1").innerHTML=  "Aprobado"; 
        document.getElementById("lblaprobar2").innerHTML=  "Aprobado";
        document.getElementById("lblaprobar3").innerHTML=  "Aprobado";

      //  console.log("posicionnn"+i);
        //console.log("nota aprobada "+notas[i]);

       }else{
        document.getElementById("lblaprobar1").innerHTML=  "Desaprobado"; 
        document.getElementById("lblaprobar2").innerHTML=  "Desaprobado";
        document.getElementById("lblaprobar3").innerHTML=  "Desaprobado";
        //console.log("posicion"+i);
        //console.log("nota desaprobada "+notas[i]);

       } */

    }



}
