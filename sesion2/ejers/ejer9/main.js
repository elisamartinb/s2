'use strict';

const name = 'Emma Martin';

const lenName = name.length;

const pname = document.querySelector('.writeName');
const pnames = document.querySelector('.writeNames');

pnames.innerHTML = 'Mi nombre es ' +name+ 'y tiene ' + lenName + ' caracteres';

pname.innerHTML = `El nombre de mi compañera es ${name} y esta compuesto por ${lenName} caracteres`;

