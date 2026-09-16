# GYK Studio — Portfolio

> **EN | ES** — Bilingual README. [Español](#-español) | [English](#-english)

![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?logo=astro&logoColor=white)
![Node](https://img.shields.io/badge/Node-%3E%3D22-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🇬🇧 English

### What is this?
**GYK Studio Portfolio** is the official portfolio website of **gykstudio** — a creative studio focused on modern web design and development.

It showcases:
- **Projects** — selected client work and personal experiments
- **Services** — web design, development, branding and UI/UX
- **About** — who is behind gykstudio, stack and workflow
- **Contact** — how to start a project together

### Tech stack
- [Astro](https://astro.build/) — static-first web framework
- HTML + CSS (scoped styles per component, global tokens in `src/styles/global.css`)
- TypeScript for data (`src/data/projects.ts`)
- No heavy frontend framework by default — fast, SEO-friendly, deployable anywhere

### Project structure
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Getting started
```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # build to ./dist/
npm run preview  # preview production build
```

Manage the dev server in background (see `AGENTS.md`):
```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

### Customization
1. Edit `src/data/projects.ts` to add your real projects.
2. Update texts in `src/components/*.astro` (Hero, About, Services, Contact).
3. Change colors/fonts in `src/styles/global.css` (`:root` variables).
4. Update SEO meta in `src/layouts/Layout.astro` and `src/pages/index.astro`.
5. Replace `public/favicon.svg` with your logo.

### Deploy
`npm run build` generates static files in `dist/` — deploy to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any static host.

---

## 🇪🇸 Español

### ¿Qué es esto?
**Portfolio de GYK Studio** es el sitio web oficial de portafolio de **gykstudio** — un estudio creativo enfocado en diseño y desarrollo web moderno.

Muestra:
- **Proyectos** — trabajos seleccionados de clientes y experimentos personales
- **Servicios** — diseño web, desarrollo, branding y UI/UX
- **Nosotros / Sobre mí** — quién está detrás de gykstudio, stack y forma de trabajar
- **Contacto** — cómo iniciar un proyecto juntos

### Tecnologías
- [Astro](https://astro.build/) — framework web estático primero (rápido y SEO-friendly)
- HTML + CSS (estilos por componente + tokens globales en `src/styles/global.css`)
- TypeScript para los datos (`src/data/projects.ts`)
- Sin frameworks pesados por defecto — rápido y desplegable en cualquier hosting estático

### Estructura del proyecto
```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Services.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/
│   │   └── projects.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

### Primeros pasos
```sh
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # compila a ./dist/
npm run preview  # vista previa de producción
```

Gestionar el servidor en segundo plano (ver `AGENTS.md`):
```sh
astro dev --background
astro dev status
astro dev logs
astro dev stop
```

### Personalización
1. Edita `src/data/projects.ts` para agregar tus proyectos reales.
2. Actualiza los textos en `src/components/*.astro` (Hero, About, Services, Contact).
3. Cambia colores/fuentes en `src/styles/global.css` (variables `:root`).
4. Actualiza el SEO en `src/layouts/Layout.astro` y `src/pages/index.astro`.
5. Reemplaza `public/favicon.svg` con tu logo.

### Despliegue
`npm run build` genera archivos estáticos en `dist/` — despliega en Vercel, Netlify, Cloudflare Pages, GitHub Pages o cualquier hosting estático.

---

## 📄 License / Licencia

MIT — free to use and adapt / libre de usar y adaptar.

Built with ❤️ by **gykstudio** with Astro.
Hecho con ❤️ por **gykstudio** con Astro.
