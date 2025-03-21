# React: Biblioteca UI Moderna ⚛️

## 📚 Estructura del Proyecto

Este proyecto demuestra los conceptos fundamentales de React con TypeScript y patrones modernos.

### 🗂️ Archivos Principales

- `src/App.tsx` - Componente principal
- `docs/hooks.md` - Documentación de Hooks
- `docs/react.md` - Conceptos fundamentales

## 🔍 Conceptos Principales

### Componentes Funcionales

```tsx
const Saludo: React.FC<Props> = ({ nombre }) => {
  return <h1>Hola, {nombre}!</h1>;
};
```

### Hooks

```tsx
const [estado, setEstado] = useState<number>(0);
useEffect(() => {
  // efecto
}, [dependencias]);
```

### 📋 Reglas de Hooks

1. **Solo llamar Hooks en el nivel superior**

   ```tsx
   // ✅ Correcto: En el nivel superior del componente
   function Component() {
     const [state, setState] = useState(0);

     // ❌ Incorrecto: En condicionales, loops o funciones anidadas
     if (condition) {
       useState(0); // Esto rompe la regla
     }
   }
   ```

2. **Solo llamar Hooks desde componentes React o Custom Hooks**

   ```tsx
   // ✅ Correcto: En un componente React
   function Component() {
     useEffect(() => {});
   }

   // ✅ Correcto: En un Custom Hook
   function useCustomHook() {
     useState();
   }

   // ❌ Incorrecto: En una función regular
   function regularFunction() {
     useEffect(); // Esto rompe la regla
   }
   ```

3. **Los Custom Hooks deben empezar con "use"**

   ```tsx
   // ✅ Correcto: Nombre empieza con "use"
   function useCustomHook() {
     return useState(0);
   }

   // ❌ Incorrecto: No empieza con "use"
   function customHook() {
     return useState(0);
   }
   ```

4. **Las dependencias de efectos deben ser exhaustivas**

   ```tsx
   // ✅ Correcto: Todas las dependencias listadas
   useEffect(() => {
     console.log(count, user);
   }, [count, user]);

   // ❌ Incorrecto: Dependencias faltantes
   useEffect(() => {
     console.log(count, user);
   }, [count]); // user falta en el array de dependencias
   ```

### Custom Hooks

```tsx
function useContador(inicial: number) {
  const [count, setCount] = useState(inicial);
  return {
    count,
    increment: () => setCount((c) => c + 1),
  };
}
```

## 🎨 Estilos en React

### CSS Modules

```tsx
import styles from "./Button.module.css";

const Button = () => <button className={styles.button}>Click me</button>;
```

## 🔄 Gestión de Estado

### useState

```tsx
const [user, setUser] = useState<User | null>(null);
```

### useContext

```tsx
const ThemeContext = createContext<Theme>("light");
```

### useReducer

```tsx
const [state, dispatch] = useReducer(reducer, initialState);
```

## 📚 Referencias

- [React Beta Docs](https://beta.reactjs.org/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [React Patterns](https://reactpatterns.com/)
- [React Hooks API](https://es.reactjs.org/docs/hooks-reference.html)
