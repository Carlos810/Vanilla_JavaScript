//ARRAYS
//Destructuring nos da una manera de extraer datos de objetos o arreglos y asignarlos a variables.
const array = ['pato', 'ganzo', 'pollo'];

/* 
//con la función de destructuring en ES2015
const [a,b,c] = array;

//el resultado es:
console.log([a,b,c]);


//ocultando el elemento con idex[1] que le pertenece al animal: ganzo
const [a, ,c] = array;

console.log(a,c);



//Existe un caso de uso bastante útil, imagina que tienes dos variables y deseas intercambiar su valor, en ES5 tendríamos que crear una variable temporal para esto, pero con destructuring bastaría con hacer:

let x = 2;
let y = 5;

[x,y] = [y,x];

console.log(x,y);
 */

//OBJETOS
const objeto = {
    a: 'CASA',
    b: 'APARTAMENTO'
  };

/* Podemos simplificar la siguente expresion para tomar propiedades dentro del array e imprimirlos en pantalla:
let a = objeto.a
let b = objeto.b
 */

// const {a,b} = objeto;
// console.log(a);
// console.log(b);


//Si quisiéramos asignar las propiedades del objeto, con nombres de variable diferentes, lo hacemos de la siguiente forma.
const {a:uno,b:dos} = objeto;

console.log(uno);
console.log(dos);

