'use strict';


// elemento de HTML
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// handler
//onst content = `<li class="p1">${inception}</li><li class="p2">${theButterFlyEffect}</li><li class="p3">${eternalSunshineOfTheSM}</li><li class="p4">${blueVelvet}</li><li>${split}</li>`;
//si se podria como arriba pero dentro de la funcino llamo a los li con const document.quer etc etc
//list.innerHTML = content;

function peli(positionList, movieName) {
  positionList.innerHTML = movieName;
}

function highlight(a){
  console.log(`La pelicula es: ${a.innerHTML}`)
}


function write(event) {
  let targe = event.target;
  console.log(event.target);//sale el li sobre el q pincho
  console.log(event.currentTarget);//sale el ul que donde LISTENER
  peli(p1, inception);
  peli(p2, theButterFlyEffect);
  peli(p3, eternalSunshineOfTheSM);
  peli(p4, blueVelvet);
  peli(p5, split);
  //if (target.tagName != 'LI') return; // not on TD? Then we're not interested

  highlight(targe);

}

/*function writelist(event) {
  let selectedli = event.currentTarget;
  console.log(`La pelicula es: ${selectedli.innerHTML}`)

}*/
// listener sobre el elementono, con tipo de evento y handler
list.addEventListener('click', write);

//p1.addEventListener('click', writelist);
//p2.addEventListener('click', writelist);
