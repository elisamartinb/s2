'use strict';

const container = document.querySelector('.container');

function createEl(tag) {
    return document.createElement(tag);
}

function createTagwithClass(tag) {
    let el=[];
    for(let i=0; i<5; i++){
        el[i] = createEl(tag);
        el[i].classList.add(`div__item`,`item--${i}`);   
    }
    console.log('array el', el);
    return el;
}

const arrayEl = createTagwithClass('div');


function addEltoContainer(childEl,parentEl){
    for(const element of childEl){
        parentEl.appendChild(element);
    }
}

addEltoContainer(arrayEl,container);
const divs = document.querySelectorAll('.div__item');

function addColortodivs(){
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const palettes = data.palettes[0].colors;
      console.log(palettes);
      let i=0;
      console.log(divs);
      for(const element of palettes){
        
        divs[i].style.backgroundColor = `#${element}`;
        i++;
      }
    });
}

addColortodivs();