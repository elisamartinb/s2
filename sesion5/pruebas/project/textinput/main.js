'use strict';


// elemento de HTML
const buttonName = document.querySelector('.inputa');
const buttonSurname = document.querySelector('.inputb');
const Name = document.querySelector('.name');
const Surname = document.querySelector('.lastname');


// handler
function write() {
  Name.innerHTML = buttonName.value;
  if(!Name.innerHTML){
    Name.innerHTML = 'Nombre';
  }
}

function write_W() {
  Surname.innerHTML = buttonSurname.value;
  if(!Surname.innerHTML){
    Surname.innerHTML = 'Apellido';
  }
}

// listener sobre el elementono, con tipo de evento y handler
buttonName.addEventListener('keydown', write);
buttonSurname.addEventListener('keypress', write_W);

