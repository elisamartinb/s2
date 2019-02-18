'use strict';

const input = document.querySelector('input');
const btn = document.querySelector('button');
const divNames = document.querySelector('.name');



function findUser() {
  const inputValue = input.value;
  fetch(`https://api.github.com/users/${inputValue}`)
    .then(response => response.json())
    .then(data => {
      console.log('Org data response: ', data);

      const list = document.querySelector('.list');
      const sentence = data.name;
      const separatedSen = sentence.split(" ");


      const name = separatedSen[0]; //ya tengo Elisa solo
      console.log(separatedSen[0]);
      console.log(name.length);
      //const letter = name.substr(0,1); //devuelve la E
      // const letter2 = name.substr(1,1); //devuelve la L, el primer indice cual y el otro la longitud 1 una letra
      //console.log(letter);
      // console.log(letter2);
      let styles = getComputedStyle(list);
      console.log(styles);
      const gridTemplateColumns = styles.gridTemplateColumns;

      list.style.gridTemplateColumns = `repeat(${name.length}, 1fr)`;

      console.log(gridTemplateColumns);


      //list.style.gridTemplateColumns = (`${name.length}`);
      let ulContent = '';

      for (let i = 0; i < name.length; i++) {
        const letter = name.substr(i, 1);
        const letterContent = `<li class="letter">${letter}</li>`;
        ulContent += letterContent;
      }
      list.innerHTML = ulContent;
    })

};

btn.addEventListener('click', findUser);
