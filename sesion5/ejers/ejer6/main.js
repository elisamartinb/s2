'use strict';

const body = document.body;

function chageColor(KeyboardEvent) {
  const x = KeyboardEvent.key;
  if (x === 'r' || x === 'R') {
    console.log("You pressed de r key");
    body.classList.remove('purple');
    body.classList.add('red');
  }
  if (x === 'm' || x === 'M') {
    console.log("You pressed de m key");
    body.classList.remove('red');
    body.classList.add('purple');
  }
}

body.addEventListener('keyup', chageColor);