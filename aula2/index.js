// let x = 5;
// let y = 2;

// let sum = x + y;
// let subtract = x - y;
// let multiply = x * y;
// let divide = x / y;
// let divisionRest = x % y;

// console.log(sum, subtract, multiply, divide, divisionRest);

// x++;
// y--;
// console.log(x, y);

// let celsius = 60;
// let farenheitResult = celsius * 1.8 + 32;

// console.log(`A conversão de ${celsius}ºC para Farenheit é ${farenheitResult}ºF`);

// let x = 3;
// let y = 5;

// let addResult = x + y;
// let subResult = x - y;
// let multiplyResult = x * y;
// let divideResult = x / y;
// let remainderResult = x % y;

// console.log(`Addition ${x} with ${y} is ${addResult}`);
// console.log(`Subtraction ${x} with ${y} is ${subResult}`);
// console.log(`Multiplication ${x} with ${y} is ${multiplyResult}`);
// console.log(`Division ${x} with ${y} is ${divideResult}`);
// console.log(`Remainder ${x} with ${y} is ${remainderResult}`);

// let fullName = "Niño Arenas";
// let weight = 80;
// let height = 1.8;

// let imc = weight / height ** 2;

// console.log("Niño pesa " + weight + "kl e mede " + height + "m, logo tem um índice de massa corporal de " + Math.round(imc) + "kg/m");

let height = 3;
let base = 3;
let width = 5;

let areaQuadrado = base * base;
let areaRectangle = height * width;
let areaTriangle = (base * height) / 2;

console.log(`Quadrado = ${areaQuadrado}`);
console.log(`Retangulo = ${areaRectangle}`);
console.log(`Triangulo = ${areaTriangle}`);

// let biggerArea = areaQuadrado > areaRectangle && areaTriangle ? "\nQuadrado é maior" : areaRectangle > areaTriangle ? "\nRetangulo é maior" : "\nTriangulo é maior";

// if (areaTriangle < areaQuadrado && areaQuadrado < areaRectangle) {
//   console.log("Rectangle");
// }

let biggerArea = areaTriangle < areaQuadrado && areaQuadrado < areaRectangle ? "Rectangle" : undefined;

console.log(biggerArea);
