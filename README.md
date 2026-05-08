# Valentina Ríos - Landing Page

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

## Personalización

### Cambiar Nombre de la Diseñadora

Editar en `src/components/HeroSection.tsx`:
```tsx
Valentina Ríos
```

### Cambiar Paleta de Colores

Modificar `tailwind.config.js`:
```js
colors: {
  cream: '#faf9f6',
  charcoal: '#1a1a1a',
  gold: '#c9a47d',
  terracotta: '#e07a5f',
}
```

### Cambiar Imágenes

Reemplazar las URLs de Unsplash en cada componente con las imágenes deseadas.

### Agregar API de Instagram

1. Crear cuenta de desarrollador en Meta
2. Obtener Access Token
3. Agregar en `.env`:
```
VITE_INSTAGRAM_ACCESS_TOKEN=your_token
```

## Despliegue

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## Licencia

MIT
