'use strict';


const body = document.body;
const window2 = document.window;

function scrollD(event) {
  const b = event.currentTarget;
  /*
  if (scrollY > 300) {
    body.classList.add('peru');
  } else if (body.scrollY > 700) {
    body.classList.add('cyan');
  }*/

  var coordenadaX = event.pageX;
  var coordenadaY = event.pageY;

  if (coordenadaY > 300) {
    body.classList.add('peru');
  } else if (coordenadaY > 700) {
    body.classList.remove('peru');
  }
  else{
    body.classList.add('marsala');
  }
  console.log('X' + coordenadaX);
  console.log('y' + coordenadaY);
}

function resi() {
  body.classList.add('peru');
}

body.addEventListener('click', scrollD);