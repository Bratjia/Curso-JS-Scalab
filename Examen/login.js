/*
// Creamos un nuevo XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Esta es la función que se ejecutará al finalizar la llamada
xhttp.onreadystatechange = function() {
  // Si nada da error
  if (this.readyState == 4 && this.status == 200) {
    // La respuesta, aunque sea JSON, viene en formato texto, por lo que tendremos que hace run parse
    console.log(JSON.parse(this.responseText));
  }
};
// Endpoint de la API y método que se va a usar para llamar
xhttp.open("GET", "https://randomuser.me/api/", true);
xhttp.setRequestHeader("Content-type", "application/json");
// Si quisieramos mandar parámetros a nuestra API, podríamos hacerlo desde el método send()
xhttp.send(null);
*/  //todo lo comentado funciona igual q "fetch"

// var asd;
// fetch('https://randomuser.me/api/?results=10/')
// .then(response => response.json())    // a fetch le llega una respuesta en string que tiene que ser parseada a JSON
// .then(data => {
//     asdasd(data.results);
  
// })
// .catch(error => console.error(error));


// function asdasd(variable){
//     return variable;
// }
// console.log(asdasd()) 
// const url= 'https://randomuser.me/api/';

var nombre=null;
const url = 'https://randomuser.me/api/?results=0';
var nombreIdentificado;
var apellidoIdentificado;
var userIdentificado;
var emailIdentificado;

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    nombre= `${author.name.first}`;
    apellido =`${author.name.last}`;
    user = `${author.login.username}`;
    email = `${author.email}`;
    // console.log( `${author.name.first} ${author.name.last}`);
    //console.log("user: " +`${author.login.username} `);
    asignaVar()
  })
})
.catch(function(error) {
  console.log(error);
});



function asignaVar(){
     nombreIdentificado= nombre;
     apellidoIdentificado=apellido;
     userIdentificado= user;
     emailIdentificado=email;
 //console.log(nombreIdentificado, apellidoIdentificado, userIdentificado, emailIdentificado) ;
}

function identificarme(){
    document.getElementById("lblNombre").innerHTML= nombreIdentificado +" "+ apellidoIdentificado;
    document.getElementById("btnIdentificarme").hidden= true;
}



