# Todo sobre React

## ¿Qué es React?
**React** es una biblioteca de JavaScript de código abierto desarrollada por Facebook. Su propósito principal es ayudar a los desarrolladores a construir interfaces de usuario (UI) de manera eficiente, especialmente en aplicaciones web y móviles. Está centrada en el concepto de componentes reutilizables, lo que permite dividir interfaces complejas en piezas manejables y reutilizables.

---

## ¿Cómo funciona React?
React se basa en dos conceptos clave: **la programación declarativa** y el **Virtual DOM**. En lugar de manipular el DOM real directamente, React:
1. Actualiza el Virtual DOM en memoria.
2. Compara la nueva versión del Virtual DOM con la anterior (proceso de "diffing").
3. Realiza actualizaciones mínimas necesarias en el DOM real.

Esto permite que las actualizaciones sean rápidas y eficientes, lo que lo hace ideal para aplicaciones dinámicas.

---

## ¿Qué es un componente?
Un **componente** es la unidad básica de construcción en React. Encapsula una parte específica de la interfaz de usuario con su lógica y diseño. Los componentes pueden ser:
- **Funcionales**: Usan funciones de TypeScript.
- **De clase**: Usan clases de TypeScript.

Ejemplo de un componente funcional en TypeScript:

```tsx
import React from "react";

interface SaludoProps {
  nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>¡Hola, {nombre}!</h1>;
};
```

---

## ¿Qué son los props?
Los **props** (propiedades) son datos que se pasan desde un componente padre a un hijo. Son **inmutables**, lo que significa que el componente hijo no puede modificarlos.

Ejemplo en TypeScript:

```tsx
import React from "react";

interface SaludoProps {
  nombre: string;
}

const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return <h1>¡Hola, {nombre}!</h1>;
};

<Saludo nombre="Hersey" />; // Renderiza: ¡Hola, Hersey!
```

---

## ¿Qué son los children?
Los **children** son un tipo especial de props que permite pasar contenido anidado entre las etiquetas de un componente.

Ejemplo en TypeScript:

```tsx
import React from "react";

interface ContenedorProps {
  children: React.ReactNode;
}

const Contenedor: React.FC<ContenedorProps> = ({ children }) => {
  return <div className="contenedor">{children}</div>;
};

<Contenedor>
  <h1>Este es un hijo</h1>
</Contenedor>;
```

---

## ¿Qué es el Virtual DOM?
El **Virtual DOM** es una copia en memoria del DOM real. Cuando ocurre un cambio en la aplicación:
1. React actualiza el Virtual DOM.
2. Compara la nueva versión con la anterior (algoritmo "diffing").
3. Aplica los cambios necesarios al DOM real.

Esto mejora significativamente el rendimiento.

---

## ¿Por qué usar React?
Las principales razones para usar React son:
1. **Reutilización de componentes**: Facilita el desarrollo modular.
2. **Alto rendimiento**: Gracias al Virtual DOM.
3. **Comunidad activa**: Gran soporte, documentación y bibliotecas adicionales.
4. **Versatilidad**: Compatible con aplicaciones modernas y móviles (React Native).
5. **Facilidad de uso**: Su enfoque declarativo simplifica la curva de aprendizaje.

---
