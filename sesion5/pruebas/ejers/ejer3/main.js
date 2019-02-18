'use strict';


// elemento de HTML
const par = document.querySelector('.textp');

// handler
function write() {
  par.innerHTML += 'Elit magna voluptate excepteur magna esse non mollit nisi mollit. Eiusmod cillum nisi laborum commodo sint. Minim proident consectetur est culpa velit in cillum fugiat pariatur nulla ipsum minim aute tempor. Non consectetur aliqua occaecat aute amet magna nostrud culpa.'+'<br/>';
}


// listener sobre el elementono, con tipo de evento y handler
par.addEventListener('mouseenter', write);


