# Serumap

Aplicación web progresiva (PWA) para explorar información de plazas SERUMS.

## Ejecutar localmente

Abre `index.html` en un navegador. Para probar la instalación PWA y el modo sin conexión, sirve la carpeta mediante HTTPS o un servidor local (por ejemplo, Live Server).

## Publicar con GitHub Pages

1. Entra a **Settings → Pages** en este repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama **main** y la carpeta **/(root)**; guarda los cambios.
4. La publicación no está activada todavía (el repositorio actualmente informa que GitHub Pages está deshabilitado). Cuando actives Pages y termine el despliegue, la aplicación debería estar disponible en:

   https://rhaiden33.github.io/SERUMAP/

## Funciones

- Mapa esquemático con selección de regiones.
- Distribución de plazas por carrera.
- Calculadora referencial de ingresos.
- Reseñas guardadas localmente en el navegador.
- Diseño adaptable, tema oscuro y soporte PWA básico para instalación y caché sin conexión.

## Importante

Serumap es un prototipo independiente y no es una aplicación oficial del Ministerio de Salud. Los datos de plazas corresponden al prototipo del proceso 2026-I y no deben interpretarse como oferta vigente 2026-II. La calculadora conserva importes de referencia del prototipo que no han sido validados para el proceso actual; no debe usarse para estimar una remuneración real.

Las reseñas de esta versión se almacenan en el dispositivo mediante `localStorage`; no se comparten ni sincronizan entre usuarios. Para reseñas colaborativas se necesita integrar un backend propio con autenticación, base de datos y almacenamiento de imágenes.

## Fuentes oficiales para verificar convocatorias

- [MINSA: oferta de plazas remuneradas y equivalentes SERUMS 2026-I](https://www.gob.pe/institucion/minsa/informes-publicaciones/8040039-oferta-de-plazas-serums-remuneradas-y-equivalentes-2026-i)
- [GERESA Loreto: publicaciones y documentos SERUMS, incluido el proceso 2026-II](https://www.geresaloreto.gob.pe/Serums.php)
- [Oferta oficial de plazas remuneradas SERUMS 2026-II (PDF, 130 páginas)](https://www.geresaloreto.gob.pe/PanelAdministrativo/uploads/serums/serums_uid4_20260819173210_148dba97aa.pdf)
- [MINSA: convocatoria del proceso de evaluación SERUMS 2026-II](https://www.gob.pe/institucion/minsa/informes-publicaciones/8389144-convocatoria-del-proceso-de-evaluacion-para-el-serums-2026-ii)

Antes de actualizar cifras, descarga y revisa el anexo oficial del proceso y verifica que corresponda a la modalidad (remunerada o equivalente), carrera, institución y fecha.

