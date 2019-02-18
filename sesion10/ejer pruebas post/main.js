'use strict';

const btn = document.querySelector('.btn');
const peopleList = document.querySelector('.people-list');

function peopleOfFilm() {
    const text = document.querySelector('.text');

    {
        fetch('https://swapi.co/api/people/?search=' + text.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let ulContent = '';
            for (let i = 0; i < data.count; i++) {
                const gender2 = data.results[i].gender;
                const name2 = data.results[i].name;
                const nameContent = `<li>${name2}</li>`;
                const genderContent = `<li>${gender2}</li>`;
                ulContent += nameContent + genderContent;
            };
            peopleList.innerHTML = ulContent;
            localStorage.setItem('person', JSON.stringify(data));//aqui ya tengo guardados los 4 o los resultados que sean pero todo
        })
    }
};

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo funcionan los objetos de JavaScript', completed: false }
];

localStorage.setItem('taks', JSON.stringify(tasks));

const savedTasks = JSON.parse(localStorage.getItem('taks'));
console.log(savedTasks.length); //4
let ulContent2 = '';

function task() {
    for (let i = 0; i < tasks.length; i++) {
        const nameTask = tasks[i].name;
        const nameContent = `<li>${nameTask}</li>`;
        ulContent2 += nameContent;
    };
    peopleList.innerHTML = ulContent2;
}
btn.addEventListener('click', task);

//const dataTask = JSON.parse(localStorage.getItem('taks'));


let items;

if (localStorage.getItem('taks')) {
  items = JSON.parse(localStorage.getItem('taks')); //si lo tengo guardado ponme este
} else {
  items = [];//sino lo tengo vacio lo pinta como un array vacio pq no he guardado nada 
  console.log(items);
}

function postData(url = ``, data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          redirect: "follow", // manual, *follow, error
          referrer: "no-referrer", // no-referrer, *client
          body: JSON.stringify(data), // body lo que quieres enviar***
      })
      .then(response => response.json()); // parses response to JSON
  }

 // postData();