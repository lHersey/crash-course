/*
  ============================
  Conceptos Completos de TypeScript
  ============================
*/

// 1. Tipado básico e inferencia de tipos
let mensaje = "Hola, TypeScript"; // TypeScript infiere que es una cadena (string)
let edad = 25; // Se infiere que es un número (number)
let esActivo = true; // Se infiere como booleano (boolean)

// También podemos definir los tipos explícitamente:
let mensajeExplicito: string = "Hola, TypeScript";
let edadExplicita: number = 25;
let esActivoExplicito: boolean = true;

// 2. Tipos especiales: any, unknown, void, never
let cualquierValor: any = 10; // Puede ser de cualquier tipo, evita usarlo cuando sea posible
let valorDesconocido: unknown = "puede ser cualquier cosa"; // Similar a any, pero más seguro

function mostrarMensaje(): void {
  console.log("Esto no devuelve nada");
}

function error(mensaje: string): never {
  throw new Error(mensaje); // never indica que la función nunca retorna
}

// 3. Arrays y Tuplas
let numeros: number[] = [1, 2, 3, 4, 5];
let tupla: [string, number] = ["Edad", 25]; // Un array con tipos específicos en cada posición

// 4. Enums
enum Color {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}
let miColor: Color = Color.Verde;

// 5. Interfaces
interface Persona {
  nombre: string;
  edad: number;
  saludar(): string;
}

const persona: Persona = {
  nombre: "Juan",
  edad: 30,
  saludar() {
    return `Hola, soy ${this.nombre}`;
  },
};

// 6. Tipos personalizados (Type Aliases)
type ID = string | number; // Un alias para representar múltiples tipos posibles
let usuarioId: ID = 123;

// 7. Funciones con tipos
function sumar(a: number, b: number): number {
  return a + b;
}

// 8. Parámetros opcionales y valores por defecto
function saludar(nombre: string, edad?: number): string {
  return edad ? `Hola ${nombre}, tienes ${edad} años` : `Hola ${nombre}`;
}

// 9. Clases y modificadores de acceso
class Animal {
  constructor(public nombre: string, private edad: number) {}
  obtenerEdad(): number {
    return this.edad;
  }
}
const perro = new Animal("Firulais", 4);

// 10. Genéricos
function identidad<T>(valor: T): T {
  return valor;
}
let resultado = identidad<number>(10);

// 11. Extender interfaces
interface Vehiculo {
  marca: string;
  modelo: string;
}
interface Auto extends Vehiculo {
  puertas: number;
}
const miAuto: Auto = {
  marca: "Toyota",
  modelo: "Corolla",
  puertas: 4,
};

// 12. Módulos y Namespaces (Ejemplo de export e import)
export function multiplicar(a: number, b: number): number {
  return a * b;
}

// Para importar en otro archivo usar:
// import { multiplicar } from "./archivo";

// 13. Decoradores (experimental, necesita "experimentalDecorators": true en tsconfig)
function decorador(target: any) {
  console.log("Decorador aplicado a:", target);
}

@decorador
class Prueba {}

// 14. Type Assertions (Aserciones de tipo)
let codigo: any = "123";
let codigoNumero: number = codigo as number; // Convierte a number pero puede ser peligroso

// 15. Intersección de tipos
type Empleado = {
  nombre: string;
  salario: number;
};
type Ciudadano = {
  dni: string;
};
type Trabajador = Empleado & Ciudadano; // Combina ambas estructuras
const trabajador: Trabajador = {
  nombre: "Pedro",
  salario: 2000,
  dni: "12345678",
};

// 16. Utility Types (Tipos Utilitarios)
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  activo: boolean;
}

// Partial<T> hace que todas las propiedades sean opcionales
const usuarioParcial: Partial<Usuario> = { nombre: "Carlos" };

// Required<T> hace que todas las propiedades sean obligatorias
const usuarioRequerido: Required<Usuario> = {
  id: 1,
  nombre: "Carlos",
  email: "carlos@example.com",
  activo: true,
};

// Pick<T, K> selecciona ciertas propiedades de un tipo
const usuarioSeleccionado: Pick<Usuario, "nombre" | "email"> = {
  nombre: "Ana",
  email: "ana@example.com",
};

// Omit<T, K> excluye ciertas propiedades de un tipo
const usuarioSinEmail: Omit<Usuario, "email"> = {
  id: 2,
  nombre: "Luis",
  activo: false,
};

// Readonly<T> convierte todas las propiedades en solo lectura
const usuarioSoloLectura: Readonly<Usuario> = {
  id: 3,
  nombre: "Marta",
  email: "marta@example.com",
  activo: true,
};
// usuarioSoloLectura.nombre = "Otro nombre"; // Error: No se puede modificar

// Record<K, T> crea un tipo de objeto con claves K y valores T
type Configuracion = Record<string, string | number>;
const config: Configuracion = {
  theme: "dark",
  version: 1.0,
};

// Exclude<T, U> excluye tipos específicos
type NumerosSinCero = Exclude<number | string | boolean, 0>; // Se excluye el número 0

// Extract<T, U> extrae tipos específicos
type SoloStrings = Extract<number | string | boolean, string>; // Solo deja los strings

// 17. Inferencia avanzada en funciones y objetos
const usuarioInferido = {
  id: 10,
  nombre: "Mario",
};
// TypeScript infiere que usuarioInferido tiene el tipo { id: number, nombre: string }
