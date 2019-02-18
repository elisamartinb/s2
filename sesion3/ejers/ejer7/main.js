'use strict';

const year = 3;
const rest = year % 4;

if (rest === 0){
    console.log(`El año ${year} es bisiesto`);
}

else {

    console.log(`El año ${year} no es bisiesto`);

    while (rest != 0){
        year = year + 1;
    }
}