# Portfolio Audit

**Última auditoría:** 2026-06-11  
**URL:** https://gonzalodecastro.github.io/portfolio  
**Pregunta guía:** ¿Aumenta esto la probabilidad de que un reclutador contacte para una entrevista?

## Score actual estimado: 5.5/10

| Dimensión | Score | Notas |
|-----------|-------|-------|
| Contenido | 6/10 | Buen stack; About desalineado con CV; Hero con texto placeholder |
| Estructura | 5/10 | Experience/Tech sin nav; sin Contact |
| UX | 6/10 | 3D atractivo; bugs JS; iconos engañosos en proyectos |
| Credibilidad | 5/10 | SQL Server no verificado; testimonial joke; "forms below" inexistente |
| Profundidad técnica | 5/10 | Proyectos sin arquitectura ni rol del candidato |
| Appeal reclutador | 5/10 | Falta ubicación IT, disponibilidad, permesso, CTA contacto |
| SEO | 3/10 | Sin meta description, OG tags, keywords |
| Consistencia | 5/10 | CV ≠ portfolio ≠ SEIDOR bullets |

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

## Medio — pendiente

- [ ] Reducir peso 3D canvas en mobile (performance)
- [ ] Unificar services cards (4 roles → enfocar 2: SWE + SCADA)
- [ ] Essentia/Servymac/Cerveza → sección "Client websites" separada de "Software projects"
- [ ] Internacionalización EN/IT toggle
- [ ] Structured data JSON-LD (Person, WebSite)

## Bajo — pendiente

- [ ] Reemplazar logo genérico "My Portfolio"
- [ ] Feedbacks con fotos de recomendadores
- [ ] Blog/case studies link

---

## Mensaje reclutador objetivo (6 segundos)

> Gonzalo De Castro — Software Engineer full-stack (React, Node, PostgreSQL) — based in Italy, authorized to work, available immediately — enterprise experience at SEIDOR + end-to-end products (FIG Projects, Presuflow).

---

## Historial de auditorías

| Fecha | Cambios | Score |
|-------|---------|-------|
| 2026-06-11 | Auditoría inicial + fixes críticos | 5.5 → ~7/10 estimado post-fix |
