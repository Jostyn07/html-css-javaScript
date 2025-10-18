// Variable
var pi = 3.14
// Constante
const PI = 3.14;

// Declaración de variables de forma independiente
var a = 1;
var b = 2;
var c = 3;

// Declaraciones masivas con el mismo var

var d = 1; e = 2; f = 3;

// Declaración masiva pero mejorando la lectura del codigo

var g = 1,
    h = 2,
    i = 3;

// AMBITO VAR

// Ambito global
var nombre = "Javi";
// Ambito local
function unaFuncion() {
    var pais  = "Colombia";
    console.log(pais)
}

// Debilidad de Var
var nombre = "Javi";
if (true) {
    var nombre = "Javier";
}
console.log(nombre)

// AMBITO LET
let nombre1 = "Javi";
if (true) {
    let nombre = "Javier";
}
console.log(nombre)

let empresa = "ESIC";
if (true) {
    let empresa = "acme";
    console.log(empresa);
}
console.log(empresa)

// AMBITO CONST

var a = 1;
console.log(a)

function x() {
    console.log(a);
    var a = 5;

    console.log(a);
    console.log(window.a);
}
x();
console.log(a)