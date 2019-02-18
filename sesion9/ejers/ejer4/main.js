'use strict';

const input = document.querySelector('input');
const btn = document.querySelector('button');



  function findOrg(){
      const inputValue = input.value;
    fetch(`https://api.github.com/orgs/${inputValue}`)
    .then(response => response.json())
    .then (data => {
        console.log('Org data response: ', data);
        fetch(`${data.repos_url}`)
    .then(response2 => response2.json())
    .then (data2 => {
        console.log('Org data response2: ', data2);
        const ul = document.querySelector('ul');
      const repos = data2;
      let ulContent = '';
      for (const repo of repos) {
        const repoContent = `<li>${repo.name}</li>`;
        ulContent += repoContent;
      }
      ul.innerHTML = ulContent;
    })
    })
    

/*
    .then(dataRepo => {
      console.log('Org data response: ', dataRepo);
  
      const ul = document.querySelector('ul');
      const breeds = data.message;
      let ulContent = '';
  
      for (const breed of breeds) {
        const breedContent = `<li>${breed}</li>`;
        ulContent += breedContent;
      }
      ul.innerHTML = ulContent;
    })
    .catch(error => console.log(`Ha sucedido un error: ${error}`));*/
  }

  btn.addEventListener('click',findOrg);