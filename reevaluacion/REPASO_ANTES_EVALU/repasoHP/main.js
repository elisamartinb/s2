'use strict';

const uri = 'http://hp-api.herokuapp.com/api/characters';
const container = document.querySelector('.container');
const input = document.querySelector('#text');
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

function fetchPalette() {
  fetch(uri)
    .then(response => response.json())
    .then(data => {

      console.log(data);

      let character = [];
      let images = [];
      let house = [];
      let alive = [];
      let search = input.value;
      console.log('search', search);

      const hijosremove = list.querySelectorAll('.list__item');
      console.log('hijoseleiminar', hijosremove);
      for (let k = 0; k < hijosremove.length; k++) {
        list.removeChild(hijosremove[k]);
      }
      console.log('lista con hijos eliminados', list);

      for (let i = 0; i < data.length; i++) {

        if (data[i].name.includes(`${search}`) && search !== "") {
          const liElement = createEl('li');
          liElement.classList.add('list__item');
          images[i] = createImg('img', 'character__image', 'src', 'alt', `${data[i].image}`, `${data[i].name}`);
          character[i] = createTagwithText('h2', 'character__title', `${data[i].name}`);
          house[i] = createTagwithText('p', 'house__title', `${data[i].house}`);
          if (data[i].alive === true) {
            alive[i] = createTagwithText('p', 'alive__title', 'VIVO');
          } else {
            alive[i] = createTagwithText('p', 'alive__title', 'muerto');
          }

          liElement.appendChild(character[i]);
          liElement.appendChild(images[i]);
          liElement.appendChild(house[i]);
          liElement.appendChild(alive[i]);
          list.appendChild(liElement);
        }
      }

      // const lis = document.querySelectorAll('.list__item');
      // console.log('lista', lis);

    });

}

//fetchPalette();

input.addEventListener('keyup', fetchPalette);