'use strict';

const is = document.querySelectorAll('.teacher');
const text = document.querySelectorAll('.favorite');

function changeColor(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    // Guardamos en una constante el elemento 
    // sobre el que pusimos el `listener
    const selectedTeacher = event.currentTarget;
    selectedTeacher.classList.toggle('teacher--selected');
    //const teacher = event.target;
    //teacher[0] = 'hpla';

}

function changeText(event) {
    //is[0].removeEventListener('click', changeColor);
    event.stopPropagation();
    // Guardamos en una constante el elemento 
    // sobre el que pusimos el `listener`
    //const nteacher = event.target;
    //event.target = is[i];
   
   const selectedText = event.currentTarget;
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);

    // 
    for (let i = 0; i < text.length; i++) {

        if (event.target  === text[i]) {
            if (text[i].innerHTML  === 'Añadir') {
                text[i].innerHTML = 'quitar';
            } else {
                text[i].innerHTML = 'Añadir';

            }

        }
    }

}
is[0].addEventListener('click', changeColor);
is[1].addEventListener('click', changeColor);
is[2].addEventListener('click', changeColor);

text[0].addEventListener('click', changeText);
text[1].addEventListener('click', changeText);
text[2].addEventListener('click', changeText);
//is[0].addEventListener('click', handleFruitClick2);

//is[0].addEventListener('click', handleFruitClick2);
