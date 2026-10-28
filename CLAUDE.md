# Gral. Juan José Valle 375 — Propiedad única (departamento en alquiler)

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** departamento de 3 ambientes en alquiler. La ficha original no trae descripción (solo repite la dirección); no inventar texto comercial sobre el inmueble.
- **Ubicación:** Gral. Juan José Valle 375, Rawson, Chubut. Sin coordenadas en la ficha: mapa PENDIENTE.
- **Oferta:** Alquiler ARS 680.000 mensual. Superficie total 90 m², 3 ambientes, 2 dormitorios, 1 baño.
- **Estado:** disponible (en alquiler)
- **Contacto específico:** usa el WhatsApp de la firma (`https://wa.me/5492804503151`)
- **Fuente de datos:** https://www.ipropietas.com.ar/listing_details_05/d1c7fdfa-f88c-453a-b0f2-54591ee56d50 (consultada 2026-10-28)
- **Requisitos de alquiler (de la ficha):** DNI y recibo de sueldo de locatario y garante, antigüedad laboral mínima de 1 año, garante no jubilado, canon hasta 30% de los ingresos netos del garante, garante que no sea cónyuge/pareja/conviviente, contrato mínimo de 2 años, actualización por ICL/IPC/CAC trimestral, cuatrimestral o semestral según contrato. Verificar el texto completo en la ficha antes de publicarlo.

## Identidad
- **Marca propia del desarrollo:** no. Usa solo Propietas (azul `#2e3092`, celeste `#27aae1`, Montserrat).
- **Rol de Propietas:** comercializadora (logo en header/footer + pie legal)
- **Paleta / tipografía:** manual de marca; ver DESIGN.md cuando exista

## Técnico
- **Stack:** HTML/CSS/JS estático, sin build (`index.html`, `styles.css`, `main.js`). Montserrat por Google Fonts. Probar con `python3 -m http.server --directory .`
- **Assets:** `assets/logos/` (color, blanco, 1 tinta blanco, negro, símbolo) y `assets/img/foto-01..22.jpeg`. No referenciar `../_shared`.
- **Fotos:** 22 originales de la ficha, ~1,9 MB en total. 17 verticales de 720×1280 y 5 horizontales (02 fachada, 06 patio, 14 patio, 17 patio/galería, 19 patio). El orden de los archivos NO es el de la galería original. Fotos de celular, unidad vacía; resolución baja para un hero a pantalla completa en escritorio.
- **Lo que se ve en las fotos (confirmado por el usuario o visible):** unidad en planta baja con frente enrejado; patio de uso exclusivo con césped y pérgola; pared de ladrillo visto; pisos símil cerámico; cocina con cocina a gas y campana; baño; calefactor a gas. Sin muebles.
- **Deploy:** PENDIENTE — publicar solo con confirmación del usuario

## Estado
- Sitio construido y revisado en escritorio y en celular (390 px, sin desborde). Movimiento: apertura del patio y título por líneas al cargar, parallax del hero y apertura de la foto del patio con `animation-timeline` (solo Chrome/Edge/Safari recientes; en otros queda estático), reveals al scroll, botón fijo en celular y galería con progreso. Todo respeta `prefers-reduced-motion`.
- Sin DESIGN.md todavía (`impeccable document`).

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- `og:image` y `og:url` con URL absoluta cuando haya dominio (hoy `assets/img/og.jpg`, relativa)
- Probar en celular real (iOS Safari) antes de publicar
- Depósito y comisión: no están en la página hasta tener las condiciones
- Descripción comercial del inmueble (la ficha no la tiene) y qué ambientes/estado muestra cada foto
- Antigüedad, orientación, pet friendly, cochera, expensas: la ficha no los informa
- Coordenadas o referencia para el mapa
- Confirmar con el corredor si el precio ARS 680.000 está vigente y si hay depósito o comisión
- Fotos de mayor resolución si se quiere hero a pantalla completa
- Validar el pie legal y dominio/deploy
