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
  completed: false
},
{
  name: 'Poner una lavadora de blancos',
  completed: false
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


/*
function removeArr(i) {
  for (let i = 0; i < eleList.length; i++) {

    if (tasks[i].completed === false) {
      console.log(tasks[i]);
      tasks2[tasks2.length] = tasks[i]; //me lo llevo al final del array vacio
      for (let j = i + 1; j < tasks2.length; j++) { //tenfo que rellenar el resto del array vacio
        tasks2[j - 1] = tasks[j];
      }
    }
    else {
      tasks[i].completed = false;
      eleList[i].classList.remove('tach');
      acc = acc - 1;
    }
  }

}*/

let j = 0;

function inputTask(event) {

  let che = event.currentTarget;
  //console.log(event.target);//sale el li sobre el q pincho
  //console.log(event.currentTarget);//sale el ul que donde LISTENER

  for (let i = 0; i < eleList.length; i++) {
    
    if (event.currentTarget === cheList[i]) {
      if (tasks[i].completed === false) {
        tasks[i].completed = true;
        eleList[i].classList.add('tach');
        acc = acc + 1;  //contador contar cuantas tengo completas
        console.log(acc);
        tasks[cheList.length] = tasks[i];
        // me lo deja sin checkear event.currentTarget.checked = false;
       for (j = i; j < cheList.length; j++) {
            tasks[j] = tasks[i+1];
            i = i +1;
        }
      }
      else {
        tasks[i].completed = false;
        eleList[i].classList.remove('tach');
        acc = acc - 1;
      }
    }
  }
  
  for (let i = 0; i < eleList.length; i++) {
    eleList[i].innerHTML = tasks[i].name;
    if(tasks[i].completed === false){
      cheList[i].checked = false;
      eleList[i].classList.remove('tach');
    }
    else {
      eleList[i].classList.add('tach');
      cheList[i].checked = true;
    }
  }

  title.innerHTML = `Tienes ${tasks.length-1} tareas.${acc} completadas y ${(tasks.length -1) - acc} por completar`;
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



removeArr ();*/

cheList[0].addEventListener('click', inputTask);
cheList[1].addEventListener('click', inputTask);
cheList[2].addEventListener('click', inputTask);
cheList[3].addEventListener('click', inputTask);

//unaforma creando otro array vacia rellenandolo de nuevo
/*if (event.currentTarget === cheList[i]) {
  if (tasks[i].completed === false) {
    tasks[i].completed = true;
    eleList[i].classList.add('tach');
    acc = acc + 1;  //contador contar cuantas tengo completas
    console.log(acc);
    tasks2[cheList.length].name = tasks[i].name;
    while (j < (cheList.length - 1)) {
      if (k !== i) {
        tasks2[j].name = tasks[k].name;
        k = k + 1;
        j = j + 1;
      } else {
        k = k + 1;
      }
    }
  }
  else {
    tasks[i].completed = false;
    eleList[i].classList.remove('tach');
    acc = acc - 1;
  }
}*/