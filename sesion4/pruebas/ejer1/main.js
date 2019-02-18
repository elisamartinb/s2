'use strict';
//ejer 1
const a = 3;
const b = 6;

function mult (a,b) {
    const result = a*b;

    return result;

}

console.log(`El resultado es ${mult(3,3)}`);

//ejer2
const c = 3;
const d = 6;
const e = 6;
const f = 4;

function media (c,d,e,f) {
    const result = (c+d+e+f)/4;

    return result;

}

console.log(`El resultado es ${media(6,80,67,4)}`);

//ejer3

const price = 10;

function iva (price){
    const ivam = 0.21*price;
    const total = price + ivam;
    return `El precio sin iva es ${price}, el iva ${ivam} y el total a pagar ${total} que lo disfrute`;

}

//ejer4

const bor = 'border';
const borde = bor === 'bor';
const padding = 6;
const contentw = 80;
const border= 5;
let width;

function bord (borde, padding, contentw, border){
    if(borde === bor){
        let width = contentw;
        console.log(`EL modelo de caja es BORDER`);
        return width;
    }
    else {
        let width = contentw + (padding*2) + (border*2);
        console.log(`EL modelo de caja es CONTENT`);
        return width;
    } 
}
//llamo a funcion dentro de funcion 
const tres= 3;
function bordplus (width,tres){
    let final = width + tres;
    console.log(`El ${final}`);

}
bordplus (width,tres);
console.log(`El ancho total del contenido es ${bord(1,6,80,5)}`);
console.log(width);

//prueba variables locales y globales

let aa = 10;
let bb =20;

function sum (aa,bb) {
    aa = 2;
    bb = 3;
    let sumar = aa+bb;
    console.log(aa);
    return sumar;
}

sum (2,3);
console.log(aa);
//

let cc = 'Hola';
let dd =20;

function sumi () {
    cc = 'Adios';
    console.log(cc);

}

sumi ();
console.log(cc);