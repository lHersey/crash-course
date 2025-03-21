# TypeScript: JavaScript con Superpoderes 🦸‍♂️

## 📚 Contenido del Proyecto

Este proyecto demuestra las características avanzadas de TypeScript y sus patrones de uso.

### 🗂️ Archivos Principales

- `index.ts` - Guía completa de TypeScript
- `tsconfig.json` - Configuración del compilador

## 🔍 Características Principales

### Tipos Básicos

```typescript
let texto: string = "hola";
let numero: number = 42;
let booleano: boolean = true;
```

### Interfaces

```typescript
interface Usuario {
  nombre: string;
  edad?: number;
  saludar(): string;
}
```

### Genéricos

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```

## 🛠️ Características Avanzadas

### Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

### Mapped Types

```typescript
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Utility Types

```typescript
type PartialUser = Partial<Usuario>;
type ReadonlyUser = Readonly<Usuario>;
```

## 🎯 Patrones de Diseño en TypeScript

### Builder Pattern

```typescript
class UserBuilder {
  private user: Partial<User> = {};

  setName(name: string): this {
    this.user.name = name;
    return this;
  }
}
```

### Factory Pattern

```typescript
interface Animal {
  makeSound(): void;
}

class AnimalFactory {
  createAnimal(type: "dog" | "cat"): Animal {
    // implementation
  }
}
```

## 📚 Referencias

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript Best Practices](https://github.com/typescript-cheatsheets/react)
