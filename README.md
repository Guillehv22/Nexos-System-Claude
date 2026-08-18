# Nexos Design System

Sistema de diseño de marca de **Nexos Comunicaciones** — consultora estratégica chilena de
comunicación, asuntos públicos y gestión de permisos.

Fuente única para producir presentaciones, reportes, slides y documentos con identidad
consistente, en cualquier cuenta.

- **Instalar en una cuenta:** ver [INSTALL.md](INSTALL.md)
- **Reglas de marca (fuente de verdad):** ver [BRAND-GUIDE.md](BRAND-GUIDE.md)

## Fundamentos en una línea

- **Color:** azul eléctrico `#1766FF` dominante · azul claro `#A6CAEC` puntual · fondos gris
  claro `#F3F4F6`, blanco u oscuro `#171717`. Verde/amarillo/rojo solo como acento de estado.
- **Tipografía:** Aptos Display para títulos y destacados · Aptos para párrafos. Nunca una tercera.
- **Layout:** título arriba a la izquierda, un solo color, nunca azul. Contenido desde y≈140px.
- **Sin:** sombras, gradientes decorativos, emoji, barras azules decorativas, SVG dibujados a mano.
- **Íconos:** solo `assets/icons/` (Material Symbols, 435 PNG). Outline por defecto.

## Estructura

```
BRAND-GUIDE.md        guía de marca completa
tokens/               colores, tipografía, espaciado, @font-face
styles.css            entry point de estilos
assets/               fonts · logo · icons (435) · photos
components/core/      Button, Card, IconCircle, ProcessSteps, Breadcrumb, Stat
guidelines/           specimen cards de fundamentos
templates/            layouts de slide
```

## Contribuir

Los cambios se hacen acá, no en una cuenta suelta. Toca `tokens/` o `components/core/` para
código, y `BRAND-GUIDE.md` cuando cambie una regla de marca — las dos cosas deben quedar
consistentes en el mismo commit.
