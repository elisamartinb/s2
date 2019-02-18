'use strict';

const button = document.querySelectorAll('.btn');
const input = document.querySelectorAll('input');
const price = document.querySelectorAll('.price');
const pay = document.querySelector('h4');

const prices = [5,10,20];
function fold(event) {

    const newButton = event.currentTarget;
    /*   for (const triger of section){
           triger = event.target;
       } */
    for (let i = 0; i < section.length; i++) {
        if (event.currentTarget === button[i]) {

            if (section[i].classList.contains('hide-box')) {
                // Elimina la clase
                section[i].classList.remove('hide-box');
            } else { // Sino
                // Añade la clase hidden
                section[i].classList.add('hide-box');
            }
        }
    }
}
let acc = 0;
let totalPay = 0;
function add(event) {
    const newButton = event.currentTarget;

    for (let i = 0; i < button.length; i++) {
        if (event.currentTarget === button[i]) {
            if (acc === 0) {
                acc = parseInt(button[i].innerHTML) + acc;
                button[i].innerHTML = acc;
                price[i].innerHTML = prices[i]*acc;
            } else {
                acc = parseInt(button[i].innerHTML) + 1;
                button[i].innerHTML = acc;
                price[i].innerHTML = prices[i]*acc;
            }
        }
    }
    console.log(acc);
    total();
}


function total(){

    for (let i = 0; i < button.length; i++) {
        if (input[i].checked === true) {
            totalPay = price[i].innerHTML;
        }

    }

    pay.innerHTML = totalPay;
}



button[0].addEventListener('click', add);
button[1].addEventListener('click', add);
button[2].addEventListener('click', add);