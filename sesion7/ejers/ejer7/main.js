'use strict';


const adalabers = [
  {
    name: 'Maria',
    age: '29',
    job: 'diseñadora'
  },
  {
    name: 'Lucia',
    age: '31',
    job: 'ingeniera quimica'
  },
  {
    name: 'Susana',
    age: '34',
    job: 'periodista'
  },
  {
    name: 'Rocio',
    age: '25',
    job: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: '21',
    job: 'diseñadora'
  }
];

function countAdalabers() {
  console.log(`EL numero total de adalabers en el listado es: ${adalabers.length}`);
}
countAdalabers(); //da igual si meto el array como parametro o no

let acc = 0;
function averageAge() {
  for (let i = 0; i < adalabers.length; i++) {
    acc = acc + parseInt(adalabers[i].age);
  }

  console.log(`Edad media: ${acc / adalabers.length}`);
}

averageAge();

function theYoungest() {
  const min = Math.min(adalabers[0].age, adalabers[1].age, adalabers[2].age, adalabers[3].age, adalabers[4].age);
  console.log(min);
  return min;
}

theYoungest();
let designers = 0;
function countDesigners() {
  for (let i = 0; i < adalabers.length; i++) {
    if(adalabers[i].job === 'diseñadora'){
      designers = designers + 1;
    }
    
  }
  console.log('EL numero de diseñadoras: ' + designers);
}

countDesigners();