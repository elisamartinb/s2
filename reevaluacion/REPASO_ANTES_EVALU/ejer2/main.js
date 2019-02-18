'use strict';

const data = [
    {
        title: 'Asteroids 101',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Life on Mars',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Martians invade Earth',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Humans aren\'t real',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Space The Final Frontier',
        image: 'https://via.placeholder.com/200x100'
    }
];

const list = document.querySelector('.news');

function createEl(tag) {
    return document.createElement(tag);
}

function createTagwithText(tag, clase, text) {
    const el = createEl(tag);
    el.classList.add(clase);
    return el.appendChild(createText(text));
}

function createText(text) {
    return document.createTextNode(text);
}


function createImg(tag,clase,atri1,atri2,value1,value2){
    const imgElement = createEl(tag);
    imgElement.classList.add(clase);
    imgElement.setAttribute(atri1,value1);
    imgElement.setAttribute(atri2,value2);
    return imgElement;
}

let news = [];
let images = [];
for (let i = 0; i < data.length; i++) {
    const liElement = createEl('li');
    liElement.classList.add('news__item');
    images[i] = createImg('img','news__image','src','alt',`${data[i].image}`,`${data[i].title}`);
    news[i] = createTagwithText('h2', 'news__title', `${data[i].title}`);
    liElement.appendChild(news[i]);
    liElement.appendChild(images[i]);
    list.appendChild(liElement);
}

const lis = document.querySelectorAll('.news__item');

for(let i=0; i<lis.length; i++){
    const search = lis[i].innerHTML;
    console.log(search);
    if(search.includes('Mars')||search.includes('Martian')){
        lis[i].classList.add('news__item--from-mars');
    }
}