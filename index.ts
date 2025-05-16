let num:number = 5;
num = 5;


// num = "dsadasda";

let texto:string = 'Hola Mundo!';

console.log('Prueba',texto)

let age:number = 10;

// age = 'hola'

function log(message:string): string {
    console.log(message)

    return ` Tienes un mensaje: ${message}`
}

interface Hero {
    name :string,
    powers: object,
    age?: number
};

let superman: Hero = {
    name: 'Clark Kent',
    powers: ['fly','super strong','laser'],
    age: 35
};