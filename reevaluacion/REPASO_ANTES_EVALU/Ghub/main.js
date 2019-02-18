'use strict';

const uri = 'http://api.github.com/orgs/Adalab/repos';
const container = document.querySelector('.container');
const input = document.querySelector('#text');
const list = document.querySelector('.list');
const select = document.querySelector('#selectLanguage');

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

function createLink(tag, clase, text, atri1, value1, atri2, value2) {
  const linkElement = createTagwithText(tag, clase, text);
  linkElement.setAttribute(atri1, value1);
  linkElement.setAttribute(atri2, value2);
  return linkElement;
}

function reposAdalab() {
  fetch(uri)
    .then(response => response.json())
    .then(data => {

      console.log(data);

      let repoName = [];
      let description = [];
      let language = [];

      let search = input.value;
      console.log('search', search);

      const hijosremove = list.querySelectorAll('.list__item');
      for (let k = 0; k < hijosremove.length; k++) {
        list.removeChild(hijosremove[k]);
      }
      
      for (let i = 0; i < data.length; i++) {

        if (data[i].name.toUpperCase().includes(`${search.toUpperCase()}`) && search !== "") {
        if (data[i].language === `${select.value}`) {
          const liElement = createEl('li');
          liElement.classList.add('list__item');
          repoName[i] = createLink('a', 'character__title', `${data[i].name}`, 'href', `${data[i].html_url}`, 'target', '_blanck');
          description[i] = createTagwithText('p', 'house__title', `${data[i].description}`);
          const divElement = createEl('div');
          const disc = createTagwithText('span', 'disc__style', '');
          language[i] = createTagwithText('span', 'language__title', `${data[i].language}`);
          if (data[i].language === 'JavaScript') {
            disc.classList.add('javascript');
          }
          else if (data[i].language === 'CSS') {
            disc.classList.add('css');
          }
          else {
            disc.classList.add('html');
          }
          divElement.appendChild(disc);
          divElement.appendChild(language[i]);
          liElement.appendChild(repoName[i]);
          if (data[i].description !== null) {
            liElement.appendChild(description[i]);
          }
          liElement.appendChild(divElement);
          list.appendChild(liElement);
        }
      }
     }
    });
}

select.addEventListener('change', reposAdalab);
input.addEventListener('keyup', reposAdalab);