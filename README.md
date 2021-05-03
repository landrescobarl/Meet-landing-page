# Frontend Mentor - Meet landing page solution

Esta es una solución al [Desafío del componente de tarjeta de vista previa de estadísticas en Frontend Mentor] (https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

  - Construir un landing page y hacer que se parezca lo más posible al diseño.

### The challenge

- Ver el diseño óptimo según el tamaño de la pantalla de su dispositivo

### Screenshot

![screenshot-projec](./meet-landing-page.png)

### Links

- Solution URL:  [https://github.com/landrescobarl/Meet-landing-page]
- Live Site URL: [https://lmeet-landing-pagel.netlify.app/]

## My process

### Built with

- Figmma pre-diseño [https://www.figma.com/file/bxo79yUqxoFLeAVz7h2GVN/Untitled?node-id=0%3A1]
- Marcado semántico HTML5
- Propiedades personalizadas de CSS
- Caja flexible
- Sass proprocesador de CSS
- Flujo de trabajo móvil primero
- [React] (https://reactjs.org/) - Biblioteca JS
- [Babel] - compilador de JavaScript


### What I learned

  - @mixin & @include SASS
    La @mixindirectiva le permite crear código CSS que se reutilizará en todo el sitio web.
    La @includedirectiva se crea para permitirle usar (incluir) el mixin.

```
@mixin grid-place-center {
    display: grid;
    place-items: center;
}

.body {
    min-width: 40rem;
    @include grid-place-center;
}
```

  - Crear un componente "BoxText" y asigna los textos segun el array de objetos text que
    considan con el "dataset.commentid" entregados como parametros cuando se renderisa.
    
  - Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {});
    crea una array con los nodos que considan con la clase "boxText" para ser recoridos
    en un loop al mismo tiempos se va renderisando el componente "BoxText" y se extrae
    en la variable "commentId" los "dataset.commentid" de las clases.

```
Array.from(document.getElementsByClassName("boxText")).forEach(function (item) {
    const commenId = parseInt(item.dataset.id - 1);
    ReactDOM.render(<BoxText dataset={commenId} />, item)
});

```

## Author

- Sitio web - [https://landrescobarl.github.io/] 
- Mentor de frontend - [@yourusername] (https://www.frontendmentor.io/profile/yourusername)
- Twitter - @IAndresEscobarI] 
- Linkeding - [www.linkedin.com/in/landresescobarl]