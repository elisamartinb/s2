'use strict';

const placeholdBox = '<img src="http://placehold.it/300x300">';
let variable = '';



const avatar = document.querySelector('.box');

if (variable || placeholdBox) {
    avatar.innerHTML = placeholdBox;
}


variable = '<img src="http://www.fillmurray.com/300/300';

if (variable && placeholdBox) {
    avatar.innerHTML = variable;
}






