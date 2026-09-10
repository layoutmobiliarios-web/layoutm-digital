# LAYOUTM Digital

Tarjeta digital de Luis Miranda Alhuay para LAYOUTM, preparada para acceso desde códigos QR y dispositivos NFC.

## URL pública

https://layoutmobiliarios-web.github.io/layoutm-digital/

> [!WARNING]
> Esta URL está vinculada a códigos QR y dispositivos NFC físicos. No se debe cambiar el nombre del repositorio, la cuenta propietaria, la ruta pública ni la configuración de GitHub Pages sin evaluar previamente el impacto sobre esos elementos.

## Producción y publicación

- La rama de producción es `main`.
- GitHub Actions ejecuta `.github/workflows/pages.yml` con cada actualización de `main`.
- El flujo publica el contenido del repositorio mediante GitHub Pages.
- También puede ejecutarse manualmente desde la sección Actions de GitHub.

Procedimiento básico de publicación:

1. Verificar los cambios y probar localmente la tarjeta.
2. Confirmar que no se incluyan contraseñas, tokens, API keys ni información confidencial.
3. Integrar los cambios aprobados en `main`.
4. Revisar que el flujo **Deploy GitHub Pages** finalice correctamente.
5. Verificar la URL pública, los botones y la descarga del contacto.

## Línea base aprobada

- Commit previo a la Etapa 01: `d6eabc45f4d36484f0cf4cceac60d3c7bc4a8d6b`.
- Rama de restauración: `baseline/etapa-01-pre-cambios-2026-09-09`.

La rama histórica `Main` se conserva sin modificaciones. Es antecesora de `main` y apunta al commit `c8c11ae1b2528de9fc9ef1f762671d6b19f6aabc`, anterior a las últimas actualizaciones de contacto y composición visual.

## Estructura actual

```text
layoutm-digital/
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
├── contact/
│   └── Luis-Miranda-LAYOUTM.vcf
├── index.html
└── README.md
```

- `index.html`: estructura semántica del HOME, contenido, logo SVG y metadatos.
- `assets/css/styles.css`: identidad visual, maquetación responsive y estados de interacción.
- `assets/js/main.js`: menú móvil y generación dinámica de la vCard.
- `contact/Luis-Miranda-LAYOUTM.vcf`: copia física de respaldo del contacto aprobado.
- `.github/workflows/pages.yml`: flujo automático de publicación en GitHub Pages.
- `README.md`: documentación operativa del repositorio.

La sección de proyectos está reservada en la arquitectura, pero no se publica hasta contar con proyectos e imágenes reales aprobadas.

## Funciones protegidas

- Guardar contacto mediante vCard generada en el navegador.
- Acceso a WhatsApp con mensaje predefinido.
- Llamada telefónica.
- Correo electrónico.
- Diseño responsive para celular y escritorio.
- Identidad visual y logo LM+ actuales.

## Recuperación básica

Ante una falla en producción:

1. Confirmar si el error proviene del último despliegue o del código publicado.
2. Comparar `main` con `baseline/etapa-01-pre-cambios-2026-09-09`.
3. Preparar una reversión controlada de los archivos afectados; no reescribir ni eliminar el historial.
4. Revisar la reversión antes de integrarla en `main`.
5. Esperar el despliegue de GitHub Pages y verificar nuevamente la URL pública.

No se debe eliminar la rama `Main`, la rama de restauración ni archivos cuyo propósito no haya sido revisado.

## Seguridad

El sitio es público. No se deben incluir secretos, credenciales ni datos internos en HTML, JavaScript, archivos de configuración o historial de Git.
