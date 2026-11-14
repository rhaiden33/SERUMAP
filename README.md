# Serumap

Aplicación web progresiva (PWA) para explorar información de plazas SERUMS.

## Ejecutar localmente

Abre `index.html` en un navegador. Para probar la instalación PWA y el modo sin conexión, sirve la carpeta mediante HTTPS o un servidor local (por ejemplo, Live Server).

## Publicar con GitHub Pages

1. Entra a **Settings → Pages** en este repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama **main** y la carpeta **/(root)**; guarda los cambios.
4. Cuando GitHub termine la publicación, la aplicación estará disponible en:

   https://rhaiden33.github.io/SERUMAP/

## Funciones

- Mapa esquemático con selección de regiones.
- Distribución de plazas por carrera.
- Calculadora referencial de ingresos.
- Reseñas guardadas localmente en el navegador.
- Diseño adaptable, tema oscuro y soporte PWA básico para instalación y caché sin conexión.

## Importante

Serumap es un prototipo independiente y no es una aplicación oficial del Ministerio de Salud. Los datos de plazas e importes son los incluidos en el prototipo original y deben contrastarse con las publicaciones oficiales de cada proceso. La calculadora no garantiza remuneraciones.

Las reseñas de esta versión se almacenan en el dispositivo mediante `localStorage`; no se comparten ni sincronizan entre usuarios. Para reseñas colaborativas se necesita integrar un backend propio con autenticación, base de datos y almacenamiento de imágenes.

