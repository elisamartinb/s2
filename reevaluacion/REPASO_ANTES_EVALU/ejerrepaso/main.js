'use strict';

const input = document.querySelector('#inputText');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');


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

function createImg(tag, clase, atri1, atri2, value1, value2) {
  const imgElement = createEl(tag);
  imgElement.classList.add(clase);
  imgElement.setAttribute(atri1, value1);
  imgElement.setAttribute(atri2, value2);
  return imgElement;
}

let peliFav = [];
let favorites = {};

function peli() {
  fetch('http://api.tvmaze.com/search/shows?q=' + input.value)
    .then(response => response.json())
    .then(data => {

      console.log(data);

      let peliName = [];
      let images = [];

      //let search = input.value;
      //console.log('search', search);

      const hijosremove = list.querySelectorAll('.list__item');
      for (let k = 0; k < hijosremove.length; k++) {
        list.removeChild(hijosremove[k]);
      }
      
      //crear como siempre con el boton
      for (let i = 0; i < data.length; i++) {

        //if (data[i].name.toUpperCase().includes(`${search.toUpperCase()}`) && search !== "") {
        //if (data[i].language === `${select.value}`) {
        const liElement = createEl('li');
        liElement.classList.add('list__item');
        peliName[i] = createTagwithText('h2', 'character__title', `${data[i].show.name}`);

        if (data[i].show.image === null) {
          images[i] = createImg('img', 'character__image', 'src', 'alt', 'https://via.placeholder.com/200x100', `${data[i].name}`);
        }
        else {
          images[i] = createImg('img', 'character__image', 'src', 'alt', `${data[i].show.image.medium}`, `${data[i].name}`);
        }


        liElement.appendChild(peliName[i]);
        liElement.appendChild(images[i]);
        list.appendChild(liElement);
      }
      const listas = document.querySelectorAll('.list__item');
      let savedData = localStorage.getItem('favorites');
      if (savedData) {
        let savedDataCard = JSON.parse(savedData);
        console.log(savedDataCard);
        // to fill datacard
        if (savedDataCard) {
          peliFav = savedDataCard;
          console.log('pelifav',peliFav);
          for (let j = 0; j < peliFav.length; j++) {
            for(let k=0; k<data.length; k++){
              if(data[k].show.name === peliFav[j]){
                console.log('item añadir',listas[k]);
                listas[k].classList.add('favorite');
              }
            }
            
          }
        }
      }
      // }
      // }
    });
}


btn.addEventListener('click', peli);


//poner clase y guardar
function handlerList(event) {
  const lis = document.querySelectorAll('.list__item');
  const img = document.querySelectorAll('.character__image');
  const title = document.querySelectorAll('.character__title');
  console.log('current', event.currentTarget);
  console.log('target', event.target);
  for (let i = 0; i < lis.length; i++) {
    if (event.target === lis[i] || event.target === img[i] || event.target === title[i]) {
      lis[i].classList.toggle('favorite');
      if (lis[i].classList.contains('favorite')) {
        peliFav.push(title[i].innerHTML);
        localStorage.setItem('favorites', JSON.stringify(peliFav));
      }
    }

  }
}


list.addEventListener('click', handlerList);


/*
function saveDataskills(a) {
  // cheking if exist data on localStorage//
  let savedData = localStorage.getItem('favorites');
  if (savedData) {
    let savedDataCard = JSON.parse(savedData);
    // to fill datacard
    if (savedDataCard) {
      peliFav = savedData;
      for (let j = 0; j < peliFav.length; j++) {
        for (let i = 0; i < a.length; i++) {
          if (a[i].show.name === peliFav[j]) {
            //if (data[i].name.toUpperCase().includes(`${search.toUpperCase()}`) && search !== "") {
            //if (data[i].language === `${select.value}`) {
            const liElement = createEl('li');
            liElement.classList.add('list__item');
            peliName[i] = createTagwithText('h2', 'character__title', `${data[i].show.name}`);

            if (data[i].show.image === null) {
              images[i] = createImg('img', 'character__image', 'src', 'alt', 'https://via.placeholder.com/200x100', `${data[i].name}`);
            }
            else {
              images[i] = createImg('img', 'character__image', 'src', 'alt', `${data[i].show.image.medium}`, `${data[i].name}`);
            }


            liElement.appendChild(peliName[i]);
            liElement.appendChild(images[i]);
            list.appendChild(liElement);

          }

        }

      }

    }
  }
}*/

function rotate(event){
  const lis = document.querySelectorAll('.list__item');
  if(lis[i]=== event.target.classList.contains('favorite')){
    event.target.style.transform = "rotateY(360deg)";
  } 
}

list.addEventListener('click',rotate);