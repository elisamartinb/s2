'use strict';

const select = document.querySelector('#colors');
const body = document.querySelector('body');
const colors = document.querySelectorAll('options');

let index;
function changeColor(event){
 
  console.log(event.currentTrget);
index = select.selectedIndex;
console.log(select.selectedIndex);
console.log(select.options);
if(index === 2){
  //if(body.classList.contains('salmon')){
  //  body.classList.remove('salmon')
 // }
  //else{
    body.classList.remove('peru','cyan','green');
    body.classList.add('salmon');
  //}
}

if(index === 3){
  /*if(body.classList.contains('peru')){
    body.classList.remove('peru');
  }
  else{
    body.classList.add('peru');
  }*/
  body.classList.remove('salmon','cyan','green');
  body.classList.add('peru');
}

if(index === 4){
  body.classList.remove('salmon','peru','green');
  body.classList.add('cyan');
}

if(index === 1){
  body.classList.remove('salmon','peru','cyan');
  body.classList.add('green');
}

}

select.addEventListener('click',changeColor);