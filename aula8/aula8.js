//Resumo sobre métodos e propriedades de tipos primitivos

// //String
// let stringExample = " This is a string ";

// //Exemplo 1 - Por todos os caracteres maiusuculos 
// console.log(stringExample.toUpperCase());

// //Exemplo 2 - Por todos os caracteres minusculos 
// console.log(stringExample.toLocaleLowerCase());

// //Exemplo 3 - Remove espaço em branco no início e fim da string
// console.log(stringExample.trim());

// //Exemplo 4 - Concatenar strings
// console.log(stringExample.concat("and another string")); // stringExample + " and another string";

// //Exemplo 5 - Divide uma frase em duas através de um separador
// console.log(stringExample.split("i"));

// //Exemplo 6 - Devolve uma substring com base nos parametros start e end
// console.log(stringExample.slice(0,5));

// //Exemplo 7 - Substitui a string do primeiro parametro pela string do segundo
// console.log(stringExample.replace("string","number"));

//Arrays

let array = [];

let arrayConstructor = new Array(10); //podemos definir o tamanho para um array

let numbers = [4,2,6,236,235,4,7,47,325,12,43,437,75,4];

//Exemplo 1 - Calcular length do array
// console.log(numbers.length);

//Exemplo 2 - Sort -> ordenar arrays - por ordem crescente
// console.log(numbers.sort((a,b) => a - b ));


//Exemplo 3 - Sort -> ordenar arrays - por ordem decrescente
// console.log(numbers.sort((a,b) => a - b ).reverse());
// console.log(numbers.sort((a,b) => b - a ));

//Exemplo 4 - Adicionar e remover ao final do array
// numbers.push(10);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);

//Exemplo 5 - Splice e do slice
//Splice altera o array original
// console.log(numbers.splice(-1));
// console.log(numbers.slice(-1)); //Mesma coisa mas não altera array original
// console.log(numbers);

//Exemplo 6 - Adicionar e remover ao início do array
// numbers.unshift(10);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

//Exemplo 7 - Map
// console.log(numbers.map(number => number * 10));

//Exemplo 8 - Filter
// console.log(numbers.filter(number => number > 10));

//Exemplo 8 - Reduce
// console.log(numbers.reduce((sum,curr) => sum + curr ,0));

// fetch("https://random-data-api.com/api/v2/beers?size=30").then(resp => resp.json()).then(beers => console.log(beers))

//Operador ternário

// numbers.length > 10 ? console.log("Array length higher than 10"): console.log("Array length lower than 10");

//If/else

// if(numbers.length > 10){
//     console.log("Array length higher than 10");
// }else{
//     console.log("Array length lower than 10");
// }

//Encadear ifs

// if(numbers.length > 10){
//     console.log("Array length higher than 10"); //true
// }else if(numbers.length > 10 && numbers.length <= 20){
//     console.log("Array length between 10 and 20"); //true intermédia
// }else{
//     console.log("Array length higher than 20"); //false
// }


//FOR 
// for(let i = 0; i < numbers.length;i++){
//     console.log("index" + i);
//     console.log(numbers[i])
// }

// numbers.forEach(number => console.log(number)); //Mesmo que o for anterior

//FOR/OF

// for(let number of numbers){
//     console.log(number); //Mesmo que for ou foreach
// }

//FOR/IN

let user = {
    firstName: "Francisco",
    lastName: "Brito",
    age: 33
}

// for(let key in user){
//     console.log(key + ": " + user[key]); //user[key] dá o value associado à key
// }

//Continue
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]> 200){
//         continue;
//     }

//     console.log(numbers[i]);
// }

//Break
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]> 200){
//         break;
//     }

//     console.log(numbers[i]);
// }

//Switch
let day = new Date().getDay();
switch(day){
    case 0:
        console.log("Domingo");
        break;
    case 1: 
        console.log("Segunda-feira");

    case 3: 
        console.log("Quarta-feira");
        break;
    default:
        console.log("not implemented");
}