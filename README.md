# Alegaciones ciudadanas a la VAU-5 · Granada

Web ciudadana con las alegaciones presentadas en el trámite de información pública de la **Variante de Armilla, Churriana y Las Gabias (VAU-5)** en Granada, promovida por la Consejería de Fomento, Articulación del Territorio y Vivienda de la Junta de Andalucía.

## Estructura del proyecto

```
vau5/
├── index.html          # HTML mínimo: solo carga los tres archivos
├── css/
│   └── styles.css      # Todo el diseño visual
├── js/
│   └── app.js          # Lógica de navegación y renderizado
└── data/
    └── content.js      # Todo el contenido textual (alegaciones, petición)
```

**Diseño y contenido están completamente separados.** Para actualizar o traducir el texto, solo hay que editar `data/content.js`. Para cambiar la apariencia, solo `css/styles.css`.

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub
2. Ve a **Settings → Pages**
3. En *Source*, selecciona `main` y la raíz `/`
4. La web estará disponible en `https://tu-usuario.github.io/nombre-repo/`

## Publicar en Google Sites

Google Sites no admite HTML personalizado en el plan gratuito. Las opciones son:

- **Opción A:** Publicar en GitHub Pages e incrustar la URL como iframe en Google Sites mediante *Insertar → Incrustar*
- **Opción B:** Usar directamente la URL de GitHub Pages como enlace desde Google Sites

## Alegaciones incluidas

| # | Alegación |
|---|-----------|
| I | Metodología obsoleta: el HCM 2010 no tiene valor normativo en España |
| II | Demanda inducida ignorada: las carreteras nuevas se llenan |
| III | Previsiones de tráfico cuestionables y sin análisis de incertidumbre |
| IV | Ausencia de evaluación de alternativas modales (BRT, bici, metro ligero) |
| V | Externalidades no contabilizadas: CO₂, partículas PM2,5, calidad del aire |
| VI | El anteproyecto no analiza qué pasa cuando el tráfico llega a Granada |
| VII | Efecto Mestre: facilitar el coche vacía las ciudades y destruye el comercio local |
| VIII | El POTAUG protege el mismo suelo que el anteproyecto invoca como aval |

El proyecto incluye una **salvedad expresa** a favor del bypass de Las Gabias (tramo Vial del Machuchón – Segunda Circunvalación), cuya justificación se considera válida y distinta al resto del proyecto.
