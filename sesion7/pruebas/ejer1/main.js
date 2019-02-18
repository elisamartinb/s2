'use strict';

const options = [
    'coche',
    'viaje',
    'crucero',
    'llavero'
]

for (let i = 0; i < 20; i++) {
    console.log(`Voy por la vuelta  ${i + 1}`);
}

let acc = 0;

for (let i = 0; i < 10; i++) {
    acc = acc + 2;
}

console.log(`EL valor de acc es: ${acc}`);

let luna = 2017;

for (let i = 0; i < 3; i++) {
    luna = luna + 3;
    console.log(`La proxima luna es en el: ${luna}`);
}

let acu = 0;
const num = [
    7,
    7,
    7
]

function average(num) {
    for (let i = 0; i < 3; i++) {
        acu += num[i];

    }
    const media = acu / (num.length);
    console.log(`La media: ${num.length}`);

}

average(num);
const inputa = document.querySelector('.inputa');
const inputb = document.querySelector('.inputb');
const send = document.querySelector('.send');
const Nominees = [];

function showMovies() {

    Nominees[0]=inputa.value;
    Nominees[1]=inputb.value;

    for (const movie of Nominees) {
        console.log(`"${movie}" was nominated to 89th Academy Awards`);
    }
    
}


send.addEventListener('click', showMovies);

const randomData = [
    [4,5],
    'hello',
    123123123
  ];

  