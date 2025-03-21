# 📌 Guía Completa de Hooks en React 19 (con TypeScript)

Los Hooks en React permiten manejar estado, efectos, referencias y más en componentes funcionales. Esta guía cubre todos los Hooks con ejemplos en TypeScript.

---

## 🔹 1. `useState` – Manejo de estado en componentes funcionales

`useState` permite agregar y actualizar estados dentro de un componente.

### 📌 Sintaxis
```tsx
const [estado, setEstado] = useState<Tipo>(valorInicial);
```
- `estado`: Contiene el valor actual del estado.
- `setEstado`: Función que actualiza el estado.

### 📝 Ejemplo: Contador con `useState`
```tsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador((prev) => prev + 1)}>Incrementar</button>
    </div>
  );
}
```

---

## 🔹 2. `useEffect` – Efectos secundarios

`useEffect` permite ejecutar código después del renderizado.

### 📌 Sintaxis
```tsx
useEffect(() => {
  // Código a ejecutar
  return () => {
    // Cleanup (opcional)
  };
}, [dependencias]);
```

### 📝 Ejemplo: Fetch de datos con `useEffect`
```tsx
import { useState, useEffect } from "react";

interface Usuario {
  name: string;
}

function DatosUsuario() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }, []);

  return usuario ? <p>Nombre: {usuario.name}</p> : <p>Cargando...</p>;
}
```

---

## 🔹 3. `useRef` – Referencias a elementos del DOM y valores persistentes

`useRef` permite acceder a elementos del DOM y almacenar valores sin causar re-renderizados.

### 📝 Ejemplo: Autofocus en un input
```tsx
import { useRef, useEffect } from "react";

function InputAutoFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="Escribe algo..." />;
}
```

---

## 🔹 4. `useMemo` – Memorizar valores calculados

`useMemo` evita cálculos costosos si las dependencias no cambian.

### 📝 Ejemplo: Filtrado optimizado
```tsx
import { useState, useMemo } from "react";

function ListaFiltrada({ datos }: { datos: string[] }) {
  const [filtro, setFiltro] = useState<string>("");

  const listaFiltrada = useMemo(() => {
    return datos.filter((item) => item.includes(filtro));
  }, [filtro, datos]);

  return (
    <div>
      <input onChange={(e) => setFiltro(e.target.value)} />
      <ul>{listaFiltrada.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}
```

---

## 🔹 5. `useCallback` – Memorizar funciones

`useCallback` evita que funciones se re-creen en cada render.

### 📝 Ejemplo: Pasar funciones a `useEffect` o componentes hijos
```tsx
import { useState, useCallback } from "react";

function Contador() {
  const [contador, setContador] = useState<number>(0);

  const incrementar = useCallback(() => {
    setContador((prev) => prev + 1);
  }, []);

  return <button onClick={incrementar}>Incrementar</button>;
}
```

---

## 🔹 6. `useTransition` – Actualizaciones de baja prioridad

`useTransition` ayuda a mejorar el rendimiento al diferir actualizaciones costosas.

### 📝 Ejemplo: Filtrado sin bloquear la UI
```tsx
import { useState, useTransition } from "react";

function Lista() {
  const [filtro, setFiltro] = useState<string>("");
  const [lista, setLista] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function manejarCambio(e: React.ChangeEvent<HTMLInputElement>) {
    setFiltro(e.target.value);

    startTransition(() => {
      setLista(generarListaFiltrada(e.target.value));
    });
  }

  return (
    <div>
      <input value={filtro} onChange={manejarCambio} />
      {isPending && <p>Cargando...</p>}
      <ul>{lista.map((item) => <li key={item}>{item}</li>)}</ul>
    </div>
  );
}

function generarListaFiltrada(filtro: string): string[] {
  return Array.from({ length: 10000 }, (_, i) => `Elemento ${i}`).filter((item) =>
    item.includes(filtro)
  );
}
```

---

## 🔹 7. `use` – Manejo de datos asíncronos con Suspense

El nuevo Hook `use` simplifica la carga de datos asíncronos en componentes.

### 📝 Ejemplo: Cargar datos con `use` y `Suspense`
```tsx
import { use, Suspense } from "react";

function fetchData(): Promise<{ name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Juan Pérez" }), 2000);
  });
}

const dataPromise = fetchData();

function Usuario() {
  const usuario = use(dataPromise);
  return <p>Nombre: {usuario.name}</p>;
}

export default function App() {
  return (
    <Suspense fallback={<p>Cargando usuario...</p>}>
      <Usuario />
    </Suspense>
  );
}
```