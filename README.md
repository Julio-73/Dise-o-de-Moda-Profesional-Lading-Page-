# Diseño de Moda - Landing Page

Elegante landing page minimalista para diseñadora de moda profesional. Construida con React, TypeScript, Framer Motion y Tailwind CSS.

## Características

- ✨ Animaciones fluidas con Framer Motion
- 🌙 Modo oscuro/claro con persistencia
- 📱 Diseño responsive mobile-first
- 🎨 Paleta de colores editorial (blanco, negro carbón, dorado, terracota)
- 🔤 Tipografía combinada (Playfair Display + Inter)
- 🖼️ Galerías con lightbox
- 🎯 Cursor personalizado dorado
- ⚡ Loading screen animado

## Stack Tecnológico

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Build para Producción

```bash
npm run build
npm run preview
```

## Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── CollectionsSection.tsx
│   ├── GallerySection.tsx
│   ├── PressSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LoadingScreen.tsx
│   └── CustomCursor.tsx
├── hooks/            # Hooks personalizados
│   ├── useScrollReveal.ts
│   └── useMousePosition.ts
├── utils/             # Utilidades
│   └── cn.ts
├── types/             # Tipos TypeScript
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```


### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## Contacto 

Linkedin: 
https://www.linkedin.com/in/julio-cesar-quispe-garrido/

Correo:
julioquispegarrido132@gmail.com

link:
https://fashionpag.netlify.app/



