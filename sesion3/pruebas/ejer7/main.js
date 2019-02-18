'use strict';

const year = document.querySelector('.ageNow');
const bis = document.querySelector('.nextBis');

year.innerHTML = parseInt(year.innerHTML);
const yearnow = year.innerHTML;

const resto = yearnow % 4;

if (resto === 0){
    bis.innerHTML = `El año ${yearnow} es bisiesto`;
}


else{
  let nextBisiest = parseInt(year.innerHTML);
  let restnext = nextBisiest % 4;
  
  while (restnext!=0){
   nextBisiest = nextBisiest + 1;
   restnext = nextBisiest % 4;
  }
  bis.innerHTML = `El año ${yearnow} no es bisiesto. El proximo año bisiesto es: ${nextBisiest}`;
}



