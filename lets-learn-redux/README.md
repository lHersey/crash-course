# Redux: Gestión de Estado Global 🔄

## 📚 Estructura del Proyecto

Este proyecto demuestra los conceptos fundamentales de Redux y su implementación con TypeScript.

### 🗂️ Archivos Principales

- `basic.js` - Conceptos básicos de Redux
- `multiple-reducers.js` - Manejo de estado complejo
- `redux-typescript.ts` - Implementación con TypeScript

## 🔍 Conceptos Clave

### Store

```javascript
const store = createStore(reducer);
```

### Actions

```typescript
type Action = {
  type: string;
  payload?: any;
};
```

### Reducers

```typescript
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
```

## 🏗️ Patrones de Implementación

### Action Creators

```typescript
const addTodo = (text: string) => ({
  type: "ADD_TODO",
  payload: text,
});
```

### Selectors

```typescript
const selectTodos = (state) => state.todos;
```

### Middleware

```typescript
const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};
```

## 🔄 Flujo de Datos en Redux

1. Acción disparada (`dispatch`)
2. Reducer procesa la acción
3. Estado actualizado
4. Suscriptores notificados

## 📚 Referencias

- [Redux Docs](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TypeScript Redux](https://redux.js.org/recipes/usage-with-typescript)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)
