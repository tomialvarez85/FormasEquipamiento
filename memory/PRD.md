# PRD — Formas Equipamiento (Landing Page)

## Problema original
Landing page moderna y conversion-optimizada para "Formas Equipamiento" (fabricante de muebles a medida). Estilo `neon-dark-kit` (dark + verde neón). 100% responsive.

## Idioma del usuario
Español (responder siempre en español).

## Arquitectura actual
- Frontend: React + Vite (puerto 3000).
- `/app/backend/server.py`: stub mínimo de FastAPI SOLO para health (no agregar lógica; necesario para readiness probe de K8s en preview).
- Sin base de datos. Sin auth. Formulario de contacto se envía vía WhatsApp deep-link.

## Implementado
- 2026-02 — Sección "Nuestros Trabajos" (portafolio) con filtros por categoría (Todos / Cocinas / Dormitorios / Living / Oficina), grilla responsive 3 cols (desktop) / 2 (tablet) / 1 (móvil), placeholders para subir imágenes manualmente, hover con etiqueta de categoría animada.
- Hero, Servicios, Galería original (reemplazada por Portafolio), Proceso, Testimonios, Contacto, Footer.
- Menú móvil hamburguesa, WhatsApp flotante, fondo animado madera/muebles.
- Migración CRA → Vite, allowedHosts incluye `.emergentagent.com` y `.emergentcf.cloud`.

## Archivos clave
- `/app/frontend/src/pages/Home.jsx` — todas las secciones.
- `/app/frontend/src/pages/home.css` — estilos (busque `.portfolio-*` para la nueva sección).
- `/app/frontend/src/mock.js` — exporta `portfolioItems` y `portfolioCategories`.
- `/app/frontend/vite.config.js` — allowedHosts.
- `/app/backend/server.py` — health stub (NO eliminar; el preview de K8s falla con 502 sin él).

## Cómo agregar imágenes reales al portafolio
Editar `/app/frontend/src/mock.js` → `portfolioItems`: reemplazar `image: null` por la URL/ruta de la imagen en el item correspondiente. La categoría ya está asignada en cada item.

## Backlog / P1
- Galería con lightbox al hacer click en un item.
- SEO / meta tags / Open Graph para compartir.
- Sitemap.xml y robots.txt.
- Animaciones de entrada (stagger) en cards de portafolio.

## Backlog / P2
- Blog o sección de novedades.
- Catálogo de productos con filtros avanzados.
- Integración con Google Analytics / Meta Pixel.
