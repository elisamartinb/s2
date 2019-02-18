'use strict';

const button = document.querySelectorAll('.btn');
const section = document.querySelectorAll('.hide-section');

function fold(event) {

    /*  for (let i=0; i< hideBoxes.length ; i++){
          
      }*/
    //const newButon = hideBoxesevent.currentTarget;

    //const newEvent = event.currentTarget;
    //elements.classList.toggle('hide-box');

    /*
    for (const elements of section) {
        if (elements.classList.contains('hide-box')) {
            // Elimina la clase
            elements.classList.remove('hide-box');
        } else { // Sino
            // Añade la clase hidden
            elements.classList.add('hide-box');
        } */
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

button[0].addEventListener('click', fold);
button[1].addEventListener('click', fold);
button[2].addEventListener('click', fold);