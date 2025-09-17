# NeuroTek Project

Un proyecto ligero construido con JavaScript puro (vanillaJS) y sin ningún framework de JavaScript o CSS.

---

## Características

- Código escrito 100 % en JavaScript nativo  
- Único recurso externo: fuente **Roboto** desde Google Fonts  

---

## Recursos externos

    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

---

## Cómo ejecutar

1. Clona o descarga este repositorio.  
2. Sitúa tu terminal en la carpeta del proyecto.  
3. Arranca un servidor HTTP apuntando a `index.html`. Por ejemplo:  
   - Live Server (VS Code)  
   - Apache  
   - NGINX  
   - http-server (npm)  
4. Abre tu navegador en la URL que te proporcione el servidor (por ejemplo `http://localhost:5500`).  

---

## Estructura básica

```
/
├── index.html          ← Punto de entrada HTML
├── css/
│   └── styles.css      ← Estilos
└── data/
    └── services.json   ← Base de datos local de servicios
    └── users.json      ← Base de datos local de usuarios
└── images/
└── js/
    └── components      ← Web components para la creación del sitio web
    └── persistence.js  ← Handler de la base de datos local y autenticación
    └── styles.js       ← Listener del scroller
    └── utils.js        ← Funciones comunes y de utilidad
```