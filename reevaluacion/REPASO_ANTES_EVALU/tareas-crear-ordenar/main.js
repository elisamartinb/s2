'use strict';

const container = document.querySelector('.container');
const input = document.querySelector('#text');
const checkInput = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const eleList = document.querySelectorAll('.list');


const tasks = [{
  name: 'Tarea 0',
},
{
  name: 'Tarea 1',
},
{
  name: 'Tarea 2',
}
];

function createEl(tag) {
  return document.createElement(tag);
}

function createTagwithText(tag, clase, text) {
  const el = createEl(tag);
  el.classList.add(clase);
  el.appendChild(createText(text));
  return el;
}

function createText(text) {
  return document.createTextNode(text);
}

const divEl = createTagwithText('div', 'divElement', '');
const labels = document.querySelectorAll('label');
console.log('label0',labels[0].innerHTML);

function addNewInput() {
  btn.classList.add('hide-box');
  container.appendChild(divEl);
}
let newinput =[];

let acc = 0; //contador contar cuantas tengo completas

function inputs(event) {

  /* let search = input.value;
   console.log('search', search);

   const hijosremove = list.querySelectorAll('.list__item');
   for (let k = 0; k < hijosremove.length; k++) {
     list.removeChild(hijosremove[k]);
   }*/
   console.log('elelist', eleList[0]);
   let checks = [];
   let k=0;
  for (let i = 0; i < checkInput.length; i++) {

    if (checkInput[i].checked === true && eleList[i] === event.currentTarget) {
      eleList[i].classList.add('tach');
      tasks[tasks.length] = tasks[i];
      checks[k] = checkInput[i];
      console.log('checks nuevo',checks);
      k++;
     
     for (let j = i; j < eleList.length; j++) {
          tasks[j] = tasks[i+1];
          i = i +1;
          console.log('task', tasks[j]);
      } 
    }
    else if(checkInput[i] === true && checkInput[i] === event.currentTarget){
      eleList[i].classList.remove('tach');
    }
  }

  for (let i = 0; i < eleList.length; i++) {
    labels[i].innerHTML = tasks[i].name;
      for(let j=0; j<checks.length; j++){
        if(checkInput[i] === checks[j]){
        eleList[i].classList.add('tach');
        checkInput[i].checked = true;
      }
    }
    console.log('cheks',checkInput);
  }

}

for (let i = 0; i < eleList.length; i++) {
  eleList[i].addEventListener('click', inputs);
}
btn.addEventListener('click', addNewInput);
