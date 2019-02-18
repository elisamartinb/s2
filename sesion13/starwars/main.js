'use strict';

const list = document.querySelector('.list');
const btn = document.querySelector('.btn');
const select = document.querySelector('#starWars');


function peopleFilm() {
    const text = document.querySelector('input');
    let selected = select.value;
    console.log(selected);
    list.innerHTML = "loading";
    fetch(`https://swapi.co/api/${selected}/?search=${text.value}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let ulContent = '';
            list.innerHTML = '';
            for (let i = 0; i < data.count; i++) {
                if (selected === "people" || selected === "vehicles" || selected === "species" || selected === "planets") {
                    const name2 = data.results[i].name;
                    let listContent = `<li>${name2}</li>`;
                    ulContent += listContent;
                } else if (selected === "films") {
                    const pel = data.results[i].title;
                    console.log(data.results);
                    let listContent = `<li>${pel}</li>`;
                    ulContent += listContent;
                }
            };
            list.innerHTML = ulContent;
        })
}

btn.addEventListener('click', peopleFilm);