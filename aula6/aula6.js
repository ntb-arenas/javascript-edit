//Funções

//Declaração
//params fullName = "Francisco Brito", age = 33, city = "Lisboa"
function displayText(fullName, age, city){
    console.log(`${fullName}, age ${age}, city ${city}`)
}

//Execução
displayText("Francisco Brito", 33, "Lisboa");

let persons;

// persons.forEach(person => {
    
// });

//Objectos

const person = {
    fullName: "Francisco Brito",
    age: 33,
    city: "Lisboa",
    height: 1.80,
    weight: 90,
    birthPlace: {
        name: "Portugal",
        city: {
            address: "xpto",
            year: 1989
        }
    }
}

// console.log(person.birthPlace.city.address);

document.querySelector(".fullName-js span").innerHTML = person.fullName;
document.querySelector(".age-js span").innerHTML = person.birthPlace.city.address.postalCode;