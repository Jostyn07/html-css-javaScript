var cadena = "Hola mundo" // Tipo primitivo
var cadena = new String("Hola mundo") //Objeto String

// .length: Devuelve el numero de caracteres de String
var cadena = "Hola mundo"
console.log(cadena.length)

const text = "Hola"
text[0];
text[1];
text[2];
text[3];
text[4];

var cadena = "Hola";
for (i=0; i < cadena.length; i++)
    console.log(cadena[i]);

// Interpolación de variables
let nombre = "Juan";
let mensaje = "Hola, " + nombre + "!"

console.log(mensaje);

let nombre1 = "Juan"
let mensaje1 = `Hola, ${nombre1}!`;
console.log(mensaje1);

let numero = 5;
let mensaje2 = `El doble de ${numero} es ${numero * 2}`
console.log(mensaje2)

// Substrings y posiciones

// .charAt(pos): devuelve el caracter en la posicion pos. Es equivalente al operador [pos]
// .indexOf(text): Devuelve la primera posicion del texto *text*
// indexOf(text,desde): Devuelve la primra posicion de texto text, pero empezando a buscar desde la posicion *desde*
// .lastIndex(text): Devuelve la última posicion del texto text
// .lastIndex(text,desde): Devuelve la última posicion del texto text esde la posicion desde hasta el princpio

const nombre2 = "Javi";
console.log(nombre.charAt());
console.log(nombre.charAt(0));