'use strict';

/* otra forma
isBorderbox 
function box(isBorderbox,contentWidth,padding,border){
    
    if (isBorderbox === true){
        const width = contentWidth-(2*padding);
        return width;
    }
    else{
        const width = contentWidth + (2*padding) + (2*border);
        return width;
    }
}

console.log(box(false,50,7,7)); */

//ejer 5

const box2 = (isBorderbox,contentWidth,padding,border) => {
    if (isBorderbox === true){ //!!isBoxmodel te asegura que lo que entra es true 
        const width = contentWidth-(2*padding);
        return width;
    }
    else{
        const width = contentWidth + (2*padding) + (2*border);
        return width;
    }
}
console.log(box2(false,50,7,7));