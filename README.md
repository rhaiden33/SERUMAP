# Serumap

Aplicación web progresiva (PWA) para explorar información de plazas SERUMS.

## Ejecutar localmente

Abre `index.html` en un navegador. Para probar la instalación PWA y el modo sin conexión, sirve la carpeta mediante HTTPS o un servidor local (por ejemplo, Live Server).

## Publicar con GitHub Pages

1. Entra a **Settings → Pages** en este repositorio.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige la rama **main** y la carpeta **/(root)**; guarda los cambios.
4. Cuando GitHub Pages esté habilitado y la publicación haya finalizado correctamente, la URL pública esperada es:

   https://rhaiden33.github.io/SERUMAP/

   El estado actual del despliegue debe confirmarse en **Settings → Pages** y en la última ejecución de **Actions → pages-build-deployment**; no se debe asumir que la URL ya está publicada.

## Funciones

- Mapa esquemático con las 25 regiones seleccionables; las cifras regionales solo están cargadas para 11 regiones del prototipo. Los colores ZAF/ZE son anotaciones manuales por región, no una clasificación oficial regional.
- Distribución de plazas por carrera.
- Calculadora referencial de ingresos.
- Reseñas guardadas localmente en el navegador.
- Diseño adaptable, tema oscuro y soporte PWA básico para instalación y caché sin conexión.

## Importante

Serumap es un prototipo independiente y no es una aplicación oficial del Ministerio de Salud.

- **2026-I:** el total de 7 489 plazas remuneradas y su distribución por carrera coinciden con la comunicación oficial del Minsa del 1 de mayo de 2026.
- **2025-II:** el valor de 3 229 mostrado en el prototipo es heredado y no se ha recalculado desde el archivo XLSX oficial. No debe tratarse como un total verificado ni compararse con 2026-I.
- **Datos regionales:** las 11 cifras por departamento son datos heredados del prototipo 2026-I y no se han conciliado individualmente con el anexo oficial. No deben usarse para elegir una plaza.
- **Colores del mapa:** se asignan manualmente con los bonos ZAF y ZE marcados en la calculadora. No representan el estado oficial de toda una región: las bonificaciones corresponden a establecimientos/plazas y una misma región puede contener varias categorías.
- **Muestra de Cusco 2026-II:** Huaran (Medicina, Calca/Calca, ZAF no, ZE no), Quesquento (Obstetricia, Calca/Yanatile, ZAF sí, ZE no), Omaya (Medicina, La Convención/Pichari, ZAF no, ZE sí) y Nuevo Mundo (Medicina, La Convención/Megantoni, ZAF sí, ZE sí). Son cuatro registros ilustrativos, no un total regional; se contrastaron con el anexo oficial, pp. 10, 70 y 93.
- **2026-II:** la oferta remunerada fue publicada el 19 de agosto de 2026 por GERESA Loreto. El anexo contiene los indicadores ZAF y ZE por establecimiento; Serumap todavía no ha agregado todas las filas y, por eso, no muestra un total 2026-II.
- **Calculadora:** la base y los bonos son importes referenciales del prototipo; no están validados como remuneración vigente 2026-II. Confirma siempre las condiciones con la institución ofertante.

Las reseñas de esta versión se almacenan únicamente en el navegador mediante `localStorage`; no se comparten ni sincronizan entre usuarios y pueden perderse si se borran los datos del navegador. Para reseñas colaborativas se necesitaría un backend con autenticación y base de datos; esa integración no existe en esta versión.

## Fuentes oficiales para verificar convocatorias

- [MINSA: oferta de plazas SERUMS remuneradas y equivalentes 2025-II (1 de setiembre de 2025)](https://www.gob.pe/institucion/minsa/informes-publicaciones/7103969-oferta-de-plazas-serums-remuneradas-y-equivalentes-2025-ii)
- [MINSA: oferta de plazas remuneradas y equivalentes SERUMS 2026-I (20 de abril de 2026)](https://www.gob.pe/institucion/minsa/informes-publicaciones/8040039-oferta-de-plazas-serums-remuneradas-y-equivalentes-2026-i)
- [MINSA: adjudicación SERUMS 2026-I, total y distribución de 7 489 plazas remuneradas por carrera (1 de mayo de 2026)](https://www.gob.pe/institucion/minsa/noticias/1386440-minsa-inicio-la-adjudicacion-de-plazas-remuneradas-serums-2026-i)
- [GERESA Loreto: publicaciones y documentos SERUMS, incluido el proceso 2026-II](https://www.geresaloreto.gob.pe/Serums.php)
- [GERESA Loreto: oferta de plazas remuneradas SERUMS 2026-II (PDF, publicado el 19 de agosto de 2026)](https://mail.geresaloreto.gob.pe/PanelAdministrativo/uploads/serums/serums_uid4_20260819173210_148dba97aa.pdf)
- [MINSA: convocatoria del proceso de evaluación SERUMS 2026-II](https://www.gob.pe/institucion/minsa/informes-publicaciones/8389144-convocatoria-del-proceso-de-evaluacion-para-el-serums-2026-ii)

Antes de actualizar cifras, descarga y revisa el anexo oficial del proceso y verifica que corresponda a la modalidad (remunerada o equivalente), carrera, institución y fecha.

