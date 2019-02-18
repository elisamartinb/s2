'use strict';
const body = document.querySelector('body');

function addContainer(){
    const container = '<div class="container">Su sesion ha expirado!!</div>';
    body.innerHTML = container;
    console.log(container);
}

setTimeout(addContainer, 4000);

