"use strict"

//1
const elems= [
    {inner: "not this"},
    {innerA: "hola", innerB: "mundo"},
];

console.log(elems[1]);

//2
const valRepetidos = [1, 2, 3, 4, 1, 3,5, 7, 8];
console.log(valRepetidos);

let valUnicos =  [...new Set(valRepetidos)]; // sin duplicados
console.log(valUnicos);


//3
const restTest={
    propA :'hola!',
    propB :'mundo',
    propC :{foo:0,bar:1,baz:2}
}

 delete restTest.propC['foo']

 const [restA , ...restC] =[
    restTest.propA, restTest.propC
]
 
const restTest2={
    rest1: restA,
    rest2:restC
}

console.log(restTest2); 

//4


/* function fn1(paramA, paramB){
    return paramA+ paramB
} */
const fn1 =(paramA, paramB)=>{
    return paramA+ paramB;
} 

console.log('funcion 1: ' +fn1(3,1)); 


//---------
/* function fn2(paramA, paramB){
    const innerParam =paramB|| 10;
    return paramA- innerParam
} */

const fn2 =(paramA, paramB)=>{
    const innerParam =paramB|| 10;
    return paramA- innerParam
};
console.log('funcion 2: ' +fn2(3,1)); 


//---------
/* function fn3(paramA){
    if (typeof paramA === 'string') {
        return 0;
    } else {
        return paramA * paramA
    }

} */


 const fn3=(paramA)=>{
    if (typeof paramA === 'string') {
        return 0;
    } else {
        return paramA * paramA
    }
};

console.log('funcion 3: ' + fn3(2)); 

//5
const a = 10;
const b = 5;

let cadena= 'a'+'b';
let suma = a+b;
let resta =a-b;
let multiplicacion =a*b;
let division =a/b;

console.log('cadena: '+cadena); 
console.log('suma: '+suma); 
console.log('resta: '+resta); 
console.log('multiplicacion: '+multiplicacion); 
console.log('division: '+division); 





