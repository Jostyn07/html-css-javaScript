// BUCLE WHILE
i = 1; // Inicializar contador

// Condición: Mientras que i sea menor de 5
while ( i < 5) {
    console.log ("Valor de i:", i);
    i = i + 2;
}

// DO.. WHILE
let x = 1;
let suma = 0;
do {
suma += x;
x++;
} while (x <= 10);
console.log(suma)
// Bucle for

// for (inicializa; condición; incremento)
for (i = 0; i < 5; i++) {
    console.log("valor de i:", i);
}

for ( x = 0, y = 5; x < 5; x++, y--) {
    console.log("valor de x e y:", x, y)
}