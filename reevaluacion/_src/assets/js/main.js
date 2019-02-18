'use strict';

const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const radioInputs = document.querySelectorAll('input');

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

function searchPairs(event) {
  event.preventDefault();
  removeLastSearch();
  let option = '';
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked === true) {
      option = radioInputs[i].value;
      console.log('number', option);
    }
  }

  fetch('https://raw.githubusercontent.com/Adalab/cards-data/master/'+option+'.json')
    .then(response => response.json())
    .then(data => {

   console.log('data',data);

      for (let i = 0; i < data.length; i++) {
        const liElement = createTagwithText('li', 'list__item', '');
        const images = createImg('img', 'pokemon__image', 'src', 'alt', `${data[i].image}`, `${data[i].pair}`);
        images.classList.add('poke');
        const imagesAdalab = createImg('img', 'adalab__image', 'src', 'alt', 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB', 'Adalab');
        liElement.appendChild(images);
        liElement.appendChild(imagesAdalab);
        list.appendChild(liElement);
        liElement.addEventListener('click',findPair);
      }

      let numbers =[];
      let acc = 0;
      let pokeUp=[];
      let adalabPlace=[];

      function findPair(event) {
        if(acc<2){
          const imagesPoke = event.currentTarget.querySelector('.poke');
          const imagesAda = event.currentTarget.querySelector('.adalab__image');
          console.log('pair number',imagesPoke.alt);
          if (imagesPoke.classList.contains('pokemon__image')) {
            imagesPoke.classList.remove('pokemon__image');
            imagesAda.classList.add('pokemon__image');
          } else {
            imagesPoke.classList.add('pokemon__image');
            imagesAda.classList.remove('pokemon__image');
          }
          acc++;
          numbers.push(imagesPoke.alt);
          pokeUp.push(imagesPoke);
          adalabPlace.push(imagesAda);
          console.log('numbers array',numbers);
          console.log('acc',acc);
          console.log('array pojemos up',pokeUp);
          if(numbers[0] === numbers[1]){
            console.log('son pareja!!');
            pokeUp=[];
          adalabPlace=[];
            
          }
          else{
            if(numbers[0] !== numbers[1]){
              function removePokemon(){
                for(let i=0; i<pokeUp.length; i++){
                  pokeUp[i].classList.add('pokemon__image');
                  adalabPlace[i].classList.remove('pokemon__image');
                }
               
              }
              setTimeout(removePokemon, 3000);
            }
           
          }
          //si meto aqui dentro un if directamente cuando sea 2 me lo pone a 0 pero deja pinchar mas de dos
        }else{
          acc =0;
          numbers=[];
          pokeUp=[];
          adalabPlace=[];
          console.log('acc else',acc);
          console.log('numbers else',numbers);
          
        }
        
        
      }

    });
}

btn.addEventListener('click', searchPairs);



