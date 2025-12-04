# Lung Flow

Interactive 3D lung viewer with breathing simulation and condition presets.  
Live demo: https://lung-flow.vercel.app/

The app renders a 3D model of human lungs, simulates breathing, and lets you explore different lung conditions directly in the browser.

---

## Features

- **3D lung model**
  - GLTF lung model loaded via `useGLTF`
  - Interactive camera (rotate and zoom with mous)

- **Breathing simulation**
  - Smooth breathing animation
  - Adjustable breathing rate
  - Adjustable breathing depth


- **Quality**
  - Unit tests for breathing math
  - Linting, formatting and CI that runs lint + test + build on every push

---

## Demo

- Live app: https://lung-flow.vercel.app/

---

## Local development

### Install dependencies

```bash
pnpm install