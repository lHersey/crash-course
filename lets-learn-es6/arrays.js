// ========================
// MÉTODOS IMPORTANTES DE ARRAYS EN ES6
// ========================

// 1. MAP
// Recorre el array y aplica una función a cada elemento, devolviendo un nuevo array.
const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(numero => numero ** 2);
console.log("Cuadrados:", cuadrados); // [1, 4, 9, 16]

// ========================

// 2. FILTER
// Filtra los elementos del array que cumplen con una condición y devuelve un nuevo array.
const mayoresQueDos = numeros.filter(numero => numero > 2);
console.log("Números mayores que 2:", mayoresQueDos); // [3, 4]

// ========================

// 3. FIND
// Devuelve el primer elemento del array que cumple con una condición.
const primerMayorQueDos = numeros.find(numero => numero > 2);
console.log("Primer número mayor que 2:", primerMayorQueDos); // 3

// ========================

// 4. INCLUDES
// Verifica si un valor existe en el array. Devuelve `true` o `false`.
const incluyeTres = numeros.includes(3);
console.log("¿Incluye el número 3?:", incluyeTres); // true

// ========================

// 5. EVERY
// Verifica si TODOS los elementos del array cumplen con una condición.
const todosSonPositivos = numeros.every(numero => numero > 0);
console.log("¿Todos los números son positivos?:", todosSonPositivos); // true

// ========================

// 6. SOME
// Verifica si ALGUNO de los elementos del array cumple con una condición.
const hayNegativos = numeros.some(numero => numero < 0);
console.log("¿Hay números negativos?:", hayNegativos); // false

// ========================

// 7. REDUCE
// Reduce un array a un único valor aplicando una función acumuladora.
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Suma de los números:", suma); // 10

// Otro ejemplo con reduce: Multiplicación de todos los números.
const producto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log("Producto de los números:", producto); // 24

// ========================

// RESUMEN
// Aquí tienes una tabla con los métodos y lo que hacen:
const resumenMetodos = [
  { metodo: "map", descripcion: "Transforma los elementos y devuelve un nuevo array." },
  { metodo: "filter", descripcion: "Devuelve un nuevo array con los elementos que cumplen una condición." },
  { metodo: "find", descripcion: "Devuelve el primer elemento que cumple una condición." },
  { metodo: "includes", descripcion: "Verifica si un valor existe en el array." },
  { metodo: "every", descripcion: "Comprueba si todos los elementos cumplen una condición." },
  { metodo: "some", descripcion: "Comprueba si al menos un elemento cumple una condición." },
  { metodo: "reduce", descripcion: "Combina todos los elementos en un solo valor." },
];

console.table(resumenMetodos);
