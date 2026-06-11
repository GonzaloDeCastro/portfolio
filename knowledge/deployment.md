# GitHub Pages Deployment

**Última actualización:** 2026-06-11

## URL en producción

https://gonzalodecastro.github.io/portfolio/

## Métodos de deploy

### 1. GitHub Actions (recomendado)

Workflow: `.github/workflows/deploy.yml`

- **Trigger:** push a `main` o ejecución manual (`workflow_dispatch`)
- **Proceso:** `npm ci` → `npm run build` → artifact `dist/` → GitHub Pages

**Requisito en GitHub:** Settings → Pages → Source = **GitHub Actions**

### 2. Rama `gh-pages` (fallback manual)

```bash
npm run build
npx gh-pages -d dist
```

Script en `package.json`: `predeploy` + `deploy` con paquete `gh-pages`.

**Requisito en GitHub:** Settings → Pages → Source = **Deploy from branch** → `gh-pages` / `/ (root)`

## Configuración Vite

`vite.config.js`:

```js
base: "/portfolio/",
```

Obligatorio para project sites (`username.github.io/repo-name/`). Usar ruta relativa `/portfolio/`, no URL absoluta.

## Problemas resueltos (2026-06-11)

| Problema | Causa | Solución |
|----------|-------|----------|
| CI nunca ejecutaba | Workflow en `.github/deploy.yml` (ruta inválida) | Movido a `.github/workflows/deploy.yml` |
| `base` en Vite con URL absoluta | Config legacy `https://gonzalodecastro.github.io/portfolio` | Cambiado a `base: "/portfolio/"` |
| OG image 404 | `portfolio.png` solo en raíz del repo | Copiado a `public/portfolio.png` (se incluye en build) |

## Historial de deploys

| Fecha | Método | Commit | Notas |
|-------|--------|--------|-------|
| 2026-06-11 | `npx gh-pages -d dist` | local build | Publicado a rama `gh-pages` |
| 2026-06-11 | `git push origin main` | `6216cd9` | Dispara GitHub Actions workflow |

## Checklist post-deploy

- [x] https://gonzalodecastro.github.io/portfolio/ en línea (título SEO actualizado)
- [ ] Verificar navegación About / Experience / Tech / Projects / Contact en navegador
- [ ] Verificar GitHub Action "Deploy Vite app to GitHub Pages" en verde (Actions tab)

**Nota:** Si Pages usa rama `gh-pages`, el deploy manual ya publicó los cambios. Si Pages usa GitHub Actions, el push a `main` activará el workflow automáticamente.

## Comandos locales

```bash
npm run dev      # desarrollo
npm run build    # build producción → dist/
npm run preview  # preview local del build
```
