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
console.log(nombre2.charAt());
console.log(nombre2.charAt(0));
console.log(nombre2.charAt(1));
console.log(nombre2.charAt(10));

const nombre3 = "Javi";
console.log(nombre2[]); // Error
console.log(nombre2[0]);
console.log(nombre2[1]);
console.log(nombre2[10]);

var frase = "Desarrollo web";
console.log(frase.indexOf("o"));
console.log(frase.indexOf("o", 7));
console.log(frase.indexOf("o", 17)); // Sale -1 porque no existe una "0" despues de la casilla 17

var frase = "Desarrollo web"
// Conteo de derecha a izquierda
console.log(frase.lastIndexOf("o"));
console.log(frase.lastIndexOf("o", 7));
console.log(frase.lastIndexOf("o", 1)); // Antes del 1 no hay "o" por lo tanto sale -1

// Fragmento de cadenas
// .repeat(num): Devuelve la cadena repetida un numero de veces
const text2 = "Javi";
console.log(text2.repeat(5));
console.log(text2.repeat(1));
console.log(text2.repeat(0));
console.log(text2.repeat(-1)); //Error porque algo no se puede repetir negativamente

// .substrings(inicio, fin): devuelve un substring desde la posicion inicio hasta la posicion fin.
// .substrings(inicio, tamaño): Devuelve un substring desde la posicion inicio de tantos caracteres como indica "tamaño", es decir, desde inicio hasta inicio+tamaño

const text1 = "Calidoscopio";
console.log(text1.substr(3));
console.log(text1.substr(3, 5));
console.log(text1.substrting(3, 5)); // toma del caracter 3 al 5 (Tener en cuenta que la letra 1 seria el 0)

// .slice(inicio, fin): Es lo mismo que .substring, pero con unas diferencias, que el .slice si admite negativos

// Usando .sice()
const text3 = "Calidoscopio"
console.log(text3.slice(1,4))
console.log(text3.slice(-4,-1))
console.log(text3.slice(-4)) // No se pone cero en el segundo dato, porque no es valido

// Dividir de un String a un Array
// .split(texo): Separa la cadena de caracteres en partes usando texto como separador
// .split(TextDecoder, límte): Separa el String en partes, al igual que la expresión regular
// .split(expresión regular): Separa el texto usando los critrios de la expresión regular.
// .split(expresión regular, límite): Iual que el anterior, pero solo límite de fragmentos.

console.log("88.12.44.123".split("."));
console.log("1.2.3.4.5".split("."));
console.log("Hola a todos".split(" "));
console.log("A, B, C, D, E".split(","));

// Buscar y remplazar String

// .startsWith(texto): Devuelve true si la cadena empieza con texto
// .startsWith(texto, desde): Devuelve true si la cadena empieza con texto desde la posicion "Desde"
// .endsWith(texto): Devuelve true si la cadena finaliza con texto
// .endsWith(texto, hasta): Devuelve true si la cadena finaliza con textto desde la posición "Desde"
// .includes(texto): Devuelve true si la cadena tiene la subcadena "texto"
// .includes(texto, desde): devuelvee true si la cadena tiene la suvadena texto a partir de la posision "Desde"

const texto2 = "Javi"
console.log(texto2.startsWith("J"));
console.log(texto2.startsWith("a", 1));
console.log(texto2.endsWith("v"));
console.log(texto2.endsWith("v", 3));
console.log(texto2.includes("vi"));
console.log(texto2.includes("J", 1));

// .searh(expresión regular): Busca un patron que encaje con la expreión regular y devulve la posicion donde lo encuentra
// .match(expresión regular): Devuelve un array con las coincidencias encontradas o null si no se encuentra ninguna

const text4 = "Pablo clavo un clavito en la calva de un calvito";
const regexp = /cl.../g;

console.log(text4.search(regexp));

var arr=text4.match(regexp);
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);

// Remplazar cadenas dentro de un string

// .remplace(texto, nuevoTexto): Reemplaza la primera aparicón de "Texto" por "nuevoTexto".
// .replace(expresión regular, nuevoTexto): Realiza el reemplazo, pero en vez de buscar el texto, es respecto al cumplimiento de la expresión regular.
// .replaceAll(texto, nuevoTexto): reemplaza todas las apariciones de "texto" por "nuevoTexto"
// .replaceAll(expresión regular, nuevoTexto): Reemplaza todas las apariciones del texto que cumple con la expresión regular por "nuevoTexto"

const text5 = "Lara, Maria y Carlos se van al cine."
console.log(text5.replace("r","m"))
console.log(text5.replace("r","m").replace("a","e"))

console.log(text5.replaceAll("a","e"));
console.log(text5.replace(/a/g,"i"));

// Modificar los string
// .toLowerCase(): Devuelve la cadena en minuscula
// .toUpperCase(): Devuelve la cadena en mayuscula
// .padstart(tamaño, texto): Devuelve una cadena rellenando el inicio con "Texto" hasta llegar al "Tamaño"
// .padEnd(tamaño, texto): Develve una cadena rellenando el final con "Texto" hasta llegar al "Tamaño"
// .trimStart(): Elimina los espacios a la izquierda del texto
// .trimEnd(): Elimina los espacios a la derecha del texto
// .trim(): Elimina los espacios a la derecha y de la izquierda del texto

let dia ="1"
dia=dia.padStart(2,"0");
console.log(`día: ${dia}`)

const cadena = "46";
