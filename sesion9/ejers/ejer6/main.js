'use strict';

const btn = document.querySelector('button');
const p = document.querySelector('p');
//const input = document.querySelector('input');

function randomDog() {

  fetch('https://api.rand.fun/number/integer?max=87')
    .then(response => response.json())
    .then(data => {
      console.log('number response: ', data.result)
      fetch('https://dog.ceo/api/breeds/list')
        .then(breedsResponse => breedsResponse.json())
        .then(breedsData => {
          const breeds = breedsData.message;
          console.log('razas numero: ', breeds.length)
          console.log('raza: ', breeds[data.result])
          p.innerHTML = 'La raza eleginda es :' + breeds[data.result];
          //return fetch('https://dog.ceo/api/breed/' + breeds[value] + '/images/random');
          fetch(`https://dog.ceo/api/breed/${breeds[data.result]}/images/random`)
          .then(imageResponse => imageResponse.json())
          .then(imageData => {
            const img = document.querySelector('img');
            console.log('image :', imageData.message);
            img.src = imageData.message;
            img.alt = 'Un perro';
        })
        
        });
    })

}

btn.addEventListener('click', randomDog);