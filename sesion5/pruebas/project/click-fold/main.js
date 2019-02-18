'use strict';


// elemento de HTML
const buttonOne = document.querySelector('.btnone');
const buttonTwo = document.querySelector('.btntwo');
const buttonThree = document.querySelector('.btnthree');

const contOne = document.querySelector('.container');
const contTwo = document.querySelector('.container-two');
const contThree = document.querySelector('.container-three');

let a;
// handler 
/*function unfold() {
  
  if (contOne.classList.contains('hidden')) {
    // Elimina la clase
    contOne.classList.remove('hidden');
  } else { // Sino
    // Añade la clase hidden
    contOne.classList.add('hidden');
  }
}*/

const unfold = function(a) {
  if (a.classList.contains('hidden')) {
    // Elimina la clase
    a.classList.remove('hidden');
  } else { // Sino
    // Añade la clase hidden
    a.classList.add('hidden');
  }
};
// listener sobre el elementono, con tipo de evento y handler
buttonOne.addEventListener('click', unfold(contOne));
buttonTwo.addEventListener('click', unfold(contTwo));
buttonThree.addEventListener('click', unfold(contThree));


