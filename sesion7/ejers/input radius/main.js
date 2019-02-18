'use strict';


const body = document.body;
const input = document.querySelectorAll('input');

function scrollD(event) {
  const b = event.currentTarget;

  if (b === input[0]) {
    body.classList.remove('salmon','cyan')
    body.classList.add('peru');
  } 
  if (b === input[1]) {
    body.classList.remove('peru','cyan')
    body.classList.add('salmon');
  }
  if (b === input[2]) {
    body.classList.remove('salmon','peru')
    body.classList.add('cyan');
  }
  
}
input[0].addEventListener('click', scrollD);
input[1].addEventListener('click', scrollD);
input[2].addEventListener('click', scrollD);