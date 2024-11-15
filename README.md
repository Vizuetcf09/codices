# Códices

**Generate CSS and HTML with a Sass Framework**.

## What is Códices?

Codices es un framework de código abierto desarrollado con el motor de CSS de
Sass, su flexibilidad te permite desarrollar desde una UI hasta una librería o
sistema de diseño de forma rápida y limpia, ya que puedes personalizar el código
fuente con total libertad y de una forma muy intuitiva.

## Why is a Framework?

## Why Sass?

## Why is a CSS and HTML Generator?

## Cómo funciona?

Códices tiene una estructura de carpetas que contiene los elemento del framework
por separado.

# Install Códices

## Con npm

```bash
npm install codices
```

## Con npm

```bash
pnpm install codices
```

# Usage

Copia el siguiente script `odices` en `package.json`, de la siguiente forma

```javascript
...

"scripts": {
    ...
    "codices": "node node_modules/codices/dist/index.js"
};

...
```

Despues ejecuta el siguiente comando en la terminal:

```bash
npm run codices
```

Esto actualizará las scripts necesarias para el uso de Códices, en el archivo
`package.json`.

```javascript
...

"scripts": {
    ...
    "codices": "node node_modules/codices/dist/index.js",
    "sass": "sass --watch codices/scss:codices/styles"

};

...
```

Ademas creará una copia del codigo fuente en el lenguaje Sass, con el que podras
empezar a trabajar.
