'use strict';


const people = 9;
const extraAna = 2;
const bill = 128;
let payAll;
let payAna;
var allPAY;

payAll= (bill-2)/people;

payAna = payAll + extraAna;

var allPAY = document.querySelector('.all');

var anaPAY = document.querySelector('.ana');



allPAY.innerHTML = payAll;

anaPAY.innerHTML = payAna;

