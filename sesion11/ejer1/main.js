'use strict';

const list = document.querySelector('.list');
const numbers = [1,2,3];


for (let i=0; i< numbers.length; i++){
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newItem.appendChild(newContent);
    
    list.appendChild(newItem);
}
