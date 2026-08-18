# Nexos Design System

Sistema de diseño de marca para **Nexos Comunicaciones**, consultora estratégica chilena especializada en comunicación, asuntos públicos y gestión de permisos. Este proyecto sirve como referencia de código para herramientas de diseño (Claude Design, Claude Code, linters de diseño) y como base para generar slides, documentos y prototipos con la identidad visual de Nexos.

## Fuentes

- Codebase adjunto (montado vía File System Access, solo lectura): `nexos-design-system/` — `README.md`, `variables.css`, `tokens.json`. Sin código de componentes React (carpeta `src/` vacía); los tokens y patrones de componente descritos en `tokens.json` son la fuente de verdad para colores, tipografía, espaciado y los "componentes" nombrados (iconValidated, card, processArrow, logo).
- `uploads/logo nexos_original.png` y `uploads/logo nexos_blanco.png` — isotipo + wordmark, versión oscura (uso en fondos claros) y blanca (uso en fondos oscuros/azules).
- `uploads/Aptos*.ttf` y `uploads/Microsoft Aptos Fonts/` — familia tipográfica de marca (Aptos + Aptos Display).
- **No se recibieron** `Plantilla Nexos_2025.potx` ni `Blank.potx` mencionados en la solicitud inicial — no llegaron adjuntos al proyecto. Si el usuario los vuelve a subir, se puede extraer layout y estilos reales de slide desde ahí y refinar `templates/`.

## Producto / contexto

Nexos no es un producto de software con UI propia — es una consultora, y este sistema de diseño existe para producir **materiales de comunicación de marca**: presentaciones, reportes, slides y documentos con apariencia consistente. No hay "app" ni "sitio" que recrear como UI kit; en su lugar, este proyecto entrega fundamentos visuales, componentes reutilizables de slide/documento, y templates de presentación.

## Índice

- `styles.css` — entry point, importa todos los tokens y fuentes.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css` (@font-face).
- `assets/fonts/` — Aptos y Aptos Display (.ttf).
- `assets/logo/` — `nexos-logo.png` (oscuro, fondo claro) y `nexos-logo-white.png` (fondo oscuro/azul).
- `assets/icons/` — **set principal de íconos: 435 PNG de Material Symbols** en azul `#1766FF`, wght300, en variante outline (`nombre.png`) y filled (`nombre-fill.png`). Ver la sección Iconography.
- `assets/photos/` — fotografías extraídas de `uploads/Ejemplo Claude.pptx`: `photo-cover.jpeg` y `photo-team-wide.jpeg` (columnas full-height a sangre) y `photo-hand.png`.
- `guidelines/` — specimen cards de fundamentos (colores, tipografía, espaciado, marca) visibles en la pestaña Design System.
- `components/core/` — primitivos reutilizables: **Button, Card, IconCircle, ProcessSteps, Breadcrumb, Stat**.
- `templates/` — templates de slide listos para copiar en proyectos nuevos.
- `thumbnail.html` — miniatura del proyecto.

### Componentes

| Componente | Uso |
|---|---|
| `Button` | CTA en pill, 4 variantes (primary/secondary/ghost/dark). **Adición intencional** — no está en `tokens.json`, se agregó porque decks y documentos suelen necesitar llamados a la acción. |
| `Card` | Tarjeta redondeada (12pt) para comparaciones, opciones o procesos. De `tokens.json.components.card`. |
| `IconCircle` | Marco circular con solo contorno (nunca relleno sólido) para checks o números. De `tokens.json.components.iconValidated`. |
| `ProcessSteps` | Círculos numerados conectados por flechas para flujos de proceso. De `tokens.json.components.processArrow`. |
| `Breadcrumb` | Etiqueta de sección en mayúsculas con tracking amplio. De la regla de jerarquía tipográfica. |
| `Stat` | Número grande en azul con etiqueta de apoyo. De `typography.scale.stat`. |

No se recreó un UI kit de producto porque Nexos no tiene una interfaz de software propia en las fuentes entregadas.

## Content fundamentals (fundamentos de copy)

- **Idioma:** español (Chile), formal pero directo — sin jerga corporativa vacía.
- **Voz:** consultora experta, profesional, sin emojis. Cero uso de emoji en ningún material de marca.
- **Tono:** directo y seguro; frases cortas y afirmativas más que preguntas retóricas largas.
- **Casing:** encabezados de sección (breadcrumbs) siempre en MAYÚSCULAS con letter-spacing amplio (ej. "SECCIÓN · RESULTADOS"). Títulos de slide en mixed-case (frases naturales, no Title Case inglés). Ej: "¿Qué necesita tu organización para operar sin fricción regulatoria?"
- **Datos:** las estadísticas se presentan como el elemento visual dominante (números grandes en azul, 60pt), nunca enterradas en párrafos de texto.
- **Evitar:** listas de bullets extensas — se prefieren cards, columnas o numeración visual de proceso. Nunca un slide de solo texto sin un elemento visual (foto, ícono, dato o gráfico).

## Visual foundations (fundamentos visuales)

- **Color:** azul eléctrico `#1766FF` como dominante, con su variante de azul claro `#A6CAEC` para usos puntuales; fondos alternan entre gris claro (`#F3F4F6`), blanco puro y oscuro premium (`#171717`) para dar variedad y jerarquía de contraste. Verde (`#00D682`), amarillo (`#F7CB56`) y rojo (`#F25755`) son acentos puntuales de positivo, regular y negativo — uso mínimo, nunca como color base de una pieza.
- **Tipografía:** dos cortes de la misma familia, con roles separados. **Aptos Display** se usa para títulos y textos destacados de mayor tamaño (Display 54pt → H1 44pt → H2 36pt → H3 24pt, y el Stat de 60pt). **Aptos** se usa para párrafos de texto y otros párrafos pequeños (Body 14pt, Caption 10pt). Nunca mezclar más de estas dos fuentes en un mismo slide.
- **Espaciado:** márgenes mínimos de 0.5in en slides/páginas; 0.35in entre bloques de contenido; 0.25in para el footer (logo/número de página).
- **Fondos:** sin gradientes decorativos, sin texturas ni patrones repetidos. Fotografías de contexto van a sangre completa (full-bleed) con overlay semitransparente azul; fotos de personas se recortan sobre fondo blanco (PNG sin fondo) cuando se usan aisladas. Nunca bordes, sombras ni marcos en fotografía.
- **Animación:** no hay convenciones documentadas de animación/motion en las fuentes — asumir transiciones simples (fade) si un medio lo requiere; no se documentan bounces ni easings custom.
- **Hover / press:** no documentado explícitamente en las fuentes (son piezas estáticas de slide/documento); los componentes interactivos de este sistema (`Button`) usan un hover simple de opacidad (0.85) como convención razonable, no una regla de marca confirmada.
- **Bordes y sombras:** bordes sutiles de 1px `#E8E8E8` en cards blancas; **sin sombras** en ningún elemento (ni cards, ni texto, ni imágenes) — regla explícita en `avoidPatterns`.
- **Radios:** 12pt en cards; círculos completos (50%) en marcos de ícono.
- **Cards:** esquinas redondeadas (12pt), sin sombra, sin borde de color lateral. Rellenos sólidos: blanco, azul claro suave (`#A6CAEC`), azul sólido, u oscuro de contraste. Además hay dos variantes **sin relleno, solo borde de color**, que al ser transparentes toman el color del fondo y se ven armónicas con él: `outline` (borde y texto azules, para fondos claros) y `outline-inverse` (borde y texto blancos, para fondos azules u oscuros). Úsalas cuando la tarjeta deba pesar menos que una de relleno sólido o cuando varias tarjetas compartan fondo de color.
- **Capsulas vs. protection gradients:** no se usan overlays de degradado para legibilidad de texto sobre foto más allá del "overlay semitransparente azul" ya descrito; no hay cápsulas/pills documentadas salvo el `Button`.
- **Layout:** el título de lámina va **arriba a la izquierda** (x≈47px, y≈48px en un slide de 1280×720), en Aptos Display bold ~25pt, en **un solo color** — negro sobre fondo claro, blanco sobre fondo oscuro. **Ninguna palabra del título va en azul**; el azul se reserva para destacados dentro del cuerpo, no para el título. El contenido arranca en y≈140–200px. Las fotografías de contexto ocupan una columna full-height a la derecha (≈500–523px de ancho, a sangre). **No existe barra decorativa azul** sobre los encabezados — no aparece en ninguna de las 19 láminas del deck real, y el componente fue eliminado del sistema. Tampoco aparece el companion mark "nexos.cl".
- **Transparencia / blur:** el único uso documentado es el overlay azul semitransparente sobre fotografías de contexto — no hay blur (glassmorphism) en ninguna fuente.
- **Imagery — vibe de color:** natural, cálido y profesional — personas reales en entornos laborales, no stock genérico ni blanco y negro ni grano artificial.

### Fuentes — sustitución de italic

Se recibieron Aptos regular, bold, black (+ sus itálicas) y Aptos Display (regular + bold, sin itálica). No se recibió Aptos Display Italic ni pesos intermedios (Light/SemiBold/ExtraBold) — si se necesitan, pedir al usuario que suba el resto del paquete "Microsoft Aptos Fonts" o confirmar que solo estos pesos se usan en marca.

## Iconography (iconografía)

**Usa los íconos que ya están en el proyecto — nunca dibujes SVG a mano ni traigas un set de CDN.**

### `assets/icons/` — set principal (435 archivos)

El único set de íconos de Nexos: **Material Symbols** exportados a 50dp en azul de marca `#1766FF`, peso de trazo **wght300**, GRAD0, opsz48, PNG con fondo transparente.

**Convención de nombres:** `<concepto>.png` es la versión **outline** (por defecto, la que se usa casi siempre) y `<concepto>-fill.png` la versión **filled**. Ej. `campaign.png` / `campaign-fill.png`. Nombres en kebab-case, sin acentos.

**Cómo elegir uno:** los nombres son los de Material Symbols, así que el concepto en inglés es la clave de búsqueda (`campaign` para vocería/difusión, `query_stats` → `query-stats` para análisis, `handshake` para relacionamiento). Las specimen cards del grupo **Icons** en la pestaña Design System muestran el inventario completo agrupado por tema: Comunicación, Análisis y datos, Estrategia, Personas y equipo, Documentos, Territorio y sector, Negocio, y Sistema y estado.

**Reglas de uso:**
- **Outline por defecto.** Reserva `-fill` para estados activos, énfasis puntual o cuando el ícono es muy pequeño y el trazo se pierde. No mezcles outline y filled en una misma fila o grilla.
- **Tamaños:** 24px inline junto a texto · 40px acompañando un titular · 47–54px centrados dentro de los círculos de proceso.
- **Sobre fondo azul u oscuro:** invertir a blanco con `filter:brightness(0) invert(1)`. Nunca recolorear a otro color de marca.
- **No escalar por encima de ~60px** — son PNG de 50dp y pierden nitidez.
- El patrón `IconCircle` los enmarca: glifo dentro de un círculo con **solo contorno, nunca relleno sólido**.

### Prohibiciones

- **No uses emoji** en ningún material de marca.
- No se documentan caracteres Unicode como íconos decorativos.
- Si el ícono que necesitas no existe en `assets/icons/`, **pídelo** — es un export de Material Symbols, se genera en un minuto — en vez de sustituirlo por otro set.

## Intentional additions

- `Button` — no definido en las fuentes; agregado porque decks/documentos necesitan CTAs. Ver tabla de componentes arriba.

## Caveats / pendientes

- `templates/nexos-slides/` está reconstruido a partir de **`uploads/Ejemplo Claude.pptx`** (19 láminas): geometría, posiciones, escala tipográfica, colores y media salen del XML de ese archivo. Los `.potx` mencionados originalmente (`Plantilla Nexos_2025.potx`, `Blank.potx`) nunca llegaron adjuntos; si se suben, conviene revisar el template contra ellos.
- No hay UI kit de producto (Nexos no es un software con pantallas propias en las fuentes dadas).
- El deck real usa **negro puro `#000000`** para texto y **fondo blanco** en las 19 láminas; los tokens conservan `#272525` como texto primario y ofrecen además fondo gris claro y oscuro premium.
- Faltan pesos de Aptos (Light, SemiBold, ExtraBold, Aptos Display Italic) si se llegan a necesitar.
