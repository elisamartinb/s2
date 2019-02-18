'use strict';



function workWithMovies(){
    const movie = [
        'The worst movie',
        'The best movie',
        'Movie xxx'
    ];
    
    movie[2] = 'Altea la tonta';
    
    console.log(movie);
}

workWithMovies();

for (let i=0; i<10 ;i++){
    console.log('voy por la vuelta' + (i+1));
}

