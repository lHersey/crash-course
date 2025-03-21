# Redux App: Ejemplo Práctico 🔄

## 📝 Descripción del Proyecto

Una aplicación de ejemplo que demuestra los conceptos fundamentales de Redux usando TypeScript y módulos modernos.

## 🗂️ Estructura del Proyecto

```
src/
├── store/
│   ├── counter/
│   │   ├── counter-actions.ts    # Action creators y tipos
│   │   ├── counter-reducer.ts    # Reducer del contador
│   │   └── counter-selectors.ts  # Selectores para acceder al estado
│   ├── setup-store.ts           # Configuración principal de Redux
│   └── types.ts                 # Tipos base de Redux
├── counter.ts                   # Componente de contador
└── main.ts                      # Punto de entrada
```

## 🔍 Conceptos Implementados

### Tipado Fuerte con TypeScript

```typescript
type Action<TipoDeAction extends string> = {
  type: TipoDeAction;
};

type ActionPayload<TipoDeAction extends string, TipoPayload> = {
  type: TipoDeAction;
  payload: TipoPayload;
};
```

### Store Configuration

```typescript
const rootReducer = combineReducers({
  counterState: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);
```

### Selectors

```typescript
export const selectCount = (state: RootState) => {
  return state.counterState.count;
};
```

### Actions Tipadas

```typescript
export enum CounterActionsTypes {
  INCREASE_COUNTER = "INCREASE_COUNTER",
  DECREASE_COUNTER = "DECREASE_COUNTER",
}

export type CounterActions =
  | Action<CounterActionsTypes.INCREASE_COUNTER>
  | Action<CounterActionsTypes.DECREASE_COUNTER>;
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Compilación
npm run build

# Vista previa
npm run preview
```

## 📚 Referencias y Recursos

### Documentación Oficial

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Patrones y Mejores Prácticas

- [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
- [TypeScript Redux Guide](https://redux.js.org/recipes/usage-with-typescript)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

## 🔧 Tecnologías Utilizadas

- Redux 5.0.1
- TypeScript 5.7+
- Vite 6.2.0 (bundler)

## 🏗️ Arquitectura Redux

### Flujo de Datos

1. **Actions**: Describen cambios en la aplicación
2. **Reducers**: Procesan las acciones y actualizan el estado
3. **Store**: Mantiene el estado global
4. **Selectors**: Extraen datos del estado

### Patrones Implementados

- Action Types constantes
- Action Creators tipados
- Selectors para acceso al estado
- Estado inmutable
- Reducers puros
