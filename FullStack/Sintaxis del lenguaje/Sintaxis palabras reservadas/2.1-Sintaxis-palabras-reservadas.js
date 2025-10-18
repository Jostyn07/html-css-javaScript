var a = 5;
var j = (4 * 6) + 1;
var s = "Hola mundo";

console.log(a);
console.log(j);
console.log(s);

var nombre = "Javi";
var Nombre = "María";

// Se distingue entre Mayusculas
console.log(nombre);
console.log(Nombre);

var pi = 3.14; 

// operador typeof
var a = 0;
var b = true;
var c = "acme";
console.log(typeof  a);
console.log(typeof  b);
console.log(typeof  c);

// Conversaciones entre tipos de datos

var valor = true;
console.log(typeof valor);

valor = String(valor);
console.log(typeof valor);

console.log("10" / "2");

let str = "123"
console.log(typeof str);

let num = Number(str);
console.log(typeof num);

// toDateString()
var fecha= new Date()
console.log(fecha)
var cadena = fecha.toDateString();
console.log(cadena);

// toUTCString()
var fecha= new Date();
var cadena= fecha.toUTCString();
console.log(cadena);

// isNaN
console.log(isNaN(10))
console.log(isNaN('10'))
console.log(isNaN('abc'))
console.log(isNaN('NaN'))