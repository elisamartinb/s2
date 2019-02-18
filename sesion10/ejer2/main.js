'use strict';

const btn = document.querySelector('.btn');
const peopleList = document.querySelector('.people-list');

function peopleOfFilm() {
    const text = document.querySelector('.text');

    {fetch('https://swapi.co/api/people/?search=' + text.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let ulContent = '';
            for (let i = 0; i < data.count; i++) {
                const gender2 = data.results[i].gender;
                const name2 = data.results[i].name;
                const nameContent = `<li>${name2}</li>`;
                const genderContent = `<li>${gender2}</li>`;
                ulContent += nameContent + genderContent;
            };
            peopleList.innerHTML = ulContent;
            localStorage.setItem('person', JSON.stringify(data));//aqui ya tengo guardados los 4 o los resultados que sean pero todo
        })}
};

btn.addEventListener('click', peopleOfFilm);