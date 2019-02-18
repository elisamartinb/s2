'use strict';

const box = document.querySelector('.box');
const titleh = document.querySelector('.title');
const textp = document.querySelector('.text');

if (box.classList.contains('warning')) {
    titleh.innerHTML = 'AVISO';
    textp.innerHTML = 'Tenga cuidado';
  } 
  
else if (box.classList.contains('error')){ 
    
    titleh.innerHTML = 'ERROR';
    textp.innerHTML = 'Ha surgido un error';
  }


  else if (box.classList.contains('success')){ 
    titleh.innerHTML = 'CORRECTO';
    textp.innerHTML = 'Los datos son correctos';
  }




