'use strict';

const containers = document.querySelectorAll('.container');

function createEl(tag) {
    return document.createElement(tag);
}

function createTagwithClass(tag) {
    let el = [];
    for (let i = 0; i < 5; i++) {
        el[i] = createEl(tag);
        el[i].classList.add(`div__item`, `item--${i}`);
    }
    return el;
}

//otra funcion pq se repiten
const arrayfive1 = createTagwithClass('div');
const arrayfive2 = createTagwithClass('div');
const arrayfive3 = createTagwithClass('div');
const arrayfive4 = createTagwithClass('div');
const arrayfive5 = createTagwithClass('div');


function addEltoContainer(parentEl, child) {
    for (let i = 0; i < child.length; i++) {
        parentEl.appendChild(child[i]);
    }
}

//se podria hacer una funcion pq se repiten 
addEltoContainer(containers[0], arrayfive1);
addEltoContainer(containers[1], arrayfive2);
addEltoContainer(containers[2], arrayfive3);
addEltoContainer(containers[3], arrayfive4);
addEltoContainer(containers[4], arrayfive5);

const chil1 = document.querySelector('.cont-1').children; //los 5 hijos de la fila
const chil2 = document.querySelector('.cont-2').children;
const chil3 = document.querySelector('.cont-3').children;
const chil4 = document.querySelector('.cont-4').children;
const chil5 = document.querySelector('.cont-5').children;
//console.log('child', chil); //child[0]me da el 0 es como un array

console.log('container0', containers[0]);

function addColortodivs() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);

           // console.log('aplletes', data.palettes[1].colors);

           console.log('c1', chil1[1]);
           console.log('c3', chil3[1]);
            let j=0;
            for (let i = 0; i < data.palettes.length; i++) {
        
                    chil1[i].style.backgroundColor = `#${data.palettes[0].colors[j]}`;
                    chil2[i].style.backgroundColor = `#${data.palettes[1].colors[j]}`;
                    chil3[i].style.backgroundColor = `#${data.palettes[2].colors[j]}`;
                    chil4[i].style.backgroundColor = `#${data.palettes[3].colors[j]}`;
                    chil5[i].style.backgroundColor = `#${data.palettes[4].colors[j]}`;
                    j++;
    
            }

            /*chil1[0].style.backgroundColor = `#${data.palettes[0].colors[0]}`;

            chil1[1].style.backgroundColor = `#${data.palettes[0].colors[1]}`;

            chil1[2].style.backgroundColor = `#${data.palettes[0].colors[2]}`;

            chil1[3].style.backgroundColor = `#${data.palettes[0].colors[3]}`;

            chil1[4].style.backgroundColor = `#${data.palettes[0].colors[4]}`;*/
            /*for (let i = 0; i < data.palettes.length; i++) {
                for (let j = 0; j < data.palettes[i].colors.length; j++) {
                    chil2[i].style.backgroundColor = `#${data.palettes[1].colors[j]}`;
                }
            }

            for (let i = 0; i < data.palettes.length; i++) {
                for (let j = 0; j < data.palettes[i].colors.length; j++) {
                    chil3[i].style.backgroundColor = `#${data.palettes[2].colors[j]}`;
                }
            }

            for (let i = 0; i < data.palettes.length; i++) {
                for (let j = 0; j < data.palettes[i].colors.length; j++) {
                    chil4[i].style.backgroundColor = `#${data.palettes[3].colors[j]}`;
                }
            }
            for (let i = 0; i < data.palettes.length; i++) {
                for (let j = 0; j < data.palettes[i].colors.length; j++) {
                    chil5[i].style.backgroundColor = `#${data.palettes[4].colors[j]}`;
                }
            }*/

        });
}

addColortodivs();

/*function childOfcontainers(data,parent, numberPallete){
        for (let j = 0; j < data.palettes[numberPallete].colors.length; j++) {
            parent[numberPallete].style.backgroundColor = `#${data.palettes[numberPallete].colors[j]}`;
        }
}*/

//childOfcontainers(chil3, 3);