'use strict';

const paragraphs = document.querySelectorAll('p');
let par2 = paragraphs.length+2;
const tree = document.querySelector('.tree');

function tree(tall){
  for (var i = 0; i < paragraphs.length; i++) {
    
    for (var j = 0 ; j<(par2); j++){
      paragraphs[i].innerHTML += '&nbsp';
    }
    par2 = par2 -2 ;
    
    paragraphs[i].innerHTML += '▲';
    for (var j = 1; j <= i; j++){
      paragraphs[i].innerHTML += '▲▲';
    }
    
  }
}

tree(6);

