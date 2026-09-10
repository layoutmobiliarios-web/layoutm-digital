# LAYOUTM Digital

HOME corporativo y sistema de contacto digital de LAYOUTM, preparados para acceso web y desde códigos QR o dispositivos NFC.

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
│   ├── brand/
│   │   └── README.md
│   └── js/
│       └── main.js
├── contact/
│   └── LAYOUTM.vcf
├── index.html
└── README.md
```

- `index.html`: estructura semántica del HOME, navegación, contenido y metadatos.
- `assets/css/styles.css`: identidad visual, maquetación responsive, estados de interacción y transición de entrada.
- `assets/js/main.js`: menú móvil, control del brand reveal y generación dinámica de la vCard corporativa.
- `assets/brand/README.md`: condiciones para incorporar los activos gráficos oficiales sin reconstruirlos.
- `contact/LAYOUTM.vcf`: copia física de respaldo del contacto corporativo aprobado.
- `.github/workflows/pages.yml`: flujo automático de publicación en GitHub Pages.
- `README.md`: documentación operativa del repositorio.

La arquitectura principal distingue `Proyectos` y `Colecciones`. El HOME explica ambos universos sin inventar fichas, proyectos, productos o imágenes. Sus futuras vistas se publicarán únicamente con contenido real aprobado.

## Identidad oficial y brand reveal

Las versiones principal y extendida del logo LAYOUTM son las referencias visuales oficiales. Los archivos gráficos originales todavía deben incorporarse al repositorio; no deben reconstruirse ni reinterpretarse.

El contenedor y el comportamiento del brand reveal están preparados en `index.html`, `assets/css/styles.css` y `assets/js/main.js`, pero permanecen inactivos mientras `data-brand-logo-src` esté vacío. Al recibir el activo oficial se debe:

1. Guardar el archivo original aprobado dentro de `assets/brand/` sin alterar su composición.
2. Registrar su ruta en `data-brand-logo-src`.
3. Verificar la transición, la carga simultánea del HOME y `prefers-reduced-motion` antes de aprobar la publicación.

El reveal dura aproximadamente un segundo y no sustituye ni bloquea la carga real de la página. Con reducción de movimiento activada se omite.

## Funciones protegidas

- Guardar el contacto corporativo LAYOUTM mediante vCard generada en el navegador.
- Acceso a WhatsApp con mensaje predefinido.
- Llamada telefónica.
- Correo electrónico.
- Diseño responsive para celular y escritorio.
- Identidad visual oscura y recurso gráfico preexistente, sin alterar su geometría. Su sustitución por los activos oficiales queda pendiente de recibir los archivos originales.

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
