'use strict';

const inputText = document.querySelector('#inputText');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const reset = document.querySelector('.reset');

let favorites = {}; 
let seriesFav = [];

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


function removeLastSearch() {
  const removeElements = list.querySelectorAll('.list__item');
  for (let i = 0; i < removeElements.length; i++) {
    list.removeChild(removeElements[i]);
  }
}


function searchSeries() {
  fetch('http://api.tvmaze.com/search/shows?q='+inputText.value)
    .then(response => response.json())
    .then(data => {
      console.log('data', data);

      let images = [];
      let seriesName = [];
      let idList = [];

      removeLastSearch();

      for (let i = 0; i < data.length; i++) {

        const liElement = createTagwithText('li', 'list__item', '');
        //const liElement = createEl('li');
        //liElement.classList.add('list__item');
        seriesName[i] = createTagwithText('h2', 'series__title', `${data[i].show.name}`);
        idList[i] = createTagwithText('span', 'hidden__id', `${data[i].show.id}`);
        console.log('id', idList[i]);
        if (data[i].show.image === null) {
          images[i] = createImg('img', 'series__image', 'src', 'alt', 'https://via.placeholder.com/210x295/cccccc/666666/?text=TV', `${data[i].name}`);
        } else {
          images[i] = createImg('img', 'series__image', 'src', 'alt', `${data[i].show.image.medium}`, `${data[i].name}`);
        }

        liElement.appendChild(idList[i]);
        liElement.appendChild(images[i]);
        liElement.appendChild(seriesName[i]);
        list.appendChild(liElement);
      }

      const idsSearch = document.querySelectorAll('.hidden__id');
      const itemsSearch = document.querySelectorAll('.list__item');
      let savedData = localStorage.getItem('favorites');
      if (savedData) {
        let savedDataSeries = JSON.parse(savedData);
        console.log(savedDataSeries);
        if (savedDataSeries) {
          seriesFav = savedDataSeries;
          console.log('series saved data', seriesFav);
          for (let k = 0; k < data.length; k++) {
            for (let j = 0; j < seriesFav.length; j++) {
              if (idsSearch[k].innerHTML === seriesFav[j]) {
                itemsSearch[k].classList.add('favorite');
              }
            }
          }
        }
      }
    });
    
}

btn.addEventListener('click', searchSeries);
const listItems = document.querySelectorAll('.list__item');
console.log('list items', listItems);
//poner clase y guardar
function addFavorites(event) {
  const listItems = document.querySelectorAll('.list__item');
  console.log('list items', listItems);
  const imgs = document.querySelectorAll('.series__image');
  const titles = document.querySelectorAll('.series__title');
  const ides = document.querySelectorAll('span');
  console.log('current', event.currentTarget);
  console.log('target', event.target);
  for (let i = 0; i < listItems.length; i++) {
    if (event.target === listItems[i] || event.target === imgs[i] || event.target === titles[i]) {
      listItems[i].classList.toggle('favorite');
      if (listItems[i].classList.contains('favorite')) {
        seriesFav.push(ides[i].innerHTML);
        localStorage.setItem('favorites', JSON.stringify(seriesFav));
      } else {
        for (let j = 0; j < seriesFav.length; j++) {
          if (ides[i].innerHTML === seriesFav[j]) {
            seriesFav.splice(j, 1);
            localStorage.setItem('favorites', JSON.stringify(seriesFav));
          }
        }
      }
    }
  }
}

list.addEventListener('click', addFavorites);


function resetFavorites(){
  const reset= document.querySelectorAll('.list__item');
  favorites = {}; 
  seriesFav = [];
  localStorage.setItem('favorites','');
  for (let i = 0; i < reset.length; i++) {
  reset[i].classList.remove('favorite');
  }
  inputText.value='';
  let list = document.querySelector('.list');
  console.log('ul antes',reset);
  for (let i = 0; i < reset.length; i++) {
    list.removeChild(reset[i]);
  }
  console.log('ul luego',list);
  }

  reset.addEventListener('click', resetFavorites);