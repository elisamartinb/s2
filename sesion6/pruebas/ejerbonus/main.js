'use strict';

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const select = document.querySelector('#face');
const bod = document.querySelector ('body');

/*function SelectElement(id, valueToSelect)
{    
    let element = document.getElementById(id);
    element.value = valueToSelect;
  
}*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
//const valueToSelect = select.value;
//valueToSelect = happy;
function drawFace (){
  //SelectElement("face", valueToSelect);
  
  if(select.value === "happy"){
    box.innerHTML = ':)';    
  }
  else {
    box.innerHTML = ':(';
  }
  
 // let result = getRandomInt(100);
  
  if(getRandomInt(100) % 2 === 0){
    bod.classList.toggle('pink');
  }
  else {
    bod.classList.toggle('black');
  }
  
}

btn.addEventListener('click', drawFace);



