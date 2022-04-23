console.log("ok");
var lunes='lunes';
var diasSemanas= ['lunes','martes', 'miercoles', 'jueves', 'viernes', 'sabado','domingo']; //arreglo

console.log(diasSemanas);

function saludar(){
    console.log('hola miss mundo');
    return 1001;
}

var varios= [
    'hola',
    0,
    lunes,
    saludar, // busca la funcion saludar y retorna toda la funcion
    saludar(), // buscar saludar y ejecutalo y el valor que esta retorne retornalo  ---indefinido
    ['enero', 'febrero'],
    diasSemanas
]

var arrFn = varios[3]
console.log('[3]',arrFn());

console.log('[5]',varios[5][1]);

console.log(varios);
varios[0] = 'HOLA';

console.log(varios[0]);

console.log(varios.length); //largo

varios[varios.length] = '111';
console.log(varios);

console.log(diasSemanas);
//diasSemanas.push('fomingo')
//console.log(diasSemanas);


//diasSemanas[0]= diasSemanas[0].toUpperCase();

for (var i=0; i< diasSemanas.length; i++){
    console.log('i:',i, 'dia', diasSemanas[i]);
    diasSemanas[i]= diasSemanas[i].toUpperCase();
}

console.log( diasSemanas);

for (var day of diasSemanas){
    day= day.toLowerCase();
    console.log('dia:', day);
    
}
console.log( diasSemanas);


function overDay(dia, position){
    console.log('for each value:' , dia, position)

}
diasSemanas.forEach(overDay);


var meses= ['febrero', 'marzo', 'abril'];

meses.push('mayo');
meses.unshift('enero');
//meses.pop();

var popped= meses.pop();
console.log('popped', popped);
var shifted= meses.shift();
console.log('shifted', shifted);

meses.splice(1,2) // es un rango de una posicion en un arreglo, lo corta
console.log(meses);

 meses= ['enero','febrero', 'marzo', 'abril', 'mayo'];

 var indexOf =meses.indexOf('marzo');
 console.log(indexOf);
 console.log(meses);

 var index = meses.findIndex(function(elem){
     return elem === 'marzo'
 });

 console.log(index);
//factor de referencia
 var list =['uno','dos','tres'];
 var uno= list[0];
 console.log(list);
 list[0]= 'UNO';
 console.log(list);

 var a= 'one';
 var b= a;
 a='two';
 console.log(a);


 //-----------------------------------------

var student=['Name', 'LastName', 'Course'];

 student.name='pepa';
 student.firstName='pepa';
 student.lastName='pepa';

 
var vocals = ['a','e','i','o','u'];
for (var elem in vocals){
    console.log(elem,vocals[elem]);
}

var studentValues= Object.values(student);
console.log(studentValues);

student.assistance= 0.8;
var studentKeys = Object.keys(student);

console-log(studentKeys);

var studentEntries = Object.entries(student);




