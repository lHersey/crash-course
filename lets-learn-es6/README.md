# JavaScript Moderno (ES6+) 🚀

## 📖 Contenido del Proyecto

Este proyecto demuestra las características modernas de JavaScript (ES6+) con ejemplos prácticos.

### 🔍 Archivos Principales

- `index.js` - Conceptos fundamentales de ES6+
- `arrays.js` - Métodos modernos de arrays

## 🔍 Conceptos Fundamentales

### Variables y Scope

```javascript
// 1. Block Scope
let x = 10; // Scope de bloque
const PI = 3.14; // Constante inmutable

// 2. Temporal Dead Zone (TDZ)
console.log(x); // ❌ ReferenceError
let x = 1; // Variables no sufren hoisting como var
```

### Arrow Functions

```javascript
// 1. Sintaxis básica
const suma = (a, b) => a + b;

// 2. this léxico
const objeto = {
  valor: 42,
  getValor: () => this.valor, // this hereda del scope padre
};
```

### Template Literals

```javascript
const nombre = "Usuario";
const mensaje = `
  Hola ${nombre},
  Bienvenido al curso
  de ES6+
`;
```

### Desestructuración

```javascript
// 1. Objetos
const { nombre, edad } = usuario;

// 2. Arrays
const [primero, segundo, ...resto] = array;

// 3. Parámetros de función
function procesar({ id, data = [] } = {}) {
  // valores por defecto y desestructuración
}
```

### Spread/Rest Operator

```javascript
// 1. Spread para arrays y objetos
const fusionado = [...array1, ...array2];
const nuevoObjeto = { ...objeto1, ...objeto2 };

// 2. Rest en funciones
const sumarTodo = (...nums) => nums.reduce((a, b) => a + b);
```

## 📊 Métodos de Arrays Modernos

```javascript
// 1. map - Transformación
const duplicados = numeros.map((x) => x * 2);

// 2. filter - Filtrado
const positivos = numeros.filter((x) => x > 0);

// 3. reduce - Acumulación
const suma = numeros.reduce((acc, val) => acc + val, 0);
```

## 🔄 Asincronía Moderna

### Promesas

```javascript
const promesa = new Promise((resolve, reject) => {
  // Operación asíncrona
});

promesa
  .then((resultado) => console.log(resultado))
  .catch((error) => console.error(error));
```

### Async/Await

```javascript
async function obtenerDatos() {
  try {
    const resultado = await fetch(url);
    const datos = await resultado.json();
    return datos;
  } catch (error) {
    console.error(error);
  }
}
```

## 📚 Referencias y Recursos

### Documentación Oficial

- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [ECMAScript 6 Features](https://github.com/lukehoban/es6features)

### Guías y Tutoriales

- [JavaScript.info](https://javascript.info/)
- [ESLint - Reglas ES6+](https://eslint.org/docs/rules/)
- [Babel - Compatibilidad ES6+](https://babeljs.io/docs/en/)

### Herramientas de Desarrollo

- [ESLint](https://eslint.org/) - Linting y mejores prácticas
- [Babel](https://babeljs.io/) - Transpilación de código moderno
- [Jest](https://jestjs.io/) - Testing de código ES6+
