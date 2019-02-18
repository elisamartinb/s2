'use strict';

const paragraphs = document.querySelectorAll('p');
let par2 = paragraphs.length+2;

for (var i = 0; i < paragraphs.length; i++) {
    
  for (var s = 0 ; s<(par2); s++){
    paragraphs[i].innerHTML += '&nbsp;';
  }
  par2 = par2 -2 ;
  
  paragraphs[i].innerHTML += '*';
  for (var j = 1; j <= i; j++){
    paragraphs[i].innerHTML += '**';
  }
  
}
