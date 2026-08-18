# Instalar el Nexos Design System en una cuenta

Este repo es la fuente de verdad del sistema de diseño de **Nexos Comunicaciones**.
Cada cuenta lo instala una vez y después solo sincroniza.

## Instalación (una vez por cuenta)

1. Crea un **proyecto nuevo** y llámalo `Nexos Design System`.
2. **Conecta este repositorio** al proyecto.
3. Pide: *"convierte este proyecto en un design system usando BRAND-GUIDE.md como guía de marca"*.
   Es importante nombrar el archivo: `BRAND-GUIDE.md` ya contiene todas las reglas
   (colores, tipografía, layout, iconografía, reglas de copy) y evita que se reinterpreten
   los fundamentos desde cero.
4. Revisa que carguen bien: fuentes Aptos, los dos logos, los 435 íconos y las specimen
   cards de `guidelines/`.
5. Adjunta el design system a cualquier proyecto de esa cuenta.

## Actualizar

Los cambios se hacen **en este repo**, nunca en una cuenta suelta:

1. Commit al repo (tokens, assets, componentes o `BRAND-GUIDE.md`).
2. En cada cuenta, pide sincronizar el proyecto con el repo.
3. Vuelve a compilar el design system en esa cuenta.

Así todas las cuentas convergen a la misma versión en vez de divergir.

## Estructura

| Ruta | Contenido |
|---|---|
| `BRAND-GUIDE.md` | **La guía de marca completa. Fuente de verdad.** |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `fonts.css` |
| `styles.css` | entry point que importa todos los tokens |
| `assets/fonts/` | Aptos y Aptos Display (.ttf) |
| `assets/logo/` | logo oscuro (fondo claro) y blanco (fondo azul/oscuro) |
| `assets/icons/` | 435 PNG Material Symbols en azul `#1766FF`, outline + fill |
| `assets/photos/` | fotografías de marca |
| `components/core/` | Button, Card, IconCircle, ProcessSteps, Breadcrumb, Stat |
| `guidelines/` | specimen cards de fundamentos |
| `templates/nexos-slides/` | layouts de slide del deck real |

## Qué NO está en el repo (a propósito)

- **`_ds_bundle.js` y `_ds_manifest.json`** — artefactos compilados por cuenta. Se regeneran
  solos al crear el design system; versionarlos solo genera conflictos. Están en `.gitignore`.
- **`uploads/`** — material fuente original (el .pptx de referencia, el paquete de fuentes sin
  procesar). Todo lo que se usa ya está procesado en `assets/`. Si necesitas la provenance
  completa, pídela aparte.

## Pendientes conocidos

- Faltan pesos de Aptos: Light, SemiBold, ExtraBold y Aptos Display Italic.
- `templates/nexos-slides/` está reconstruido desde un deck real de 19 láminas. Si aparecen
  los `.potx` oficiales (`Plantilla Nexos_2025.potx`, `Blank.potx`), conviene revisar el
  template contra ellos.
