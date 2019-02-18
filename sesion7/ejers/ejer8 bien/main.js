'use strict';

const list = document.querySelector('.list');
const eleList = document.querySelectorAll('li');
const cheList = document.querySelectorAll('input');
const title = document.querySelector('.title');

const tasks = [{
  name: 'Recoger setas en el campo',
  completed: false
},
{
  name: 'Comprar pilas',
  completed: true
},
{
  name: 'Poner una lavadora de blancos',
  completed: true
},
{
  name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
  completed: false
}
];

function showList() {
  for (let i = 0; i < eleList.length; i++) {
    eleList[i].innerHTML = tasks[i].name;
  }
}

showList();
//tasks[i].completed = true
let acc = 0;  //contador contar cuantas tengo completas
function completedTask() {
  showList();
  for (let i = 0; i < eleList.length; i++) {
    if (tasks[i].completed === true) {
      acc = acc + 1;
      cheList[i].checked = true;
      eleList[i].classList.add('tach');
    }
  }
  console.log(acc);
  return acc;
}

completedTask();

function inputTask(event) {

  let che = event.currentTarget;
  console.log(event.target);//sale el li sobre el q pincho
  console.log(event.currentTarget);//sale el ul que donde LISTENER

  for (let i = 0; i < eleList.length; i++) {
    if (event.currentTarget === cheList[i]) {
      if (tasks[i].completed === false) {
        tasks[i].completed = true;
        eleList[i].classList.add('tach');
        acc = acc + 1;  //contador contar cuantas tengo completas
        console.log(acc);
      }
      else {
        tasks[i].completed = false;
        eleList[i].classList.remove('tach');
        acc = acc - 1;
      }
    }
  }
  title.innerHTML = `Tienes ${tasks.length} tareas.${acc} completadas y ${tasks.length - acc} por completar`
}

//funcion que cuente cuantas tareas tengo completadas ppero no la utilizo al final directamente en la otra lo hago copiando de esta

/*function completeUpdate() {
  for (let i = 0; i < eleList.length; i++) {
    if (tasks[i].completed === true) {
      acc = acc + 1;
      console.log(`la tarea ${tasks[i]} esta completa`);
    }
    console.log(`Total tareas ${acc}`);
  }
}*/

//funcion para que las completadas vayan al final del array 
/*
const tasks2 = tasks;

function removeArr (){
  for (let i = 0; i < eleList.length; i++) {
    if (event.currentTarget === cheList[i]) {
      if (tasks[i].completed === false) {
        tasks[i].completed = true;
        eleList[i].classList.add('tach');
        acc = acc + 1;  //contador contar cuantas tengo completas
        console.log(acc);
        tasks[i] = tasks2[cheList.length];
        for (let j=i+1 ; i!=j ; j++){
          tasks[j]= tasks2[i-1];
        }
      }
      else {
        tasks[i].completed = false;
        eleList[i].classList.remove('tach');
        acc = acc - 1;
      }
    }
  }
}
removeArr ();*/

cheList[0].addEventListener('click', inputTask);
cheList[1].addEventListener('click', inputTask);
cheList[2].addEventListener('click', inputTask);
cheList[3].addEventListener('click', inputTask);

