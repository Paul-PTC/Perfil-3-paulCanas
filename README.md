# TV Maze Explorer

Aplicación móvil desarrollada con React Native y Expo que permite consultar un catálogo de series mediante la API pública de TVMaze.

## Descargar la aplicación

El build para Android está disponible en Expo:

[Ver build y descargar APK](https://expo.dev/accounts/paul-ptc/projects/tv-maze-explorer/builds/c1f845d9-de18-4d78-8bcf-ae3b1f0c3387)

## Funciones

- Muestra la información del estudiante.
- Consulta el catálogo de series de TVMaze.
- Presenta el título, póster, año, canal, género, calificación y descripción de cada serie.
- Permite actualizar el catálogo deslizando hacia abajo.
- Incluye manejo de errores y contenido de respaldo sin conexión.

## Tecnologías

- React Native
- Expo
- TypeScript
- Expo Router
- TVMaze API

## Ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el proyecto:

```bash
npm start
```

Luego puedes abrirlo con Expo Go o con un emulador Android.

## Generar el APK

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

## Autor

Paul Melquisidec Cañas Palacios  
Carnet: 20210103  
Sección: 2A  
Grupo: 2
