'use strict';

const links = document.querySelectorAll('a');

function link(event){
    event.preventDefault();
}

links[0].addEventListener('click',link);
links[1].addEventListener('click',link);
links[2].addEventListener('click',link);