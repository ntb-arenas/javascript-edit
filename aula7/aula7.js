// //Revisão


// //Declaração
// function displayWelcomeMessage(personName, weather){
//     const myString = ` ${personName}, welcome to class 7 and to this ${weather} day `;
//     console.log(myString.length); //Lenght = número de caracteres da string
//     console.log(myString.charAt(myString.length-1)) //charAt - get last char
//     console.log(myString.concat(" but tomorrow will be better", ", hopefully")) //concat - concatenar strings, equivalente ao + da aula 2
//     console.log(myString.includes("Francisco")); //procura uma palavra numa string e retorna true se a encontrar
//     console.log(myString.split("class")); //divide a frase num array de acordo com o seu separador
//     console.log(myString.trim()); //remove espaços em branco no início e fim da string
// }


// //Invocação/Execução
// displayWelcomeMessage("Francisco Brito","rainy");

//Arrays

let weekDays = [];
// console.log(emptyArray)
// let emptyArrayConstructor = new Array(10);

weekDays.push("Segunda-feira"); //0
weekDays.push("Terça-feira"); //1
weekDays.push("Quarta-feira"); //2
weekDays.push("Quinta-feira"); //3
weekDays.push("Sexta-feira"); //4
// emptyArray.push({
//     name: "Francisco Brito",
//     location: "Lisbon",
//     age: 33
// }); //Adiciona um novo elemento ao fim;
// emptyArray.pop(); //Remove o último elemento do array

let weekendDays = ["Sabado","Domingo"]
// console.log(weekDays.concat(weekendDays)); //Transforma 2 arrays num só com o conjunto dos seus elementos
// console.log(weekDays.concat(weekendDays).join(",")); //Imprime todos os elementos do arrays separados por virgulas
// console.log(weekDays.reverse()); //Alterar (reverter) a ordem do array e modifica o array original
// console.log(weekDays.shift()); //Remove o primeiro elemento e modifica o array original
// console.log(weekDays.slice(2,4)); //Retorna um intervalo definido pelo indice inicial e final
// console.log(weekDays.splice(0,4)); //
// console.log(weekDays);

const numbers = [1,2,4,6,5,4];

const countries = [
    {
      name: "Portugal",
      capital: "Lisboa",
      population: 10310000,
      minimunSalary: 740,
      flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    },
    {
      name: "Spain",
      capital: "Madrid",
      population: 47350000,
      minimunSalary: 1050,
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    },
    {
      name: "France",
      capital: "Paris",
      population: 67390000,
      minimunSalary: 1539,
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
    },
    {
      name: "Germany",
      capital: "Berlin",
      population: 83240000,
      minimunSalary: 1584,
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    },
    {
      name: "United Kingdom",
      capital: "Lonndon",
      population: 67220000,
      minimunSalary: 1598,
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
    },
    {
      name: "The Netherlands",
      capital: "Amsterdam",
      population: 17440000,
      minimunSalary: 1635,
      flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    },
  ];


//   console.log(countries.sort((countryA,countryB) => countryB.population - countryA.population));
// console.log(countries.every(c => {

//     return c.population > 10000000;
// })); //verifica se todos os elementos do array têm população superior a 20 milhões

//countries - 1 iteração - country indice 0 - Portugal
//countries - 2 iteração - country indice 1 - Spain

// console.log(countries.filter(c => c.population > 30000000)); //Filter - retorna os elementos que retornem true numa determinada condição

// countries.forEach(country => console.log(`Im ${country.name} and my capital is ${country.capital}`)); //Percorre cada elemento do meu array

// console.log(countries.map(country => country.population).sort()); //Percorre cada elemento do meu array e modifica os seus elementos


// console.log(numbers.indexOf(4)); 
// console.log(numbers.lastIndexOf(4)); 

//Reduce - 

// let countrySum = countries.reduce((acc,currentCountry) => {
//    return acc + currentCountry.population
// }
// , 0);

// console.log(countrySum);
  
//   fetch("https://restcountries.com/v2/all").then(resp => resp.json()).then(countries => {
//     let countrySum = countries.reduce((acc,currentCountry) => {
//       return acc + currentCountry.population
//    }
//    , 0);
//    console.log(countrySum);
//     });

//exercicio

let nums = [1,2,100,4,5,6,7,8];


let strings = ["D","A","B","ABC","ACB"];

console.log(strings.sort());