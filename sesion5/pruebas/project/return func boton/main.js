'use strict';


// elemento de HTML
/*const buttonOne = document.querySelector('.btnone');
const buttonTwo = document.querySelector('.btntwo');
const buttonThree = document.querySelector('.btnthree');

let contOne = document.querySelector('.container');
let contTwo = document.querySelector('.container-two');
let contThree = document.querySelector('.container-three');
/*
// handler 
function unfold(a) {
  
  if (a.classList.contains('hidden')) {
    // Elimina la clase
    a.classList.remove('hidden');
  } else { // Sino
    // Añade la clase hidden
    a.classList.add('hidden');
  }
}

//listener sobre el elementono, con tipo de evento y handler
/*buttonOne.addEventListener('click', btn);
buttonTwo.addEventListener('click', btn);
buttonThree.addEventListener('click', btn);*/

function callback(a) {
  return function() {
    if (a.classList.contains('hidden')) {
      // Elimina la clase
      a.classList.remove('hidden');
    } else { // Sino
      // Añade la clase hidden
      a.classList.add('hidden');
    }
  }
}

let contOne = document.querySelector('.container');
let contTwo = document.querySelector('.container-two');
let contThree = document.querySelector('.container-three');
let x = 1, y = 2;
const btn = document.querySelector('.btnone');
const buttonTwo = document.querySelector('.btntwo');
const buttonThree = document.querySelector('.btnthree');
btn.addEventListener('click', callback(contOne));
buttonTwo.addEventListener('click', callback(contTwo));
buttonThree.addEventListener('click', callback(contThree));

