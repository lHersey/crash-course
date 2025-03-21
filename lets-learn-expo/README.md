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
