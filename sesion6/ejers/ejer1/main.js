'use sctrict';

const adalaber1 = {
    name : 'Altea',
    age : 34,
    job : 'periodista',
}

adalaber1.run = () => alert("EStoy corriendo");


adalaber1.runMarathon = (distance) => `Una maraton de ${distance} `;

console.log(`${adalaber1.run} ${adalaber1.runMarathon(50)}`);

console.log (`${adalaber1.run}`);
console.log (adalaber1.run);

console.log(`Mi nombre es: ${adalaber1.name} tengo ${adalaber1.age} y soy ${adalaber1.job}`);
