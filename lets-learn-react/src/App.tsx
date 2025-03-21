import {
  useState,
  useEffect,
  ReactNode,
  useRef,
  useMemo,
  useCallback,
} from "react";
import styles from "./App.module.css";

/*
 * CSS MODULES EN REACT
 * ------------------
 * Los CSS Modules son una característica que permite escribir CSS con alcance local.
 * Cada archivo .module.css genera un objeto JavaScript donde:
 * - Las claves son los nombres de las clases definidas en el CSS
 * - Los valores son identificadores únicos generados automáticamente
 *
 * Ejemplo:
 * .button {} en CSS se convierte en styles.button en JS
 *
 * Ventajas:
 * 1. Evita colisiones de nombres
 * 2. Mejor encapsulamiento
 * 3. Soporte completo de TypeScript
 */

/*
 * CONCEPTOS FUNDAMENTALES DE REACT
 * ------------------------------
 * React es una biblioteca de JavaScript para construir interfaces de usuario.
 * Se basa en componentes: piezas reutilizables de UI que manejan su propio estado.
 *
 * JSX: Es una extensión de JavaScript que nos permite escribir código que parece HTML
 * dentro de JavaScript. Por ejemplo: <div>Hola</div>
 *
 * Props: Son la forma de pasar datos entre componentes, funcionando como atributos HTML.
 *
 * TypeScript: Añade tipos estáticos a JavaScript, ayudando a prevenir errores comunes.
 */

/*
 * INTERFACES EN TYPESCRIPT
 * ----------------------
 * Las interfaces definen contratos en tu código.
 * Especifican qué propiedades y tipos debe tener un objeto.
 */
interface WelcomeProps {
  name: string;
}

/*
 * COMPONENTE FUNCIONAL
 * ------------------
 * Los componentes funcionales son funciones que retornan elementos React (JSX).
 * Son la forma moderna de escribir componentes en React.
 *
 * Props Destructuring: { name } extrae la propiedad name de las props directamente.
 */
const Welcome = ({ name }: WelcomeProps) => {
  return <h1>Hola, {name}! Bienvenido a la demostración de React.</h1>;
};

/*
 * CHILDREN Y COMPOSICIÓN
 * --------------------
 * children es una prop especial que permite pasar elementos como contenido dentro
 * de las etiquetas de un componente.
 * ReactNode es un tipo que puede representar cualquier cosa renderizable en React.
 */
interface CardProps {
  title: string;
  children: ReactNode;
}
const Card = ({ title, children }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      {children}
    </div>
  );
};

/*
 * useRef HOOK
 * ----------
 * useRef es un Hook que proporciona una forma de:
 * 1. Mantener valores que persisten entre renders sin causar nuevos renders
 * 2. Acceder directamente a elementos DOM
 * 3. Almacenar valores mutables que no necesitan causar actualizaciones
 *
 * Casos de uso comunes:
 * - Referencias a elementos DOM
 * - Almacenar valores previos
 * - Contar renders
 * - Mantener timers o intervalos
 */
const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Campo con useRef"
        className={styles.formInput}
      />
      <button onClick={focusInput} className={styles.button}>
        Enfocar Input
      </button>
      <p>useRef mantiene una referencia mutable que persiste entre renders</p>
    </div>
  );
};

/*
 * OPTIMIZACIÓN DE RENDIMIENTO
 * -------------------------
 * useMemo y useCallback son Hooks de optimización que ayudan a evitar cálculos
 * o recreaciones innecesarias de funciones.
 *
 * useMemo:
 * - Memoriza valores calculados
 * - Útil para cálculos costosos
 * - Solo recalcula cuando las dependencias cambian
 *
 * useCallback:
 * - Memoriza definiciones de funciones
 * - Útil cuando pasas funciones como props
 * - Previene recreaciones innecesarias de componentes hijos
 */
const PerformanceComponent = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo: Memoriza un valor calculado
  const doubleNumber = useMemo(() => {
    return number * 2;
  }, [number]);

  // useCallback: Memoriza una función
  const handleClick = useCallback(() => {
    setNumber((prev) => prev + 1);
  }, []);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    padding: "10px",
  };

  return (
    <div className={styles.performanceContainer} style={theme}>
      <p>Número: {number}</p>
      <p>Doble (memorizado): {doubleNumber}</p>
      <button onClick={handleClick} className={styles.button}>
        Incrementar
      </button>
      <button
        onClick={() => setDark((prev) => !prev)}
        className={styles.button}
      >
        Cambiar Tema
      </button>
    </div>
  );
};

/*
 * COMPONENTE PRINCIPAL Y GESTIÓN DE ESTADO
 * -------------------------------------
 * useState:
 * - Hook fundamental para manejar estado local
 * - Retorna un array con [valor, funcionActualizadora]
 * - La función actualizadora puede recibir un valor o una función
 *
 * Patrones comunes de useState:
 * 1. Estado simple: const [count, setCount] = useState(0)
 * 2. Estado con objetos: const [user, setUser] = useState({ name: '', age: 0 })
 * 3. Estado booleano para loading/toggles: const [loading, setLoading] = useState(false)
 *
 * useEffect:
 * - Maneja efectos secundarios en componentes
 * - Se ejecuta después del render
 * - Puede retornar una función de limpieza
 *
 * Patrones comunes de useEffect:
 * 1. Sin dependencias ([]) - Solo al montar y desmontar
 * 2. Con dependencias ([dep1, dep2]) - Cuando las dependencias cambian
 * 3. Sin array de dependencias - En cada render (¡usar con cuidado!)
 */
const App = () => {
  // Estados múltiples con useState
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "", age: 0 });
  const [loading, setLoading] = useState(false);

  // useEffect con diferentes dependencias
  useEffect(() => {
    document.title = `Has hecho clic ${count} veces`;
  }, [count]); // Se ejecuta cuando count cambia

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Este efecto se ejecuta solo una vez al montar");
    }, 1000);

    // Función de limpieza
    return () => clearTimeout(timer);
  }, []); // Array vacío = solo al montar

  /*
   * EVENT HANDLING EN REACT
   * ---------------------
   * Los eventos en React:
   * 1. Usan camelCase: onClick en lugar de onclick
   * 2. Reciben funciones, no strings
   * 3. Tienen tipos específicos en TypeScript
   * 4. Pueden acceder al evento sintético de React
   *
   * Patrones comunes:
   * - Inline handlers para acciones simples
   * - Funciones nombradas para lógica compleja
   * - Funciones que actualizan estado
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular una petición
    setTimeout(() => setLoading(false), 1000);
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <Welcome name="Desarrollador" />

      <Card title="Hooks Básicos - useState y useEffect">
        <p>useState permite manejar estado local en componentes funcionales.</p>
        <p>Contador: {count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Incrementar
        </button>
        <p>
          useEffect maneja efectos secundarios y ciclo de vida del componente.
        </p>
      </Card>

      <Card title="Formularios y Event Handlers">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleUserChange}
            placeholder="Nombre"
            className={styles.formInput}
          />
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleUserChange}
            placeholder="Edad"
            className={styles.formInput}
          />
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </Card>

      <Card title="useRef Ejemplo">
        <InputFocus />
      </Card>

      <Card title="useMemo y useCallback">
        <PerformanceComponent />
        <p>useMemo memoriza valores calculados para optimizar rendimiento</p>
        <p>
          useCallback memoriza funciones para evitar recreaciones innecesarias
        </p>
      </Card>

      <Card title="Virtual DOM y Reconciliación">
        <p>
          React mantiene una representación virtual del DOM (Virtual DOM).
          Cuando el estado cambia, React: 1. Crea un nuevo árbol virtual 2.
          Compara con el anterior (diffing) 3. Calcula la mínima cantidad de
          cambios necesarios 4. Actualiza solo lo necesario en el DOM real
        </p>
      </Card>
    </div>
  );
};

export default App;
