'use sctrict';

const btn = document.querySelector('.btn');

const loguear =(event) => console.log(event.type);


btn.addEventListener('click',loguear);
