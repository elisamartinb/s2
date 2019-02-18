'use strict';

const year = 365;
const hours = 24;


const hoursLife = document.querySelector('.writeHours')

/*
const totalHours = parseInt(ages) * hours * year; */




const userAge = document.querySelector('.age');
userAge.innerHTML = parseInt(userAge.innerHTML);
const yearsToRetirement = 67 - userAge.innerHTML;

hoursLife.innerHTML = `Has vivido ${yearsToRetirement} horas`;



