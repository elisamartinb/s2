'use strict';

const div = document.querySelector('div');
let divHeight = div.offsetHeight;
console.log(divHeight)

//divHeight = 1/3 * divHeight; asi no seria hay que utilizar .style
const newHeight = 1/3 * divHeight;


div.style.height = `${newHeight}px`;


//div.style.height = `${newHeight}`;
console.log('nueva altura' + div.style.height);