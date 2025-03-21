# Guía de Aprendizaje de React Native & Expo 📱

## Conceptos Fundamentales

### React Native vs React Web

- **Motor de Renderizado**:

  - React Web → Elementos DOM (div, span, etc.)
  - React Native → Componentes Nativos (View, Text, etc.)
  - Las diferencias principales están en la capa de renderizado, donde RN traduce a componentes nativos reales

- **Estilos**:

  - React Web → CSS, CSS Modules, Styled Components
  - React Native → API StyleSheet, sin soporte CSS
  - Flexbox es el modelo de layout predeterminado
  - Propiedades en camelCase (backgroundColor en lugar de background-color)
  - No hay herencia de estilos entre componentes

- **Navegación**:
  - React Web → React Router, historial del navegador
  - React Native → React Navigation, navegación por pila
  - Gestos nativos y animaciones de transición incluidas

### Framework Expo

Expo es un framework y plataforma para aplicaciones React universales que simplifica el desarrollo.

#### Ventajas:

1. Configuración Sencilla

   - No requiere Android Studio ni Xcode
   - Inicio rápido con `expo init`
   - CLI intuitiva y documentación extensa

2. Herramientas de Desarrollo

   - Recarga en vivo del código
   - Aplicación Expo Go para pruebas
   - Depuración sencilla
   - QR Code para pruebas en dispositivos físicos
   - Herramientas de desarrollo visuales

3. Soluciones Pre-construidas
   - Acceso al sistema de archivos
   - Cámara y biblioteca multimedia
   - Notificaciones push
   - Actualizaciones over-the-air (OTA)
   - Geolocalización
   - APIs de sensores del dispositivo
   - Autenticación biométrica

#### Limitaciones:

1. Soporte limitado de módulos nativos
2. Mayor tamaño de la aplicación
3. Código nativo personalizado requiere expulsar (eject)
4. Menor control sobre configuraciones nativas
5. Dependencia del ecosistema Expo

### Componentes Principales de React Native

1. **Componentes Base**:

   - `View` → Contenedor básico (equivalente a div)
   - `Text` → Mostrar texto (único componente que puede contener strings)
   - `Image` → Imágenes (locales y remotas)
   - `ScrollView` → Contenedor con scroll
   - `FlatList` → Lista optimizada
   - `TouchableOpacity/Pressable` → Áreas presionables
   - `TextInput` → Entrada de texto

2. **Layout y Flexbox**:

   - Basado en Flexbox pero con diferencias
   - No hay float ni grid
   - flexDirection: 'column' por defecto
   - Dimensiones en unidades independientes de densidad
   - Las dimensiones son números sin unidades

3. **Específicos de Plataforma**:
   - Platform.select() para código condicional
   - Extensiones .ios.js y .android.js
   - Componentes específicos de plataforma
   - APIs específicas del sistema operativo

### Consideraciones de Rendimiento

1. **Listas y Scroll**:

   - Usar FlatList para listas largas
   - Evitar ScrollView para contenido extenso
   - Implementar paginación cuando sea posible
   - Virtualización de elementos
   - Optimización de renderizado

2. **Imágenes**:

   - Usar tamaños apropiados de imágenes
   - Implementar carga diferida
   - Cachear imágenes cuando sea necesario
   - Precargar imágenes críticas
   - Compresión y optimización

3. **Animaciones**:
   - Usar Animated API
   - Evitar animaciones basadas en JavaScript
   - Usar el driver nativo cuando sea posible
   - Optimizar fotogramas por segundo
   - Minimizar operaciones en el bridge JS-Nativo

### Mejores Prácticas de Desarrollo

1. **Gestión de Estado**:

   - Usar Context para estado global
   - Redux/MobX para apps complejas
   - AsyncStorage para persistencia
   - Recoil para estado atómico
   - Zustand para estado simple

2. **Estilos y Temas**:

   - Crear objetos StyleSheet reutilizables
   - Usar proveedores de temas
   - Diseño responsivo
   - Organización por componentes
   - Sistema de diseño consistente

3. **Pruebas**:

   - Jest para pruebas unitarias
   - React Native Testing Library
   - Detox para pruebas E2E
   - Pruebas de integración
   - Pruebas de rendimiento

4. **Arquitectura y Organización**:
   - Estructura de carpetas clara
   - Separación de responsabilidades
   - Modularización
   - Control de versiones
   - CI/CD específico para móviles

# 🚀 React Native: Arquitectura y Funcionamiento Interno

## 📱 Arquitectura Tradicional (Bridge)

### JavaScript Bridge

El puente (Bridge) es el componente central que permite la comunicación entre JavaScript y el código nativo:

- **Funcionamiento**:
  - Serializa datos JS a JSON
  - Comunica de forma asíncrona
  - Opera en un hilo separado
  - Batch de actualizaciones

### Limitaciones del Bridge

- Serialización/deserialización costosa
- Comunicación asíncrona obligatoria
- Overhead en memoria
- Latencia en operaciones

## 🏗️ Nueva Arquitectura

### JavaScript Interface (JSI)

JSI permite la comunicación directa entre JavaScript y C++:

- **Ventajas**:
  - Sin serialización
  - Llamadas síncronas
  - Referencias directas a objetos nativos
  - Menor latencia

### Turbo Modules

Evolución de los módulos nativos:

- **Características**:
  - Carga bajo demanda
  - Tipado fuerte con CodeGen
  - Mejor rendimiento
  - Integración con JSI

```typescript
// Ejemplo de definición de Turbo Module
import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";

export interface Spec extends TurboModule {
  multiply(a: number, b: number): Promise<number>;
}
```

### Fabric (Nuevo Motor de Renderizado)

Sistema de renderizado unificado:

- **Componentes clave**:
  - Shadow Tree en C++
  - Reconciliación más eficiente
  - Priorización de actualizaciones
  - Mejor integración con gestos

## 🎨 Sistema de Layout

### Yoga Engine

Motor de layout basado en Flexbox:

- **Características**:
  - Implementado en C++
  - Cross-platform
  - Alto rendimiento
  - Compatible con Flexbox web

```jsx
// Ejemplo de layout con Flexbox
<View
  style={{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <Component1 />
  <Component2 />
</View>
```

### Diferencias con CSS Web

- Flexbox por defecto
- No Grid system
- Unidades sin px
- Subconjunto de propiedades

## 🔄 Ciclo de Renderizado

1. **JavaScript Thread**:

   - Ejecuta lógica de React
   - Genera Virtual DOM
   - Maneja eventos

2. **Native Thread**:

   - Renderiza UI nativa
   - Maneja gestos
   - Ejecuta animaciones

3. **Shadow Thread**:
   - Cálculos de layout
   - Yoga engine
   - Preparación de renders

## 🛠️ Módulos Nativos

### Creación de Módulos Nativos

```java
// Ejemplo Android
@ReactModule(name = "CustomModule")
public class CustomModule extends ReactContextBaseJavaModule {
  @ReactMethod
  public void customMethod(String param, Promise promise) {
    // Implementación nativa
  }
}
```

### Vinculación con JavaScript

```javascript
// Uso en JS
import { NativeModules } from "react-native";
const { CustomModule } = NativeModules;
```

# 📱 Expo: Plataforma de Desarrollo

## 🔄 Funcionamiento de Expo

### Expo Go

App de desarrollo y testing:

- Escaneo de QR para testing
- Hot Reload instantáneo
- Acceso a APIs de dispositivo
- Depuración en tiempo real

### Expo CLI

Herramientas de línea de comandos:

```bash
# Crear nuevo proyecto
npx create-expo-app@latest test-app --template blank-typescript
```

## 🚀 Actualizaciones Over-the-Air (OTA)

### Funcionamiento

1. Publicación de bundle JS
2. Distribución via CDN
3. Actualización automática
4. Rollback disponible

```javascript
// Ejemplo de configuración OTA
{
  "expo": {
    "updates": {
      "enabled": true,
      "fallbackToCacheTimeout": 0,
      "url": "https://exp.host/@username/app-name"
    }
  }
}
```

## 🛠️ EAS (Expo Application Services)

### EAS Build

Compilación en la nube:

```bash
# Configuración
eas build:configure

# Construir para iOS/Android
eas build --platform ios
eas build --platform android
```

### EAS Submit

Publicación automatizada:

```bash
# Enviar a App Store
eas submit --platform ios

# Enviar a Play Store
eas submit --platform android
```

### EAS Update

Gestión de actualizaciones:

```bash
# Publicar actualización
eas update --branch production --message "Nueva versión"
```

## 🔧 expo-dev-client

### Características

- Módulos nativos personalizados
- Debugging avanzado
- Herramientas de desarrollo

```bash
# Instalación
expo install expo-dev-client

# Configuración
eas build --profile development
```

## 🏗️ Arquitectura de Expo

### Managed Workflow

- Sin código nativo expuesto
- Actualizaciones OTA
- APIs preconfiguradas

### Bare Workflow

- Acceso a código nativo
- Módulos personalizados
- Mayor control

## 📦 Optimizaciones

### Asset Bundling

```javascript
// Precargar assets
import { Asset } from "expo-asset";
await Asset.loadAsync([require("./assets/image.png")]);
```

### App Loading

```javascript
import AppLoading from "expo-app-loading";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return <MainApp />;
}
```

## 🔐 Seguridad

### Expo Security

- Certificados automáticos
- HTTPS por defecto
- Actualizaciones firmadas

### Configuración de Seguridad

```json
{
  "expo": {
    "android": {
      "permissions": ["CAMERA", "LOCATION"],
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_API_KEY"
        }
      }
    }
  }
}
```

## 📊 Monitorización

### Expo Diagnostics

```bash
# Verificar configuración
expo diagnostics

# Análisis de bundle
expo-optimize
```

### Performance Monitoring

- Metro bundler stats
- Bundle size analysis
- Runtime performance

## 🔄 Ciclo de Desarrollo

1. **Desarrollo Local**

   - Expo Go
   - Hot Reload
   - Device debugging

2. **Testing**

   - Simuladores
   - Dispositivos físicos
   - Testing groups

3. **Distribución**
   - EAS Build
   - OTA Updates
   - Store submission

## 📚 Referencias

- [React Native Architecture](https://reactnative.dev/architecture/overview)
- [Expo Documentation](https://docs.expo.dev/)
- [EAS Documentation](https://docs.expo.dev/eas/)
- [React Native Internals](https://reactnative.dev/docs/next/architecture-overview)
