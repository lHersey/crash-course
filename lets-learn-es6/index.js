// ========================
// **CONCEPTOS BÁSICOS DE ES6**
// ========================

// 1. DECLARACIÓN DE VARIABLES: LET Y CONST
// `let` y `const` son formas modernas de declarar variables.
// let permite reasignación, mientras que const no lo permite.

let nombre = "Juan";
nombre = "Carlos"; // Reasignación válida

const edad = 30;
// edad = 35; // Error: no se puede reasignar una constante
console.log(nombre, edad);

// ========================

// 2. TEMPLATE STRINGS
// Los template strings permiten insertar variables en cadenas de texto.
const saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(saludo);

// ========================

// 3. FUNCIONES DE FLECHA
// Sintaxis compacta para definir funciones.
const sumar = (a, b) => a + b;
console.log(`La suma es: ${sumar(5, 10)}`);

// ========================

// 4. PARÁMETROS POR DEFECTO
// Define valores predeterminados para los parámetros de las funciones.
const saludar = (nombre = "Amigo") => `Hola, ${nombre}!`;
console.log(saludar()); // Usa el valor por defecto
console.log(saludar("Ana"));

// ========================

// 5. DESESTRUCTURACIÓN
// Extrae valores de objetos o arrays fácilmente.
const persona = {
  nombre: "Luis",
  edad: 25,
  pais: "Costa Rica",
};

const { nombre: nombrePersona, edad: edadPersona } = persona; // Desestructuración
console.log(nombrePersona, edadPersona);

// Desestructuración de arrays
const numeros = [10, 20, 30];
const [primero, segundo] = numeros;
console.log(primero, segundo);

// ========================

// 6. SPREAD Y REST OPERATOR
// `...` se usa para expandir elementos (spread) o agruparlos (rest).

// Spread en arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2];
console.log(combinado);

// Rest en funciones
const sumarTodo = (...numeros) => numeros.reduce((acc, val) => acc + val, 0);
console.log(sumarTodo(1, 2, 3, 4, 5)); // Suma todos los argumentos

// ========================

// 7. CLASES Y HERENCIA
// Las clases en ES6 son una forma más clara de trabajar con prototipos.
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`);
  }
}

const miPerro = new Perro("Rex");
miPerro.hacerSonido();
miPerro.ladrar();

// ========================

// 8. PROMESAS
// Manejo de operaciones asíncronas.
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;
  if (exito) {
    resolve("¡Promesa cumplida!");
  } else {
    reject("Error en la promesa.");
  }
});

miPromesa.then(resultado => console.log(resultado)).catch(error => console.error(error));

// ========================

// 9. FETCH (OPERACIONES ASÍNCRONAS)
// Usar `fetch` para realizar solicitudes HTTP.
const obtenerDatos = async () => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error("Hubo un error:", error);
  }
};
obtenerDatos();

// ========================

// 10. MÓDULOS ES6
// Usa `export` y `import` para dividir código en diferentes archivos.

// Archivo 1: suma.js (exportar la función)
// export const sumar = (a, b) => a + b;

// Archivo 2: main.js (importar la función)
// import { sumar } from './suma.js';
// console.log(sumar(2, 3));

// ========================

// **FIN DEL ARCHIVO**
console.log("¡Esto cubre los conceptos principales de ES6 en un solo archivo!");
