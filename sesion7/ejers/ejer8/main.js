'use strict';

const list = document.querySelector('.list');
const eleList = document.querySelectorAll('li');
const cheList = document.querySelectorAll('input');

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
/*tasks[i].completed = true
function completedTask(){
  showList();
  for (let i = 0; i < eleList.length; i++) {
   if (tasks[i].completed === true){
     eleList[i].classList.add('tach');
   }
}
}*/


function inputTask(event) {
  showList();
  let targe = event.target;
  console.log(event.target);

  for (let i = 0; i < eleList.length; i++) {
    if (tasks[i].completed === false) {
      eleList[i].classList.add('tach');
    }
    else{
      cheList[i] === checked;
    }
  }
}

//completedTask();


//cheList[0].addEventListener('click',inputTask);

list.addEventListener('click', inputTask);
//button.addEventListener('click', showMovies);
