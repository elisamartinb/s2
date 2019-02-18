'use strict';
const text = document.querySelector('p');
const pauseBtn = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');
let counter = 0;
let temp;

const incrementAndShowCounter = () => {
    counter++;
    text.innerHTML = counter;
    if (counter === 10) {
        clearInterval(temp);
    }
}

incrementAndShowCounter();

/*function pauseFun() {

}

function continueFun() {
    incrementAndShowCounter();
}

temp = setInterval(incrementAndShowCounter, 1000);

pauseBtn.addEventListener('click', pauseFun);
continueBtn.addEventListener('click', continueFun);*/

function suma(){
const mult= 2+3;
return mult;
}

const hola = suma();
console.log(hola);