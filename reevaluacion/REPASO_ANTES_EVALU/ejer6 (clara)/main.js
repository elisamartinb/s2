'use strict';

const uri = 'https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json';
const container = document.querySelector('.container');

function fetchPalette () {
  fetch(uri)
    .then(response => response.json())
    .then(data => {
      const palettesArr = data.palettes;
      console.log(palettesArr);

      for (let i = 0; i < palettesArr.length; i++) {
        container.innerHTML += `<div class="palette palette${[i]}"></div>`;
        const palette = document.querySelector(`.palette${[i]}`);
        console.log('palette cada vuelta', palette);

        const colorsArr = palettesArr[i].colors;
        console.log('color', colorsArr);

        for (let i = 0; i < colorsArr.length; i++) {
          palette.innerHTML += `<div class="color__item color__item${[i]}"></div>`;
          //const chil = document.querySelector('.palette').children;
          const itemColor = palette.querySelectorAll(`.color__item${[i]}`);
          for (const color of itemColor){
          color.style.backgroundColor = `#${colorsArr[i]}`;}
     
        } 
       
      }
    });
}

fetchPalette();