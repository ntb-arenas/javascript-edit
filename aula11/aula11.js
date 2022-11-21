//Resumo 

//AULA 1

//var - raramente justifica - não é block scoped
// Por exemplo - adicionar article

// var user = {
//     name: "John"
// }

// if(true){
//     var user = "Mary";
// }

//LET - Block scoped

// let userLet = {
//     name: "John"
// }

// if(true){
//     let userLet = "Mary";
// }

// console.log(userLet);

//CONST - Block scoped

// const userConst = "John";

// userConst = "Mary"; //Não é possível reassignar valores a constantes

// const user = { name: 'John'};

// user = { name: 'Mary'};

// console.log(user)

//Tipos primitivos

// let firstName = 'John' //string
// let age = 33; //number
// let country = null;
// let isEmployed = true; //boolean
// let address; //let address = undefined

//Operadores

//+ 
// let string1 = "Hello";
// let string2 = "world";
// let concatString = string1 + string2 //Concatenação
// let concatTemplateLiteral = `${string1}${string2}`; //Concatenação por template literals
// let sum = 5 + 6;

// let number = "66";
// number = +number; //convert strings em números
// let number2 = "77";
// number2 = Number(number2);
// console.log(number2);

// //Incrementar ++
// let i = 0;
// i++; // i = i + 1;

// //Divisão inteira - %
// let reminder = 10 / 2 //0

// // && (and) e || (or)

// console.log(true && false) //false
// console.log(true || false) //true


//Operador ternário
//Alternativa ao if

// condição? true (code) : false (code)

// let isA = true;
// let isB = false;

// if(isA || isB){
//     displayA();
// }else{
//     displayB();
// }

// isA || isB ? displayA(): displayB(); //Operador ternário - usar no máximo 2 ou 3 vezes, caso contrário usar if/else 

//Funções

//Declaração
// function displayDate(date, params1, param2){ //Quantos parametros quisermos
//     console.log(date);
// }

// //Executar função
// displayDate(new Date(), 2 ,3 ); //3 argumentos

// //arrow function
// let display = () => {

// }

// //DOM e eventos
// let element = document.querySelector(".anotherClass");

// document.querySelector(".myClass").innerHTML = "Hello World";
// document.querySelector(".myClass").className = "hello";
// document.querySelector(".myClass").style.width = "100px";
// document.querySelector(".myClass").style.height = "100px";
// element.innerHTML = "Hello World";
// element.className = "hello";
// element.style.width = "100px";
// element.style.height = "100px";

//Criar elemento
// let newElement = document.createElement("article");
// // newElement.innerText = "<h1>Hello World</h1>"; //Só aceita texto mas não interpreta HTML
// newElement.innerHTML = `
//     <h1>Hello World</h1>
// `; //Esta propriedade já interpreta HTML
// document.body.appendChild(newElement);

// //Remove element
// document.body.removeChild();

//OBJECTOS
// let user = {
//     firstName: "Elon",
//     lastName: "Musk",
//     age: 50,
//     companies: ["Tesla","SpaceX","SolarCity"],
//     address: {
//         city: "New York"
//     }
// }

// //Aceder a propriedades de objetos
// user.age //Output: 50
// user["age"] //Output: 50

// //Arrays
let array = [1,5,2,6,2,7];
// let arrayConstructor = new Array(5);

// array.includes(6) //ou
// array.find(n => n === 6);
// array.indexOf(6) //-1 não encontrado

// //Reduce
// array.reduce((sum,curr) => sum + curr,0);

// let cart = {
//     total: 0,
//     products : [{ sku: "123", quantity: 2}]
// }

// cart.products.reduce((prevProduct,currProduct) => prevProduct?.sku === currProduct.sku ? {...currProduct, quantity: currProduct.quantity + 1}:prevProduct  ,{})

// array.push(1); //Adicionar ao array um novo elemento
// array.pop(); //Remover um elemento do final array

// array.unshift(2) //Adiciona ao início do array
// array.shift(); //Remove elemento no início do array

// console.log(array.slice(1,3));
// console.log(array.splice(1,3));
// console.log(array);

// array.sort((a,b) => b -a); //Sort por ordem decrescente

// array.reverse(); //Inverter a ordem do array

// array.map(n => n*10);
// console.log(array.map(n => n*10));

// //exemplo 2
// console.log(array.map(task => (`<div>My task ${task}</div>`)));

// let element = document.createElement("div");
// // console.log(array.map(task => (`<div>My task ${task}</div>`)));
// element.innerHTML = array.map(task => (`<div>My task ${task}</div>`)).join("<hr>");
// document.body.appendChild(element);




// //USER
// let userRequest = {
//     name: "John",
//     age: 22
// }

//POST
// {
//     name: "John",
//     age: 22
// }

//PATCH
// {
//     age: 23
// }

//FETCH
//GET
// let promise = fetch("https://random-data-api.com/api/v2/users?size=10", {});

// let usersResponse = [];
// promise
// .then(resp => resp.json())
// .then(users => {
//     usersResponse = users;
//     console.log(usersResponse);
// });

// //POST
// fetch("https://random-data-api.com/api/v2/createUser", {
//     method: "POST",
//     body: {
//         name: "Bill",
//         city: "Lisbon"
//     },
// })

// let usersResponse = [];
// promise
// .then(resp => resp.json())
// .then(users => {
//     usersResponse = users;
//     console.log(usersResponse);
// });

async function getUsers() {
    let res = await fetch("https://random-data-api.com/api/v2/users?size=10");
    let users = await res.json();
    console.log(users);
}

getUsers();
