# ITENUA Lab 

Calculadora de matrices interactiva y educativa, desarrollada por el **Semillero de Investigación en Teoría de Números y Álgebra (ITENUA)**.

Pensada para estudiantes universitarios de **Cálculo** y **Álgebra Lineal**, ITENUA Lab no solo entrega resultados: explica el **paso a paso** de cada operación para que el estudiante entienda el razonamiento detrás del cálculo, no solo la respuesta final.

---

## Características

- **Modo Tutor y Modo Rápido**: alterna entre ver el procedimiento completo explicado paso a paso, o solo el resultado final.
- **Operaciones soportadas**: suma, resta, multiplicación, transpuesta, determinante, inversa y sistemas de ecuaciones (RREF).
- **Métodos pedagógicos según el tamaño de la matriz**: expansión por cofactores para matrices 2×2/3×3, eliminación gaussiana para matrices más grandes.
- **Tema claro y oscuro**, con una paleta diseñada para minimizar la fatiga visual en sesiones largas de estudio.
- **100% responsive**: optimizado para celular, tablet y escritorio.
- **Ligero por diseño**: pensado para estudiantes que acceden desde datos móviles, no solo desde wifi.
- **Soporte offline (PWA)**: una vez cargada, la app funciona sin conexión constante.

---

## Estructura del proyecto

```
ITENUA-Lab/
├── src/
│   ├── core/              # Lógica matemática pura 
│   │   ├── operations/    # Suma, resta, determinante, inversa, RREF, etc.
│   │   ├── steps/         # Generación del paso a paso pedagógico
│   │   └── validators/    # Validación de dimensiones y matrices cuadradas
│   ├── components/        # Componentes de UI
│   ├── hooks/              # useTheme, useMatrixHistory, useResultMode
│   ├── styles/             # tokens.css y temas claro/oscuro
│   ├── layouts/
│   ├── pages/
│   └── utils/
├── tests/                  # Pruebas unitarias del motor matemático
└── public/                 # Assets estáticos, manifest de PWA
```
---

## Cómo correr el proyecto localmente

```bash
# Clonar el repositorio
git clone https://github.com/NaghellyMoreno/ITENUA-Lab.git
cd ITENUA-Lab

# Instalar dependencias
pnpm install

# Levantar el servidor de desarrollo
pnpm dev
```

El proyecto quedará disponible en `http://localhost:5173/`.

### Otros comandos útiles

```bash
pnpm build      # Compila la app para producción
pnpm preview    # Sirve localmente el build de producción
pnpm lint       # Corre ESLint sobre el proyecto
pnpm test       # Corre las pruebas unitarias (Vitest)
```

---

## Contribuciones

Este proyecto es desarrollado y mantenido por el **Semillero ITENUA — Manizales**.
---
