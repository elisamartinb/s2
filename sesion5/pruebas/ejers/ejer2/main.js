'use strict';


// elemento de HTML
const buttonName = document.querySelector('.inputa');
const buttonSurname = document.querySelector('.inputb');
/*const Name = document.querySelector('.name'); //span que cambia
const Surname = document.querySelector('.lastname');*/
const button = document.querySelector('.btn');


// handler
function write() {
  Name.innerHTML = buttonName.value;
  
}
function write_W() {
  Surname.innerHTML = buttonSurname.value;
}

function log(){
  const name = buttonName.value;
  console.log(`Hola, ${name}`);
}

// listener sobre el elementono, con tipo de evento y handler
button.addEventListener('click', log);


