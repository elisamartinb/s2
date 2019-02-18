'use strict';

const input = document.querySelectorAll('input');

const button = document.querySelector('.btn');

function showMovies (){
  const MoviesUser = [];

  for (let i=0; i< input.length; i++){
    MoviesUser[i] = input[i].value;

  }

  for (const movie of MoviesUser) {
    console.log (`"${movie}" was nominated to 89th Academy Awards`);
  }
}




button.addEventListener('click',showMovies);

