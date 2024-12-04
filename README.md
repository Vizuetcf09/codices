# Códices

## What is Códices?

Codices is an open-source framework developed with the CSS engine Sass. Its
flexibility allows you to develop everything from a UI to a library or design
system quickly and cleanly. You can customize the source code freely and
intuitively.

## How does it work?

Codices has a folder structure that contains the framework's elements
separately.

# Install Códices

## With npm

```bash
npm install codices
```

## Con npm

```bash
pnpm install codices
```

# Usage

Copy the following script into `package.json` as shown below:

```javascript
...

"scripts": {
    ...
    "codices": "node node_modules/codices/dist/index.js"
};

...
```

Then run the following command in the terminal:

```bash
npm run codices
```

This will update the necessary scripts for using Codices in the `package.json`
file:

```javascript
...

"scripts": {
    ...
    "codices": "node node_modules/codices/dist/index.js",
    "sass": "sass --watch codices/scss:codices/styles"

};

...
```

Additionally, it will create a copy of the source code in Sass, allowing you to
start working with it
