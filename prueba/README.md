# TV Maze Explorer

Aplicación de evaluación desarrollada con React Native y Expo. Presenta primero la información del estudiante y después un catálogo de series obtenido desde la API pública de [TVMaze](https://api.tvmaze.com/shows).

## Requisitos implementados

- Pantalla inicial con nombre, carnet, sección y grupo.
- Navegación de pila mediante Expo Router (basado en React Navigation).
- Consumo de `https://api.tvmaze.com/shows` desde el custom hook `src/hooks/useShows.ts`.
- Componentes reutilizables en `src/components/`.
- Estado de carga, manejo de error y actualización deslizando hacia abajo.
- Ícono y splash personalizados con una esfera púrpura inspirada en una master ball.

## Personalización antes de entregar

Edita `src/data/student.ts` y sustituye los tres valores de ejemplo por tus datos reales. Si la institución requiere otro identificador Android, cambia `android.package` en `app.json`.

## Ejecutar

```bash
npm run android
```

También puedes iniciar Expo con `npm start` y escanear el código QR desde Expo Go.

## Generar el APK

El perfil `preview` de `eas.json` genera un APK instalable. Inicia sesión en Expo y ejecuta:

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

Cuando EAS termine, mostrará un enlace para descargar el APK.
