# Portfolio Audit

**Última auditoría:** 2026-09-04  
**URL:** https://gonzalodecastro.github.io/portfolio  
**Pregunta guía:** ¿Aumenta esto la probabilidad de que un reclutador contacte para una entrevista?

## Score actual estimado: 7.5/10

| Dimensión | Score | Notas |
|-----------|-------|-------|
| Contenido | 8/10 | 5 SaaS en producción + FIG Projects; About alineado |
| Estructura | 7/10 | Projects separados: Production products vs Client websites |
| UX | 7/10 | Cards con intro live; delay de animación acotado |
| Credibilidad | 7/10 | Links a intros reales de Platform; PresuFlow ya no apunta a Vercel legacy |
| Profundidad técnica | 7/10 | Stack TypeScript/PostgreSQL/Docker visible en tags |
| Appeal reclutador | 8/10 | Primeros 6 cards = productos E2E en producción |
| SEO | 5/10 | Meta actualizada con SaaS/productos; falta OG image real |
| Consistencia | 7/10 | Portfolio refleja Platform; CV aún no lista estos productos |

---

## Crítico (implementado 2026-06-11)

- [x] Bug `setACtive` → `setActive` en Navbar
- [x] Bug `motion.dev` → `motion.div` en Hero
- [x] Bug `{styles.paddingX}` → `${styles.paddingX}` en Hero
- [x] Eliminar referencia a "forms below" (no existen)
- [x] Hero recruiter-focused (Italia, Europa, CTA claro)
- [x] About alineado con CV (sin SQL Server; permesso; SEIDOR consultora)
- [x] Nav: Experience, Tech, Contact
- [x] Section IDs para anchor navigation
- [x] Sección Contact (email, LinkedIn, GitHub, disponibilidad)
- [x] SEO meta tags en index.html
- [x] SEIDOR bullets actualizados (consultora, APIs, KPIs)
- [x] Proyectos reordenados (FIG Projects, Presuflow, Event Now primero)
- [x] Works: icono demo vs GitHub separados

## 2026-09-04 — Productos Platform

- [x] Añadir GymFlow, SocioFlow, GsaFlow, Notas de Pedido
- [x] PresuFlow: URL de producción `https://www.platform.figprojects.com/presuflow/intro/` (reemplaza Vercel)
- [x] Screenshots de intros en producción
- [x] Separar Production products vs Client websites
- [x] About menciona los 5 productos SaaS
- [ ] Añadir estos productos al CV (Selected Projects)
- [ ] LinkedIn Featured: links a intros Platform

## Alto — pendiente

- [ ] Añadir `github_link` real por proyecto donde exista repo público
- [ ] Páginas de detalle o modal por proyecto (arquitectura, stack, rol)
- [ ] Habilitar Feedbacks solo con testimonios reales (Federico = placeholder joke)
- [ ] Añadir AI/MCP skills a Tech o About (SEIDOR)
- [ ] CV descargable desde portfolio (PDF EU)
- [ ] `aria-label` y alt text en Tech icons
- [ ] Scroll-spy en Navbar para sección activa
- [ ] Open Graph image (portfolio.png o screenshot)
- [ ] Analytics (opcional) para medir conversión
- [ ] Sync CV + LinkedIn con productos Platform

## Medio — pendiente

- [ ] Reducir peso 3D canvas en mobile (performance)
- [ ] Unificar services cards (4 roles → enfocar 2: SWE + SCADA)
- [x] Essentia/Servymac/Cerveza → sección "Client websites" separada de "Software projects"
- [ ] Internacionalización EN/IT toggle
- [ ] Structured data JSON-LD (Person, WebSite)

## Bajo — pendiente

- [ ] Reemplazar logo genérico "My Portfolio"
- [ ] Feedbacks con fotos de recomendadores
- [ ] Blog/case studies link

---

## Mensaje reclutador objetivo (6 segundos)

> Gonzalo De Castro — Software Engineer full-stack (React, Node, PostgreSQL) — based in Italy, authorized to work, available immediately — enterprise experience at SEIDOR + production SaaS (GymFlow, PresuFlow, SocioFlow, GsaFlow, Notas de Pedido).

---

## Historial de auditorías

| Fecha | Cambios | Score |
|-------|---------|-------|
| 2026-06-11 | Auditoría inicial + fixes críticos | 5.5 → ~7/10 estimado post-fix |
| 2026-09-04 | 5 productos Platform + PresuFlow URL prod + split client sites | ~7 → ~7.5/10 |
