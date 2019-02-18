'use strict';


// elemento de HTML
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// handler
//onst content = `<li class="p1">${inception}</li><li class="p2">${theButterFlyEffect}</li><li class="p3">${eternalSunshineOfTheSM}</li><li class="p4">${blueVelvet}</li><li>${split}</li>`;
//list.innerHTML = content;

function write() {
  
  peli(p1,inception);
  peli(p2,theButterFlyEffect);
  
}

function peli(positionList,movieName) {
 positionList.innerHTML = movieName;
}

function writelist (event){
  let selectedli = event.currentTarget;
  console.log(`La pelicula es: ${selectedli.innerHTML}`)

}
// listener sobre el elementono, con tipo de evento y handler
btn.addEventListener('click', write);

p1.addEventListener('click', writelist);
p2.addEventListener('click', writelist);

