// Condicionales if

// var nota = 7;
// console.log("Resultado del examen");
// // Si la nota es igual o mayor a 5
// if (nota >= 5) {
//     console.log("Aprobado")
// }

// Condicio5nal if/else
var nota = 6;
console.log("El resultado de mi examen es:");

if (nota <= 5) {
    resultado = "Reprobado";
} else if (nota > 5) {
    resultado = "Aprobado";
}
console.log("Estoy", resultado);

// OPERADOR TERNARIO
var nota = 7;
console.log("El resultado de mi examen es:", nota);

var resultado = nota < 5 ? "Suspendido" : "Aprobado";
console.log("Estoy", resultado);

// Condicionales if multiple
var nota = 10;
console.log("El resultado de mi examen es:", nota);

if (nota < 5) {
    resultado = "insuficiente";
} else if (nota < 6) {
    resultado = "Suficiente";
} else if ( nota < 8) {
    resultado = "Bien"
} else if ( nota < 9) {
    resultado = "Notable"
} else {
    resultado = "Sobresaliente"
}

console.log('He obtenido un', resultado)

// CONDICIONAL SWITCH

var nota = 7;
console.log("El resultado de mi examen es:");

switch (nota) {
    case 10:
        resultado = "Sobresaliente";
        break;
    case 9:
        resultado = "Notable";
        break;
    case 8:
        resultado = "Bien";
        break;
    case 7:
    case 6:
        resultado = "Suficiente";
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        resultado = "Insuficiente";
        break
    default:
        resultado = "Nota erronea";
        break
}

console.log(resultado)