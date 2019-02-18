'use strict';

const inputText = document.querySelector('#inputText');
const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
//const reset = document.querySelector('.reset');

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

const loading = document.querySelector('.bookshelf_wrapper');

function searchSeries(event) {
  event.preventDefault();
  removeLastSearch();
  loading.classList.remove('hide-box');
  setTimeout(fet, 1500);
 function fet(){
  fetch('http://api.tvmaze.com/search/shows?q='+inputText.value)
  .then(response => response.json())
  .then(data => {
    console.log('data', data);
    loading.classList.add('hide-box');
    let images = [];
    let seriesName = [];
    let idList = [];
    let popcorns = [];
    
    removeLastSearch();
    const results = createTagwithText('p','series__title',`${data.length}`);
    list.appendChild(results);
  
    let lang =[];
   let genre =[];
   
    
    for (let i = 0; i < data.length; i++) {
      
  
      const liElement = createTagwithText('li', 'list__item', '');

      for(let j=0; j<data[i].show.genres.length; j++){
        genre[j] = createTagwithText('span', 'list__title', `${data[i].show.genres[j]}`);
        liElement.appendChild(genre[j]);
      }
      lang[i] = createTagwithText('span', 'list__title', `${data[i].show.language}`);
      popcorns[i] = createTagwithText('div', 'popcorn', '');
      popcorns[i].classList.add('hide-pop');
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
      liElement.appendChild(lang[i]);
      liElement.appendChild(popcorns[i]);
      liElement.appendChild(idList[i]);
      liElement.appendChild(images[i]);
      liElement.appendChild(seriesName[i]);
      list.appendChild(liElement);
    }

    const idsSearch = document.querySelectorAll('.hidden__id');
    const itemsSearch = document.querySelectorAll('.list__item');
    const popSearch = document.querySelectorAll('.popcorn');
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
              popSearch[k].classList.remove('hide-pop');
            }
          }
        }
      }
    }
  });
 }
  
    
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
  const popcornimg = document.querySelectorAll('.popcorn');
  console.log('current', event.currentTarget);
  console.log('target', event.target);
  for (let i = 0; i < listItems.length; i++) {
    if (event.target === listItems[i] || event.target === imgs[i] || event.target === titles[i]) {
      listItems[i].classList.toggle('favorite');
      popcornimg[i].classList.toggle('hide-pop');
      if (listItems[i].classList.contains('favorite')) {
        seriesFav.push(titles[i].innerHTML);
        localStorage.setItem('favorites', JSON.stringify(seriesFav));
      } else {
        for (let j = 0; j < seriesFav.length; j++) {
          if (titles[i].innerHTML === seriesFav[j]) {
            seriesFav.splice(j, 1);
            localStorage.setItem('favorites', JSON.stringify(seriesFav));
          }
        }
      }
    }
  }
}

list.addEventListener('click', addFavorites);
const deleted = document.querySelector('.deleted');
const reseted = document.querySelector('.reset');
const trash =document.querySelector('.fa-trash-alt');
const resetext =document.querySelector('.rese');


function resetFavorites() {
  console.log('even', event);
  const reset = document.querySelectorAll('.list__item');
  favorites = {};
  seriesFav = [];

  resetext.classList.toggle('hide-box');
  trash.style.transform = "translateX(67px)";

  localStorage.setItem('favorites', '');
  for (let i = 0; i < reset.length; i++) {
    reset[i].classList.remove('favorite');
  }
  inputText.value = '';
  let list = document.querySelector('.list');
  console.log('ul antes', reset);
  for (let i = 0; i < reset.length; i++) {
    list.removeChild(reset[i]);
  }
  console.log('ul luego', list);
}

//trash.addEventListener('click', resetFavorites);
//resetext.addEventListener('click', resetFavorites);
//deleted.addEventListener('click', resetFavorites);

