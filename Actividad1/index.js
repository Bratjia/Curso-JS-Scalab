
var evento1 = {
    evento: 'Metallica',
    valorEvento: 5000,
  }

var evento2 = {
    evento: 'Daddy Yankee',
    valorEvento: 2000,
  }

var evento3 = {
    evento: 'Peppa pig',
    valorEvento: 8000,
  }

 var valorEventoActual;

//Si el monto es igual al total de entradas se debe mostrar cuántas entradas ha comprado el usuario.
//Se debe informar al usuario el valor total de la compra, y el usuario deberá ingresar el monto a pagar.
//Si el monto es menor al total de entradas, se debe cancelar la compra e informar al usuario que el pago es insuficiente.
//En caso del valor ser mayor al total de entradas, también se debe informar el monto de devolución
function miFunc(evento) {
  switch (evento) {
    case 'venta1':
      valorEventoActual = evento1;
      document.getElementById("valor1").style.display = "block";
      
    break;
    case 'venta2':
      valorEventoActual = evento2;
      document.getElementById("valor2").style.display = "block";
    break;
    case 'venta3':
      valorEventoActual = evento3;
      document.getElementById("valor3").style.display = "block";
    break;
    default:
      break;
  }
}
function totalAPagar(){
  var numEntradas= document.getElementById("valorContador").value
  if ( !valorEventoActual) {
    alert('Favor seleccione un evento');
    return;
  }

    if ( numEntradas > 0) {
    
  
      var total= valorEventoActual.valorEvento * numEntradas
      var monto = prompt('Total a pagar:'+ total);

      if(monto== total){
        alert('Número de entradas vendidas:'+ numEntradas);
      }else if (monto< total){
        alert('El pago es insuficiente');
      }else if((monto> total)){
        var devolución =  monto -total
        alert('Devolución: '+ devolución);
      }

    }else {
      alert('Favor ingresa un número mayor a 0');
    }    
  }  