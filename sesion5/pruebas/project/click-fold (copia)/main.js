'use strict';


// elemento de HTML
const buttonOne = document.querySelector('.btnone');
const buttonTwo = document.querySelector('.btntwo');
const buttonThree = document.querySelector('.btnthree');

let contOne = document.querySelector('.container');
let contTwo = document.querySelector('.container-two');
let contThree = document.querySelector('.container-three');

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
function btn(callback){
    callback(contOne);
}

btn(unfold);
//listener sobre el elementono, con tipo de evento y handler
buttonOne.addEventListener('click', btn);
buttonTwo.addEventListener('click', btn);
buttonThree.addEventListener('click', btn);


