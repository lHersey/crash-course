/*
 * TYPESCRIPT: GUÍA COMPLETA PARA PRINCIPIANTES
 * ----------------------------------------
 * TypeScript es un superconjunto de JavaScript que añade tipos estáticos.
 * ¿Qué significa esto?
 * 1. Todo el código JavaScript válido es también código TypeScript
 * 2. Podemos añadir tipos a nuestras variables y funciones
 * 3. Los tipos nos ayudan a encontrar errores antes de ejecutar el código
 * 4. Los tipos se eliminan cuando el código se compila a JavaScript
 */

/*
 * TIPOS BÁSICOS Y INFERENCIA
 * ------------------------
 * TypeScript puede adivinar (inferir) los tipos automáticamente,
 * o podemos declararlos explícitamente.
 *
 * La inferencia de tipos ocurre cuando:
 * 1. Inicializamos una variable con un valor
 * 2. Establecemos valores por defecto en parámetros
 * 3. Determinamos el tipo de retorno de una función
 */

// Ejemplos de inferencia (TypeScript adivina el tipo)
let mensaje = "Hola, TypeScript"; // TypeScript sabe que es string
let edad = 25; // TypeScript sabe que es number
let esActivo = true; // TypeScript sabe que es boolean

// Ejemplos de tipos explícitos (nosotros especificamos el tipo)
let mensajeExplicito: string = "Hola, TypeScript";
let edadExplicita: number = 25;
let esActivoExplicito: boolean = true;

/*
 * TIPOS ESPECIALES
 * --------------
 * TypeScript incluye tipos especiales para casos específicos:
 *
 * any:
 * - Representa cualquier tipo
 * - Evita el chequeo de tipos
 * - Usar con precaución, pues perdemos las ventajas de TypeScript
 *
 * unknown:
 * - Similar a any, pero más seguro
 * - Requiere verificación antes de usar el valor
 *
 * void:
 * - Representa la ausencia de un valor
 * - Usado principalmente en funciones que no retornan nada
 *
 * never:
 * - Representa valores que nunca ocurren
 * - Útil para funciones que lanzan errores o bucles infinitos
 */

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

/*
 * INTERFACES Y TIPOS
 * ---------------
 * Las interfaces son una forma de definir contratos en tu código.
 * Describen la forma que debe tener un objeto.
 *
 * Diferencias entre interface y type:
 * 1. Las interfaces se pueden extender
 * 2. Los types pueden crear uniones y tipos primitivos
 * 3. Las interfaces son más flexibles para la orientación a objetos
 */

// Ejemplo detallado de interface
interface PersonaDetallada {
  // Propiedades requeridas
  nombre: string;
  edad: number;

  // Propiedad opcional (con ?)
  telefono?: string;

  // Método
  saludar(): string;

  // Método con parámetros
  presentarse(titulo: string): string;
}

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

/*
 * GENÉRICOS
 * --------
 * Los genéricos son como variables para tipos.
 * Nos permiten escribir código que puede trabajar con múltiples tipos.
 *
 * Casos de uso comunes:
 * 1. Arrays de diferentes tipos
 * 2. Funciones que procesan diferentes tipos
 * 3. Clases que pueden trabajar con diferentes tipos de datos
 */

// Ejemplo detallado de genéricos
function contenedor<T>(valor: T): { dato: T; timestamp: Date } {
  return {
    dato: valor,
    timestamp: new Date(),
  };
}

// Uso del genérico con diferentes tipos
const stringContenedor = contenedor("hola"); // T es string
const numberContenedor = contenedor(123); // T es number

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

/*
 * UTILITY TYPES EXPLICADOS
 * ---------------------
 * Los Utility Types son herramientas que TypeScript proporciona
 * para transformar tipos de forma común.
 *
 * Partial<T>:
 * - Hace todas las propiedades opcionales
 * - Útil cuando actualizamos solo algunas propiedades
 *
 * Required<T>:
 * - Hace todas las propiedades requeridas
 * - Opuesto a Partial
 *
 * Pick<T, K>:
 * - Selecciona solo ciertas propiedades de un tipo
 * - Útil para crear subconjuntos de tipos
 *
 * Omit<T, K>:
 * - Excluye ciertas propiedades de un tipo
 * - Útil cuando queremos todo excepto algunas propiedades
 */

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

/*
 * TIPOS AVANZADOS Y MANIPULACIÓN DE TIPOS
 * ------------------------------------
 * TypeScript permite crear y manipular tipos complejos
 */

// Mapped Types: Transformar tipos existentes
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Conditional Types: Tipos basados en condiciones
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : "other";

// Template Literal Types: Tipos basados en strings literales
type EventName = `on${string}`;
type ValidEvent = `${string}Changed` | `${string}Updated`;

/*
 * PATRONES DE DISEÑO CON TIPOS
 * --------------------------
 */

// Type Guards: Narrowing de tipos
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Builder Pattern con tipos
interface Builder<T> {
  build(): T;
}

class UserBuilder implements Builder<Usuario> {
  private user: Partial<Usuario> = {};

  withName(name: string): this {
    this.user.nombre = name;
    return this;
  }

  build(): Usuario {
    // Asumiendo que tenemos todas las propiedades necesarias
    return this.user as Usuario;
  }
}

/*
 * TIPOS DE UTILIDAD AVANZADOS
 * ------------------------
 */

// DeepReadonly: Hace todas las propiedades y sub-propiedades readonly
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// NonNullable: Remueve null y undefined de un tipo
type NonNullableUser = NonNullable<Usuario | null | undefined>;

// Parameters: Obtiene los tipos de parámetros de una función
type FuncParams = Parameters<(a: string, b: number) => void>; // [string, number]

/*
 * DECORADORES AVANZADOS
 * ------------------
 */

// Decorator Factory
function log<T>(prefix: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(`${prefix}: ${propertyKey} called with`, args);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class Example {
  @log("DEBUG")
  method(x: number) {
    return x * 2;
  }
}

/*
 * TIPOS PARA PROGRAMACIÓN FUNCIONAL
 * ------------------------------
 */

// Function Overloading
function proceso(x: number): number;
function proceso(x: string): string;
function proceso(x: any): any {
  return x;
}

// Higher-Order Function Types
type MapFunc<T, U> = (item: T) => U;
type Filter<T> = (item: T) => boolean;

/*
 * PATRONES DE TIPADO SEGURO
 * ----------------------
 */

// Branded Types para Type Safety
type Brand<K, T> = K & { __brand: T };
type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

function addDollars(a: USD, b: USD): USD {
  return (a + b) as USD;
}

// Exporta los nuevos conceptos
export { UserBuilder, type DeepReadonly, type Brand };

/*
 * TYPE GUARDS (GUARDIAS DE TIPO)
 * ---------------------------
 * Los Type Guards son funciones que ayudan a TypeScript a reducir el tipo de una variable
 * dentro de un bloque condicional.
 *
 * Características principales:
 * 1. Retornan un predicado de tipo (type predicate)
 * 2. Permiten hacer comprobaciones seguras de tipos
 * 3. Ayudan a TypeScript a entender el tipo específico en cada rama del código
 *
 * Casos de uso comunes:
 * - Verificar tipos primitivos
 * - Comprobar propiedades específicas de objetos
 * - Distinguir entre diferentes tipos de unión
 *
 * Tipos de Type Guards:
 * 1. typeof para tipos primitivos
 * 2. instanceof para clases
 * 3. in para verificar propiedades
 * 4. Predicados personalizados (user is Admin)
 */

// Ejemplos de Type Guards
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(value: any): value is Usuario {
  return (
    value && typeof value === "object" && "id" in value && "nombre" in value
  );
}

/*
 * BUILDER PATTERN CON TIPOS
 * ----------------------
 * El Builder Pattern es un patrón de diseño creacional que permite
 * construir objetos complejos paso a paso.
 *
 * Ventajas en TypeScript:
 * 1. Tipado seguro durante la construcción
 * 2. Fluent interface con autocompletado
 * 3. Validación en tiempo de compilación
 *
 * Características:
 * - Métodos encadenables (method chaining)
 * - Construcción inmutable
 * - Validación de estado
 * - Tipado fuerte durante todo el proceso
 */

interface Builder<T> {
  build(): T;
}

class UserBuilder implements Builder<Usuario> {
  private user: Partial<Usuario> = {};

  withName(name: string): this {
    this.user.nombre = name;
    return this;
  }

  withEmail(email: string): this {
    this.user.email = email;
    return this;
  }

  withId(id: number): this {
    this.user.id = id;
    return this;
  }

  build(): Usuario {
    // Validación en tiempo de ejecución
    if (!this.user.nombre || !this.user.email || !this.user.id) {
      throw new Error("Usuario incompleto");
    }
    return this.user as Usuario;
  }
}

// Ejemplo de uso del builder
const usuario = new UserBuilder()
  .withName("Juan")
  .withEmail("juan@example.com")
  .withId(1)
  .build();

/*
 * BRANDED TYPES (TIPOS MARCADOS)
 * ---------------------------
 * Los Branded Types son una técnica para crear tipos nominales en TypeScript,
 * que por defecto usa un sistema de tipos estructural.
 *
 * Propósito:
 * 1. Evitar confusiones entre tipos compatibles estructuralmente
 * 2. Garantizar seguridad de tipos en dominios específicos
 * 3. Prevenir errores lógicos en tiempo de compilación
 *
 * Casos de uso:
 * - Unidades de medida
 * - Identificadores únicos
 * - Monedas y valores monetarios
 * - Validación de strings específicos
 */

type Brand<K, T> = K & { __brand: T };
type Email = Brand<string, "Email">;
type Password = Brand<string, "Password">;

function createEmail(email: string): Email {
  if (!email.includes("@")) throw new Error("Email inválido");
  return email as Email;
}

function createPassword(password: string): Password {
  if (password.length < 8) throw new Error("Password muy corta");
  return password as Password;
}

function login(email: Email, password: Password) {
  // TypeScript garantiza que solo se pueden usar valores validados
  console.log("Login con email validado:", email);
}

/*
 * CONDITIONAL TYPES (TIPOS CONDICIONALES)
 * ----------------------------------
 * Los tipos condicionales permiten seleccionar tipos basados en condiciones,
 * similar a un operador ternario pero para tipos.
 *
 * Características:
 * 1. Evaluación en tiempo de compilación
 * 2. Distribución sobre uniones
 * 3. Inferencia en cláusulas extends
 *
 * Usos comunes:
 * - Selección de tipos basada en condiciones
 * - Filtrado de tipos de una unión
 * - Transformación condicional de tipos
 */

type IsString<T> = T extends string ? true : false;
type IsStringType = IsString<"hello">; // true
type IsNumberType = IsString<42>; // false

// Tipo condicional más complejo con inferencia
type UnpackArray<T> = T extends Array<infer U> ? U : T;
type ElementType = UnpackArray<number[]>; // number
type NotArrayType = UnpackArray<string>; // string
